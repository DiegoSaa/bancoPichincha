import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import FinancialProductService from "../../data/services/financialProduct";
import { FinancialProductCreationData } from "../../data/repositories/FinancialProductCreation";
import { FinancialProduct } from "../../data/models/FinancialProductModel";

const financialProductService = new FinancialProductService();

export type UpdateProductParams = Partial<FinancialProductCreationData> & {
  id: string;
};

const useEditFinancialProduct = (): UseMutationResult<
  void,
  Error,
  UpdateProductParams
> => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, UpdateProductParams>(
    async (updatedProductData: UpdateProductParams) => {
      await financialProductService.updateFinancialProduct(updatedProductData);
    },
    {
      onMutate: async (updatedProductData) => {
        await queryClient.cancelQueries(["financialProducts"]);

        const previousProducts =
          queryClient.getQueryData<FinancialProduct[]>("financialProducts");

        if (previousProducts) {
          queryClient.setQueryData<FinancialProduct[]>(
            "financialProducts",
            previousProducts.map((product) =>
              product.id === updatedProductData.id
                ? { ...product, ...updatedProductData }
                : product
            )
          );
        }

        return { previousProducts };
      },
      onError: (error, variables, context) => {
        if (context?.previousProducts) {
          queryClient.setQueryData(
            "financialProducts",
            context.previousProducts
          );
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries(["financialProducts"]);
      },
    }
  );
};

export default useEditFinancialProduct;

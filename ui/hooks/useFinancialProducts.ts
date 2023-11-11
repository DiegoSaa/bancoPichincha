import FinancialProductService from "../../data/services/financialProduct";
import { FinancialProduct } from "../../data/models/FinancialProductModel";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

const financialProductService = new FinancialProductService();

const useFinancialProducts = (): UseQueryResult<FinancialProduct[], Error> => {
  return useQuery<FinancialProduct[], Error>({
    queryKey: ["financialProducts"],
    queryFn: () => financialProductService.getFinancialProducts(),
  });
};

export default useFinancialProducts;

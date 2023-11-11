import FinancialProductService from "../../data/services/financialProduct";
import { FinancialProduct } from "../../data/models/FinancialProductModel";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

const useFinancialProducts = (): UseQueryResult<FinancialProduct[], Error> => {
  return useQuery<FinancialProduct[], Error>({
    queryKey: ["financialProducts"],
    queryFn: () => FinancialProductService.getFinancialProducts(),
  });
};

export default useFinancialProducts;

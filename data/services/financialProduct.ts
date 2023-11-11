import { inject } from "inversify";
import { HttpManager } from "../network/http";
import { FinancialProduct } from "../models/FinancialProductModel";
import { FinancialProductCreationData } from "../repositories/FinancialProductCreation";

class FinancialProductService {
  private static httpManager: HttpManager;

  constructor(@inject("HttpManager") http: HttpManager) {
    FinancialProductService.httpManager = http;
  }

  static async getFinancialProducts(): Promise<FinancialProduct[]> {
    const data = await FinancialProductService.httpManager.get("/bp/products");
    return data.map((item) => FinancialProduct.fromJson(item));
  }

  static async createFinancialProduct(
    productData: FinancialProductCreationData
  ): Promise<FinancialProduct> {
    const response = await this.httpManager.post("/bp/products", productData);
    return FinancialProduct.fromJson(response);
  }

  static async updateFinancialProduct(
    productId: string,
    productData: Partial<FinancialProductCreationData>
  ): Promise<FinancialProduct> {
    const response = await this.httpManager.put(
      `/bp/products/${productId}`,
      productData
    );
    return FinancialProduct.fromJson(response);
  }

  static async deleteFinancialProduct(productId: string): Promise<void> {
    return this.httpManager.delete(`/bp/products/${productId}`);
  }

  static async verifyProductId(productId: string): Promise<boolean> {
    return this.httpManager.get(`/bp/products/verification?id=${productId}`);
  }
}

export default FinancialProductService;

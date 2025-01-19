import fetch from "@/lib/api";

export const getProducts = async () => {
  const response = await fetch.get('/api/products');
  return response.data;
}

export const getProductById = async (id: string) => {
  const response = await fetch.get(`/api/products/${id}`);
  return response.data;
}

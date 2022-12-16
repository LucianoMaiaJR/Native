import { api } from "../api/api";

const postProduct = (data) => {
  return api.post(`/products`, data);
};


const clienteService = {
  postProduct,
};
export default clienteService;
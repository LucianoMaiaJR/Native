import { api } from "../api/api";
import { AxiosResponse } from "axios";

export interface listaProdutos {
  id: number;
  title: string;
  description: string;
  price: number;
  category: {
    id:number
    name: string
    image: string
  };
  images: string[];
}

export function getProduto(): Promise<AxiosResponse<listaProdutos[], any>> {
  let url = `/products`;

  return api.get(url);
}

export interface produtoStatusProps {
  id: number;
  title: string;
  description: string;
  price: number;
  category: {
    id:number
    name: string
    image: string
  };
  images: string[];
}

export function getProdutoEspecifico(
  id: string
): Promise<AxiosResponse<produtoStatusProps, any>> {
  let url = `products/${id}`;

  return api.get(url);
}

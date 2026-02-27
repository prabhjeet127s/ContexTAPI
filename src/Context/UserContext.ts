import { createContext } from "react";
export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type UserContextType = {
  sidebaropen: boolean;
  setsidebaropen: React.Dispatch<React.SetStateAction<boolean>>;
  product: Product[];
  addcart: Product[];
  setaddcart: React.Dispatch<React.SetStateAction<Product[]>>;
};

const UserContext = createContext<any>(null);

export default UserContext;



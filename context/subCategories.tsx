import { ProductType, SubCategoryType } from "@/types/products";
import {
  useContext,
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

interface SubCategoriesContextType {
  subcategories: SubCategoryType[];
  setSubCategories: Dispatch<SetStateAction<SubCategoryType[]>>;
  newProducts: ProductType[];
  setNewProducts: Dispatch<SetStateAction<ProductType[]>>;
}

const SubCategoriesContext = createContext<SubCategoriesContextType | null>(
  null
);

const SubCategoriesContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [subcategories, setSubCategories] = useState<SubCategoryType[]>([]);
  const [newProducts, setNewProducts] = useState<ProductType[]>([]);
  return (
    <SubCategoriesContext.Provider
      value={{ subcategories, setSubCategories, newProducts, setNewProducts }}
    >
      {children}
    </SubCategoriesContext.Provider>
  );
};

export default SubCategoriesContextProvider;
export const useSubCategories = () =>
  useContext(SubCategoriesContext) as SubCategoriesContextType;

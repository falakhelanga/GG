export type ReviewType = {
  [x: string]: any;
  author: string;
  content: string;
  rating: number;
  product?: ProductType;
  id: number;
};

export type CategoryType = {
  [x: string]: any;
  name: string;
  description: string;
  id: number;
};
export type SubCategoryType = {
  [x: string]: any;
  name: string;
  description: string;
  products: ProductType[];
  id: number;
};

export type GynaguardPromiseType = {
  text: string;
  badge: any;
  id: number;
};

export type ProductType = {
  name: string;
  subContent: string;
  subContentBullets: string;
  image: string;
  description: string;
  quantities: string;
  category: CategoryType;
  reviews: ReviewType;
  createdAt: Date;
  id: number;
  isNew: boolean;
  dischemLink: string;
  clicksLink: string;
  checkersLink: string;
  gynaguard_promise: {
    id: number;
    data: {
      attributes: GynaguardPromiseType;
    };
  };
};

export interface Product {
  id: number;
  category: string;
  phoneId: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: string;
  image: string;
  is_discounted: boolean;
  quantity?: number;
  isAddedToCart?: boolean;
  isLiked?: boolean;
  wasOpened?: boolean;
}

export interface ProductExtended {
  camera: string;
  capacity: string;
  capacity_available: string[];
  cell: string[];
  color: string;
  colors_available: string[];
  description: {};
  id: string;
  images: string[];
  name: string;
  namespace_id: string;
  price_discount: string;
  price_regular: string;
  processor: string;
  ram: string;
  resolution: string;
  screen: string;
  zoom: string;
}

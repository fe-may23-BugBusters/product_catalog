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
  capacityAvailable: string[];
  cell: string[];
  color: string;
  colorsAvailable: string[];
  description: {};
  phoneId: string;
  images: string[];
  name: string;
  namespaceId: string;
  priceDiscount: string;
  priceRegular: string;
  processor: string;
  ram: string;
  resolution: string;
  screen: string;
  zoom: string;
}

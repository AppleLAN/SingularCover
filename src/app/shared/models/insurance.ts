export interface Insurance {
  'Kind-image': string;
  kindImage: string;
  brand: string;
  'brand-image': string;
  brandImage: string;
  id: string;
  kind: string;
  name: string;
  price: string;
  favorite?: boolean;
  key: string;
}

export interface BackendInsurance {
  'Kind-image': string;
  brand: string;
  'brand-image': string;
  id: string;
  kind: string;
  name: string;
  price: string;
  favorite?: boolean;
}

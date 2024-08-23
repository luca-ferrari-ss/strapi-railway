// Interface automatically generated by schemas-to-ts

export interface ProductTypology {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    name?: string;
    rank?: number;
    locale: string;
    localizations?: { data: ProductTypology[] };
  };
}
export interface ProductTypology_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name?: string;
  rank?: number;
  locale: string;
  localizations?: ProductTypology_Plain[];
}

export interface ProductTypology_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name?: string;
  rank?: number;
  locale: string;
  localizations?: ProductTypology[];
}

export interface ProductTypology_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name?: string;
  rank?: number;
  locale: string;
  localizations?: ProductTypology[];
}

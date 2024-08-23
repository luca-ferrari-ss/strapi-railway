// Interface automatically generated by schemas-to-ts

export interface Download {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    name?: string;
    rank?: number;
    locale: string;
    localizations?: { data: Download[] };
  };
}
export interface Download_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name?: string;
  rank?: number;
  locale: string;
  localizations?: Download_Plain[];
}

export interface Download_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name?: string;
  rank?: number;
  locale: string;
  localizations?: Download[];
}

export interface Download_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name?: string;
  rank?: number;
  locale: string;
  localizations?: Download[];
}

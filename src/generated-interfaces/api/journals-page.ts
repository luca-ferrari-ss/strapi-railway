// Interface automatically generated by schemas-to-ts

import { Seo } from '../components/shared/Seo';
import { Seo_Plain } from '../components/shared/Seo';
import { Seo_NoRelations } from '../components/shared/Seo';

export interface JournalsPage {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    slug?: string;
    transparentHeader?: boolean;
    spinningIcon?: boolean;
    seo?: Seo;
    blocks?: any;
    locale: string;
    localizations?: { data: JournalsPage[] };
  };
}
export interface JournalsPage_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  slug?: string;
  transparentHeader?: boolean;
  spinningIcon?: boolean;
  seo?: Seo_Plain;
  blocks?: any;
  locale: string;
  localizations?: JournalsPage_Plain[];
}

export interface JournalsPage_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  slug?: string;
  transparentHeader?: boolean;
  spinningIcon?: boolean;
  seo?: Seo_NoRelations;
  blocks?: any;
  locale: string;
  localizations?: JournalsPage[];
}

export interface JournalsPage_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  slug?: string;
  transparentHeader?: boolean;
  spinningIcon?: boolean;
  seo?: Seo_Plain;
  blocks?: any;
  locale: string;
  localizations?: JournalsPage[];
}
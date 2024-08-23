// Interface automatically generated by schemas-to-ts

import { Link } from './Link';
import { Image } from './Image';
import { Link_Plain } from './Link';
import { Image_Plain } from './Image';
import { Link_NoRelations } from './Link';
import { Image_NoRelations } from './Image';

export interface LinkImage {
  link?: Link;
  image?: Image;
}
export interface LinkImage_Plain {
  link?: Link_Plain;
  image?: Image_Plain;
}

export interface LinkImage_NoRelations {
  link?: Link_NoRelations;
  image?: Image_NoRelations;
}

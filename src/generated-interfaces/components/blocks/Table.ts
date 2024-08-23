// Interface automatically generated by schemas-to-ts

import { TableRow } from '../elements/TableRow';
import { TableRow_Plain } from '../elements/TableRow';
import { TableRow_NoRelations } from '../elements/TableRow';

export interface Table {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  title?: string;
  rows: TableRow[];
}
export interface Table_Plain {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  title?: string;
  rows: TableRow_Plain[];
}

export interface Table_NoRelations {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  title?: string;
  rows: TableRow_NoRelations[];
}

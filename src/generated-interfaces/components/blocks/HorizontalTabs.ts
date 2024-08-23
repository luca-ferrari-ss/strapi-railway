// Interface automatically generated by schemas-to-ts

import { Tab } from '../elements/Tab';
import { Tab_Plain } from '../elements/Tab';
import { Tab_NoRelations } from '../elements/Tab';

export interface HorizontalTabs {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  title?: any;
  tabs: Tab[];
}
export interface HorizontalTabs_Plain {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  title?: any;
  tabs: Tab_Plain[];
}

export interface HorizontalTabs_NoRelations {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  title?: any;
  tabs: Tab_NoRelations[];
}

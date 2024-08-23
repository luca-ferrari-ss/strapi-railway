// Interface automatically generated by schemas-to-ts

import { Media } from '../../common/Media';
import { Media_Plain } from '../../common/Media';

export interface DownloadFile {
  name?: string;
  file?: { data: Media };
}
export interface DownloadFile_Plain {
  name?: string;
  file?: Media_Plain;
}

export interface DownloadFile_NoRelations {
  name?: string;
  file?: number;
}


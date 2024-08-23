// Interface automatically generated by schemas-to-ts

import { DownloadFile } from '../elements/DownloadFile';
import { Multimedia } from '../elements/Multimedia';
import { DownloadFile_Plain } from '../elements/DownloadFile';
import { Multimedia_Plain } from '../elements/Multimedia';
import { DownloadFile_NoRelations } from '../elements/DownloadFile';
import { Multimedia_NoRelations } from '../elements/Multimedia';

export interface DownloadSingleCopy {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  downloadFile?: DownloadFile;
  multimedia?: Multimedia;
}
export interface DownloadSingleCopy_Plain {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  downloadFile?: DownloadFile_Plain;
  multimedia?: Multimedia_Plain;
}

export interface DownloadSingleCopy_NoRelations {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  downloadFile?: DownloadFile_NoRelations;
  multimedia?: Multimedia_NoRelations;
}

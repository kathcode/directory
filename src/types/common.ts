export interface IDirectoryItem {
  name: string;
  number: string;
  service: string;
  social?: IDirectoryItemSocial;
}

export interface IDirectoryItemSocial {
  [key: string]: string | undefined;
}

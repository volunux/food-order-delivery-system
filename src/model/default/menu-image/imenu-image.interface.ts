export interface IMenuImage {
  location: string;
  mimetype: string;
  size: string;
  key: string;

  getLocation(): string;
  setLocation(location: string): void;
  getMimetype(): string;
  setMimetype(mimetype: string): void;
  getSize(): string;
  setSize(size: string): void;
  getKey(): string;
  setKey(key: string): void;

}
export class PosterImage {
  name: string;
  size: number;
  url: string;
  constructor(name: string, size: number, url: string) {
    this.name = name;
    this.size = size;
    this.url = url;
  }
  getSize(): string {
    if (this.size === 0) {
      return '0 KB';
    } else {
      return Math.round(this.size / 1024) + ' KB';
    }
  }
}

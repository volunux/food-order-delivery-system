import { Column, Entity } from 'typeorm';
import { FmEntity } from './FmEntity';

export class FxStatus extends FmEntity {

  constructor(data?: any) {
    super(data);
    if (data) {
      this.title = data.title;
      this.word = data.word;
      this.description = data.description;
    }
  }

  private title: string;
  private word: string;
  private description: string;

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getWord(): string {
    return this.word;
  }

  public setWord(word: string): void {
    this.word = word;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

}

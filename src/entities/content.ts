/* eslint-disable prettier/prettier */
export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 6 && content.length <= 200;
  }
  constructor(content: string) {
    const isContentLengthValid = this.validateContentLength(content);

    if (!isContentLengthValid) throw new Error("invalid content length");

    this.content = content;
  }
}

/* eslint-disable prettier/prettier */
import { randomUUID } from "crypto";
import { Replace } from "src/helpers/Replace";
import { Content } from "./content";

export interface INotification {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  cancelAt?: Date | null;
  createdAt: Date;
}

export class Notifications {
  private _id:string
  private props: INotification;

  constructor(props: Replace<INotification , {createdAt?: Date}>) {
    this._id = randomUUID()
    this.props = {
      ...props,
      createdAt:props.createdAt ?? new Date(),
    }
  }
  
  public get id():string {
      return this._id
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get category(): string {
    return this.props.category;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;

  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }
  public cancel(){
    this.props.cancelAt = new Date();
  }
  public get cancelAt():Date | null | undefined {
      return this.props.cancelAt;
  }
  public get createdAt(): Date {
    return this.props.createdAt;
  }
}

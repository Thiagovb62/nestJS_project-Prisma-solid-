import { IsNotEmpty, Length } from "class-validator";

export class createNotificationBody {
  @IsNotEmpty()
  content: string;
  
  @IsNotEmpty()
  @Length(6, 30)
  category: string;
  
  @IsNotEmpty()
  recipientId: string;
}
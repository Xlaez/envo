import { IsMobilePhone, IsString } from "class-validator";

export class RegisterAccountDto {
  @IsString()
  @IsMobilePhone()
  phone: string;
}

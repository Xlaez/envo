import { DolphServiceHandler } from "@dolphjs/dolph/classes";
import { Dolph, NotFoundException } from "@dolphjs/dolph/common";
import { InjectMongo } from "@dolphjs/dolph/decorators";
import { Model } from "mongoose";
import { AccountModel, IAccount } from "./account.model";
import { RegisterAccountDto } from "./account.dto";

@InjectMongo("accountModel", AccountModel)
export class AccountService extends DolphServiceHandler<Dolph> {
  accountModel!: Model<IAccount>;

  constructor() {
    super("accountService");
  }

  async createAccount(dto: RegisterAccountDto) {
    return this.accountModel.create(dto);
  }

  async getAccount(accountId: string) {
    const account = await this.accountModel.findById(accountId);

    if (!account) throw new NotFoundException("Account does not exist.");

    return {
      data: account,
    };
  }
}

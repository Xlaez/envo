import { DolphControllerHandler } from "@dolphjs/dolph/classes";
import {
  Dolph,
  SuccessResponse,
  DRequest,
  DResponse,
  TryCatchAsyncDec,
  validateBodyMiddleware,
} from "@dolphjs/dolph/common";
import { Get, Post, Route, UseMiddleware } from "@dolphjs/dolph/decorators";
import { RegisterAccountDto } from "./account.dto";

@Route("account")
export class AccountController extends DolphControllerHandler<Dolph> {
  constructor() {
    super();
  }

  @Post()
  @UseMiddleware(validateBodyMiddleware(RegisterAccountDto))
  @TryCatchAsyncDec
  async createAccount(req: DRequest, res: DResponse) {}

  @Get("greet")
  async greet(req: DRequest, res: DResponse) {
    SuccessResponse({
      res,
      body: { message: "you've reached the account endpoint." },
    });
  }
}

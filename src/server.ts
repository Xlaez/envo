import { DolphFactory, middlewareRegistry } from "@dolphjs/dolph";
import { AccountComponent } from "./components/account/account.component";
import { QuizComponent } from "./components/quiz/quiz.component";
import helmet from "helmet";

middlewareRegistry.register(helmet());

const dolph = new DolphFactory([AccountComponent, QuizComponent]);
dolph.start();

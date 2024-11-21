import { DolphFactory } from "@dolphjs/dolph";
import { AccountComponent } from "./components/account/account.component";
import { QuizComponent } from "./components/quiz/quiz.component";

const dolph = new DolphFactory([AccountComponent, QuizComponent]);
dolph.start();

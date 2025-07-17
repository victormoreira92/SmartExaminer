import { type RouteConfig, index } from "@react-router/dev/routes";
import { route } from "@react-router/dev/routes";

export default [
  index("components/home/Home.tsx"),
  route('dashboard', 'components/dashboard/Dashboard.tsx'),
  route('createTest', 'components/test/CreateTest.tsx'),
  route('test/:id', 'components/test/Test.tsx', [
    route('basic-settings', 'components/test/BasicSettings.tsx'),
    route('question-manager', 'components/test/QuestionManager.tsx')
  ]),
  route('questions', 'components/question/questions/BankQuestion.tsx'),
  route('question/:id', 'components/question/updateQuestion/UpdateQuestion.tsx'),
  route('new-question', 'components/question/createQuestion/CreateQuestion.tsx')
] satisfies RouteConfig;

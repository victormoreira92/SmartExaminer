import { type RouteConfig, index } from "@react-router/dev/routes";
import { route } from "@react-router/dev/routes";

export default [
  index("components/home/Home.tsx"),
  route('dashboard', 'components/dashboard/Dashboard.tsx'),
  route('test/:id', 'components/test/Test.tsx', [
    route('basic-settings', 'components/test/BasicSettings.tsx'),
    route('question-manager', 'components/test/QuestionManager.tsx')
  ]),
] satisfies RouteConfig;

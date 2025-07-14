import { type RouteConfig, index } from "@react-router/dev/routes";
import { route } from "@react-router/dev/routes";

export default [
  index("components/home/Home.tsx"),
  route('dashboard', 'components/dashboard/Dashboard.tsx'),
  route('test', 'components/test/Test.tsx')
] satisfies RouteConfig;

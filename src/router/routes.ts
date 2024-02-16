import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  githubList: string;
  organization: string;
  githubDetail: string;
  rickAndMorty: string;
}

interface Routes extends Omit<SwitchRoutes, "detail"> {
  detail: (id: string) => string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  githubList: "/github-list",
  organization: "/organization",
  githubDetail: "/github-detail",
  rickAndMorty: "/rick-and-morty",
};

export const routes: Routes = {
  ...switchRoutes,
  detail: (id) => generatePath(switchRoutes.root, { id }),
};

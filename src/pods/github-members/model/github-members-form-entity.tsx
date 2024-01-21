export interface GithubMembersFormEntity {
  username: string;
  setUsername: (username: string) => void;
  handleNavigation: (e: React.FormEvent<HTMLFormElement>) => void;
}

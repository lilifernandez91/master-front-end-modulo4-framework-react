export interface MemberDetail {
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
}

export const createInitMemberDetail = (): MemberDetail => ({
  image: "",
  name: "",
  status: "",
  species: "",
  gender: "",
});

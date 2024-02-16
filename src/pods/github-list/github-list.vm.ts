export interface MemberDetail {
    id: number;
    login: string;
    avatar_url: string;
}

export const createInitMemberDetail = (): MemberDetail => ({
    id: 0,
    login: "",
    avatar_url: "",
});

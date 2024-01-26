export interface MemberDetail {
    login: string;
    avatar_url: string;
}

export const createInitMemberDetail = (): MemberDetail => ({
    login: "",
    avatar_url: "",
});

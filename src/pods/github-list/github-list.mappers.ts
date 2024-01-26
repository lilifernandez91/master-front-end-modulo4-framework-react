import * as api from "@/pods/github-list/api/apiModel";
import * as vm from "@/pods/github-list/github-list.vm";

export const mapMemberFromApiToVm = (
    member: api.GitHubUserApi
): vm.MemberDetail => ({
    login: member.login,
    avatar_url: member.avatar_url,
});

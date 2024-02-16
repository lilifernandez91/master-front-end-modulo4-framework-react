import * as api from "@/pods/github-list/api/apiModel";
import * as vm from "@/pods/github-list/github-list.vm";

export const mapMemberFromApiToVm = (
    member: api.MemberDetailApi
): vm.MemberDetail => ({
    id: member.id,
    login: member.login,
    avatar_url: member.avatar_url,
});

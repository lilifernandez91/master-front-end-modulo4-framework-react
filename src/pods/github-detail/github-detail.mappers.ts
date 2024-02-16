import * as api from "@/pods/github-detail/api/apiModel";
import * as vm from "@/pods/github-detail/github-detail.vm";

export const mapMemberFromApiToVm = (
    member: api.MemberDetailApi
): vm.MemberDetail => ({
    id: member.id,
    login: member.login,
    avatar_url: member.avatar_url,
    name: member.name,
    company: member.company,
});

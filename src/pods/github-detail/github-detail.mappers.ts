import * as api from "@/pods/github-detail/api/apiModel";
import * as vm from "@/pods/github-detail/github-detail.vm";

const mapMemberFromApiToVm = (
    member: api.MemberDetailApi
): vm.MemberDetail => ({
    id: member?.id ?? 0,
    login: member?.login ?? "",
    avatar_url: member?.avatar_url ?? "",
    name: member?.name ?? "",
    company: member?.company ?? "",
});

export const mapMemberListFromApiToVm = (
    memberList: api.MemberDetailApi
): vm.MemberDetail => mapMemberFromApiToVm(memberList);





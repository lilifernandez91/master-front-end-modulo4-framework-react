import * as api from "@/pods/github-list/api/apiModel";
import * as vm from "@/pods/github-list/github-list.vm";

const mapMemberFromApiToVm = (
    member: api.MemberDetailApi
): vm.MemberDetail => ({
    id: member?.id ?? 0,
    login: member?.login ?? "",
    avatar_url: member?.avatar_url ?? "",
});

export const mapMemberListFromApiToVm = (
    memberList: api.MemberDetailApi[]
): vm.MemberDetail[] => memberList.map(mapMemberFromApiToVm);


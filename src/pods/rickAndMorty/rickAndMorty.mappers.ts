import * as api from "@/pods/rickAndMorty/api/apiModel";
import * as vm from "@/pods/rickAndMorty/rickAndMorty.vm";

export const mapMemberFromApiToVm = (
  member: api.MemberDetailApi
): vm.MemberDetail => ({
  image: member.image,
  name: member.name,
  status: member.status,
  species: member.species,
  gender: member.gender,
});

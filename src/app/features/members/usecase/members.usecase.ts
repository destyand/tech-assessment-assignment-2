import { MemberPayloadType } from "../domain/members.entity";
import { MembersRepositoryInterface } from "./members.repository.interface";

export async function getMembersUseCase(repo: MembersRepositoryInterface, search: string) {
	return repo.getMembers(search)
}
export async function getMemberDetailUseCase(repo: MembersRepositoryInterface, id: string) {
	return repo.getMemberDetail(id)
}
export async function postMemberUseCase(repo: MembersRepositoryInterface, payload: MemberPayloadType) {
	return repo.postMember(payload)
}
export async function patchMemberUseCase(repo: MembersRepositoryInterface, id: string, payload: MemberPayloadType) {
	return repo.patchMember(id, payload)
}
export async function deleteMemberUseCase(repo: MembersRepositoryInterface, id: string) {
	return repo.deleteMember(id)
}
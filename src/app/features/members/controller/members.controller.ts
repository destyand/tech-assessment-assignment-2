import { MemberPayloadType } from "../domain/members.entity"
import { ApiMembersRepository } from "../infrastructure/members.repository.api"
import { deleteMemberUseCase, getMemberDetailUseCase, getMembersUseCase, patchMemberUseCase, postMemberUseCase } from "../usecase/members.usecase"

export async function getMembersController(search: string) {
	const repo = new ApiMembersRepository()
	return getMembersUseCase(repo, search)
}

export async function getMemberDetailController(id: string) {
	const repo = new ApiMembersRepository()
	return getMemberDetailUseCase(repo, id)
}

export async function postMemberController(payload: MemberPayloadType) {
	const repo = new ApiMembersRepository()
	return postMemberUseCase(repo, payload)
}

export async function patchMemberController(id: string, payload: MemberPayloadType) {
	const repo = new ApiMembersRepository()
	return patchMemberUseCase(repo, id, payload)
}

export async function deleteMemberController(id: string) {
	const repo = new ApiMembersRepository()
	return deleteMemberUseCase(repo, id)
}
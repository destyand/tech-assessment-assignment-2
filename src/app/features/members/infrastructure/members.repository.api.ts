import { GetMemberResponse, MemberDetailType, MemberListType, MemberPayloadType } from "../domain/members.entity";
import { MembersRepositoryInterface } from "../usecase/members.repository.interface";

export class ApiMembersRepository implements MembersRepositoryInterface {
	getMembers: (search: string) => Promise<MemberListType[]> = async (search) => {
		const filter = search ? `?search=${search}` : '';
		const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/members/${filter}`

		const res = await fetch(url)
		const result = await res.json() as GetMemberResponse<MemberListType[]>
		return result.data
	};
	getMemberDetail: (id: string) => Promise<MemberDetailType> = async (id) => {
		const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/members/${id}`

		const res = await fetch(url)
		const result = await res.json() as GetMemberResponse<MemberDetailType>
		return result.data
	};
	postMember: (payload: MemberPayloadType) => Promise<MemberDetailType> = async (payload) => {
		const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/members`

		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload)
		})

		const result = await res.json() as GetMemberResponse<MemberDetailType>
		return result.data
	};
	patchMember: (id: string, payload: MemberPayloadType) => Promise<MemberDetailType> = async (id, payload) => {
		const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/members/${id}`

		const res = await fetch(url, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload)
		})

		const result = await res.json() as GetMemberResponse<MemberDetailType>
		return result.data
	};
	deleteMember: (id: string) => Promise<MemberDetailType> = async (id) => {
		const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/members/?id=${id}`

		const res = await fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const result = await res.json() as GetMemberResponse<MemberDetailType>
		return result.data
	};
}
import { MemberDetailType, MemberListType, MemberPayloadType } from "../domain/members.entity";

export interface MembersRepositoryInterface {
	getMembers: (search: string) => Promise<MemberListType[]>;
	getMemberDetail: (id: string) => Promise<MemberDetailType>;
	postMember: (payload: MemberPayloadType) => Promise<MemberDetailType>;
	patchMember: (id: string, payload: MemberPayloadType) => Promise<MemberDetailType>;
	deleteMember: (id: string) => Promise<MemberDetailType>;
}
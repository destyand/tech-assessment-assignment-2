'use client'

import MemberForm from "@/app/shared/components/organisms/MemberForm"
import NavDetail from "@/app/shared/components/organisms/NavDetail"
import { useFormMember } from "../hooks/useFormMember";
import { useGetDetailMember } from "../hooks/useGetDetailMember";
import MemberProfileCard from "@/app/shared/components/organisms/MemberProfileCard";
import { usePatchMember } from "../hooks/usePatchMember";

interface PropsType {
	id: string
}
export default function DetailMemberPage({ id }: PropsType) {
	const { form, onUpdate, setForm } = useFormMember();
	const { data } = useGetDetailMember(id, setForm);
	const { submitPatchMember } = usePatchMember()
	return (
		<div>
			<NavDetail
				id={id}
				name={data?.name ?? ''}
				status={data?.status ?? ''}
				createdDate={data?.createdDate ?? ''}
			/>
			<div id="member-detail-container" className="flex flex-row gap-6 justify-between items-start">
				<MemberProfileCard
					name={data?.name ?? ''}
					email={data?.email ?? ''}
					job={data?.job ?? ''}
					totalActivity={data?.totalActivity ?? {
						repositories: 0,
						deployments: 0,
					}}
				/>
				<MemberForm
					id={id}
					form={form}
					onUpdate={onUpdate}
					onSave={(e) => {
						e.preventDefault();
						submitPatchMember(id, form)
					}}
				/>
			</div>
		</div>
	)
}
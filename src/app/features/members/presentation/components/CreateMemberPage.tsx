'use client'

import MemberForm from "@/app/shared/components/organisms/MemberForm"
import NavDetail from "@/app/shared/components/organisms/NavDetail"
import { useFormMember } from "../hooks/useFormMember";
import { usePostMember } from "../hooks/usePostMember";

export default function CreateMemberPage() {
	const { form, onUpdate } = useFormMember();
	const { submitCreateMember } = usePostMember();
	return (
		<div>
			<NavDetail />
			<MemberForm
				form={form}
				onUpdate={onUpdate}
				onSave={(e) => {
					e.preventDefault();
					submitCreateMember(form)
				}}
			/>
		</div>
	)
}
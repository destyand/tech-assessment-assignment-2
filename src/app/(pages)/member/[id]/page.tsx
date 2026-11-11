import DetailMemberPage from "@/app/features/members/presentation/components/DetailMemberPage";
import PageTemplate from "@/app/shared/components/templates/PageTemplate";
import { use } from "react";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
	const { id } = use(params);
	return (
		<PageTemplate>
			<DetailMemberPage id={id} />
		</PageTemplate>
	);
}

import MembersPage from "./features/members/presentation/components/MembersPage";
import PageTemplate from "./shared/components/templates/PageTemplate";

export default async function Home() {
	return (
		<PageTemplate>
			<MembersPage />
		</PageTemplate>
	);
}

'use client'
import DashboardCards from "@/app/shared/components/organisms/DashboardCards";
import { useDashboards } from "../hooks/useDashboards";

export default function Dashboards() {
	const {
		members,
		activeMembers,
		departments,
		pendings,
	} = useDashboards();

	return (
		<DashboardCards
			members={{
				total: members.data?.total ?? '-',
				description: members.data?.description ?? '...'
			}}
			active={{
				total: activeMembers.data?.total ?? '-',
				description: activeMembers.data?.description ?? '...'
			}}
			departments={{
				total: departments.data?.total ?? '-',
				description: departments.data?.description ?? '...'
			}}
			pending={{
				total: pendings.data?.total ?? '-',
				description: pendings.data?.description ?? '...'
			}}
		/>
	)
}
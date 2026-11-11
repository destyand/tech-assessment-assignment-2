'use client'
import DashboardTitle from "../../../../shared/components/organisms/DashboardTitle";
import { useExportCSVMembers } from "../hooks/useExportCSVMembers";
import MembersTable from "./MembersTable";
import Dashboards from "@/app/features/dashboard/presentation/components/Dashboards";

export default function MembersPage() {
	const { isLoading, onExportCSV } = useExportCSVMembers();
	return (
		<div id="members">
			<DashboardTitle
				title="Members Directory"
				desc="Manage your organization team members, cross-functional roles, and workspace access levels."
				onExportCSV={() => onExportCSV()}
				isLoading={isLoading}
			/>
			<Dashboards />
			<MembersTable />
		</div>
	)
}
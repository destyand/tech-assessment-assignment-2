import { MemberTotalActivity } from "@/app/features/members/domain/members.entity";
import { getInitials } from "../../utils/utils";

interface MemberProfileCardProps {
	name: string;
	email: string;
	job: string;
	totalActivity: MemberTotalActivity;
}
export default function MemberProfileCard({ name, email, job, totalActivity }: MemberProfileCardProps) {
	return (
		<div id="member-profile-detail-card" className="bg-white w-1/2 shadow-md p-8 rounded-md flex flex-col items-center text-center">
			<div className="w-24 h-full avatar border-2 rounded-xl bg-[#3525cd] m-4 py-6">
				<span className="text-white text-center text-4xl font-bold">
					{getInitials(name)}
				</span>
			</div>
			<span className="text-sm font-bold text-[#0b1c30]">{name}</span>
			<span className="text-sm text-[#3525cd]">{job}</span>
			<span className="text-sm text-[#464555]">{email}</span>
			<div className="w-full flex flex-row justify-center items-center m-6 bg-[#eff4ff] rounded-sm text-[#0b1c30]">
				<div className="flex flex-col py-4 px-8">
					<p className="font-bold text-lg">{totalActivity.repositories}</p>
					<p className="text-md">REPOSITORIES</p>
				</div>
				<div className="flex flex-col py-4 px-8">
					<p className="font-bold text-lg">{totalActivity.deployments}</p>
					<p className="text-md">DEPLOYMENTS</p>
				</div>
			</div>
		</div>
	)
}
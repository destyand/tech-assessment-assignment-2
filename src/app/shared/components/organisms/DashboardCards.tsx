import { LuBuilding, LuMailPlus, LuUsers, LuZap } from "react-icons/lu";
interface DashboardCardsProps {
	members: { total: number | string, description: string },
	active: { total: number | string, description: string },
	departments: { total: number | string, description: string },
	pending: { total: number | string, description: string },
}

const DashboardCards: React.FC<DashboardCardsProps> = ({
	members,
	active,
	departments,
	pending
}) => {
	return (
		<div id="card-layout" className="flex flex-row justify-between items-center m-4 gap-2">
			<div id="card-1" className="flex flex-col gap-2 w-full h-full bg-white rounded-lg p-4 shadow-md">
				<div className="flex flex-row justify-between items-center">
					<span className="text-[#464555] text-xs font-bold">TOTAL MEMBERS</span>
					<div className="bg-[#eff4ff] p-2 rounded-lg text-[#3525cd]"><LuUsers /></div>
				</div>
				<span className="text-2xl text-[#0b1c30] font-bold">{members.total}</span>
				<span className="max-w-max text-xs text-[#3525cd] bg-[#e5eeff] rounded-2xl px-2 py-1 font-bold">{members.description}</span>
			</div>
			<div id="card-2" className="flex flex-col gap-2 w-full h-full bg-white rounded-lg p-4 shadow-md">
				<div className="flex flex-row justify-between items-center">
					<span className="text-[#464555] text-xs font-bold">ACTIVE NOW</span>
					<div className="bg-[#eff4ff] p-2 rounded-lg text-[#006591]"><LuZap /></div>
				</div>
				<span className="text-2xl text-[#0b1c30] font-bold">{active.total}</span>
				<span className="max-w-max text-xs text-[#006591] bg-[#dce9ff] rounded-2xl px-2 py-1 font-bold">{active.description}</span>
			</div>
			<div id="card-3" className="flex flex-col gap-2 w-full h-full bg-white rounded-lg p-4 shadow-md">
				<div className="flex flex-row justify-between items-center">
					<span className="text-[#464555] text-xs font-bold">DEPARTMENTS</span>
					<div className="bg-[#eff4ff] p-2 rounded-lg text-[#464555]"><LuBuilding /></div>
				</div>
				<span className="text-2xl text-[#0b1c30] font-bold">{departments.total}</span>
				<span className="max-w-max text-xs text-[#464555] bg-[#e5eeff] rounded-2xl px-2 py-1 font-bold">{departments.description}</span>
			</div>
			<div id="card-4" className="flex flex-col gap-2 w-full h-full bg-white rounded-lg p-4 shadow-md">
				<div className="flex flex-row justify-between items-center">
					<span className="text-[#464555] text-xs font-bold">PENDING INVITES</span>
					<div className="bg-[#eff4ff] p-2 rounded-lg text-[#7e3000]"><LuMailPlus /></div>
				</div>
				<span className="text-2xl text-[#0b1c30] font-bold">{pending.total}</span>
				<span className="max-w-max text-xs text-[#7e3000] bg-[#e5eeff] rounded-2xl px-2 py-1 font-bold">{pending.description}</span>
			</div>
		</div>
	)
}

export default DashboardCards;
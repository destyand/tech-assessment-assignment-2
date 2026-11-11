'use client'
import { LuDownload, LuPlus, LuLoaderCircle } from "react-icons/lu";
import Link from "next/link";

interface DashboardActionProps {
	onExportCSV: () => void,
	isLoading: boolean;
}

const DashboardAction: React.FC<DashboardActionProps> = ({
	onExportCSV,
	isLoading
}) => {
	return (
		<div className="flex flex-row gap-4">
			<button type="button" onClick={onExportCSV} className="shadow-sm bg-[#ffff] p-2 rounded-md text-black cursor-pointer hover:shadow-2xl" disabled={isLoading}>
				<span className="flex flex-row gap-2 items-center">
					{isLoading ? <LuLoaderCircle className="animate-spin" /> : <LuDownload />}
					<span className="">Export CSV</span>
				</span>
			</button>
			<Link href="/member/create" className="shadow-sm bg-[#3525cd] p-2 rounded-md cursor-pointer hover:shadow-2xl">
				<span className="flex flex-row gap-2 items-center">
					<LuPlus />
					<span className="">Add Members</span>
				</span>
			</Link>
		</div>
	)
}

export default DashboardAction;
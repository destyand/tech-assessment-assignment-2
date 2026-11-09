import {
	LuTrash2,
	LuDownload,
	LuPlus,
	LuUsers,
	LuZap,
	LuBuilding,
	LuMailPlus,
	LuSearch
} from "react-icons/lu";
import PageTemplate from "./shared/components/templates/PageTemplate";

export default function Home() {
	return (
		<PageTemplate>
			<div id="greetings" className="flex flex-row justify-between items-center m-4">
				<div className="flex flex-col gap-2">
					<span className="text-2xl text-[#0b1c30] font-bold">Members Directory</span>
					<span className="text-sm text-[#464555]">Manage your organization team members, cross-functional roles, and workspace access levels.</span>
				</div>
				<div className="flex flex-row gap-4">
					<button className="shadow-sm bg-[#ffff] p-2 rounded-md text-black cursor-pointer hover:shadow-2xl">
						<span className="flex flex-row gap-2 items-center">
							<LuDownload />
							<span className="">Export CSV</span>
						</span>
					</button>
					<button className="shadow-sm bg-[#3525cd] p-2 rounded-md cursor-pointer hover:shadow-2xl">
						<span className="flex flex-row gap-2 items-center">
							<LuPlus />
							<span className="">Add Members</span>
						</span>
					</button>
				</div>
			</div>
			<div id="card-layout" className="flex flex-row justify-between items-center m-4 gap-2">
				<div id="card-1" className="flex flex-col gap-2 w-full h-full bg-white rounded-lg p-4 shadow-md">
					<div className="flex flex-row justify-between items-center">
						<span className="text-[#464555] text-xs font-bold">TOTAL MEMBERS</span>
						<div className="bg-[#eff4ff] p-2 rounded-lg text-[#3525cd]"><LuUsers /></div>
					</div>
					<span className="text-2xl text-[#0b1c30] font-bold">1,200</span>
					<span className="max-w-max text-xs text-[#3525cd] bg-[#e5eeff] rounded-2xl px-2 py-1 font-bold">+ 12 This Month</span>
				</div>
				<div id="card-2" className="flex flex-col gap-2 w-full h-full bg-white rounded-lg p-4 shadow-md">
					<div className="flex flex-row justify-between items-center">
						<span className="text-[#464555] text-xs font-bold">ACTIVE NOW</span>
						<div className="bg-[#eff4ff] p-2 rounded-lg text-[#006591]"><LuZap /></div>
					</div>
					<span className="text-2xl text-[#0b1c30] font-bold">1,200</span>
					<span className="max-w-max text-xs text-[#006591] bg-[#dce9ff] rounded-2xl px-2 py-1 font-bold">12 This Month</span>
				</div>
				<div id="card-3" className="flex flex-col gap-2 w-full h-full bg-white rounded-lg p-4 shadow-md">
					<div className="flex flex-row justify-between items-center">
						<span className="text-[#464555] text-xs font-bold">DEPARTMENTS</span>
						<div className="bg-[#eff4ff] p-2 rounded-lg text-[#464555]"><LuBuilding /></div>
					</div>
					<span className="text-2xl text-[#0b1c30] font-bold">1,200</span>
					<span className="max-w-max text-xs text-[#464555] bg-[#e5eeff] rounded-2xl px-2 py-1 font-bold">+ 12 This Month</span>
				</div>
				<div id="card-4" className="flex flex-col gap-2 w-full h-full bg-white rounded-lg p-4 shadow-md">
					<div className="flex flex-row justify-between items-center">
						<span className="text-[#464555] text-xs font-bold">PENDING INVITES</span>
						<div className="bg-[#eff4ff] p-2 rounded-lg text-[#7e3000]"><LuMailPlus /></div>
					</div>
					<span className="text-2xl text-[#0b1c30] font-bold">1,200</span>
					<span className="max-w-max text-xs text-[#7e3000] bg-[#e5eeff] rounded-2xl px-2 py-1 font-bold">+ 12 This Month</span>
				</div>
			</div>
			<div id="search-bar" className="bg-white p-4 mx-4 rounded-t-md shadow-lg">
				<div className="relative bg-[#eff4ff] w-1/4">
					<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-[#464555] opacity-50">
						<LuSearch />
					</div>
					<input type="search" id="search" className="block w-full ps-9 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#464555]" placeholder="Search by name, email, or role..." />
				</div>
			</div>
			<div id="table" className="mx-4">
				<table className="w-full bg-white rounded-b-md shadow-md">
					<thead className="bg-[#eff4ff] text-xs text-[#464555]">
						<th className="p-2 text-center">
							<input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
						</th>
						<th className="p-2 text-left">MEMBER</th>
						<th className="p-2 text-left">ROLE / TITLE</th>
						<th className="p-2 text-left">DEPARTMENT</th>
						<th className="p-2 text-left">STATUS</th>
						<th className="p-2 text-left">JOINED DATE</th>
						<th className="p-2 text-left">ACTIONS</th>
					</thead>
					<tbody className="text-xs text-[#464555]">
						<tr>
							<td className="p-2 text-center">
								<input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
							</td>
							<td className="p-2 text-left">
								<div className="flex flex-row items-start gap-2">
									<div className="avatar rounded-xl bg-[#dce9ff] p-2">SR</div>
									<div className="flex flex-col justify-center items-start">
										<span className="font-bold">Sarah Jenkins</span>
										<span>sarah.jenkins@membercore.internal</span>
									</div>
								</div>
							</td>
							<td className="p-2 text-left font-bold">Staff Front End Engineer</td>
							<td className="p-2 text-left">
								<span className="max-w-max text-xs text-[#464555] bg-[#e5eeff] rounded-2xl px-2 py-1 font-bold">Engineering</span>
							</td>
							<td className="p-2 text-left">
								<span className="max-w-max flex items-center bg-[#caf0c3] border border-[#e5eeff] text-[#464555] text-xs rounded-2xl px-2 py-1 font-bold">
									<span className="h-1.5 w-1.5 bg-[#464555] rounded-full me-1"></span>
									Active
								</span>
							</td>
							<td className="p-2 text-left">FEB 14, 2022</td>
							<td className="p-2 text-left">
								<div className="flex flex-row items-center gap-2">
									<button className="btn btn-secondary text-[#3525cd] p-2 rounded-md cursor-pointer hover:shadow-2xl">Edit</button>
									<button className="btn btn-primary text-[#ba1a1a] p-2 rounded-md cursor-pointer hover:shadow-2xl">
										<LuTrash2 />
									</button>
								</div>
							</td>
						</tr>
						<tr>
							<td className="p-2 text-center">
								<input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
							</td>
							<td className="p-2 text-left">
								<div className="flex flex-row items-start gap-2">
									<div className="avatar rounded-xl bg-[#dce9ff] p-2">BB</div>
									<div className="flex flex-col justify-center items-start">
										<span className="font-bold">Brown Bear</span>
										<span>brown.bear@membercore.internal</span>
									</div>
								</div>
							</td>
							<td className="p-2 text-left font-bold">Product Designer</td>
							<td className="p-2 text-left">
								<span className="max-w-max text-xs text-[#464555] bg-[#e5eeff] rounded-2xl px-2 py-1 font-bold">Design</span>
							</td>
							<td className="p-2 text-left">
								<span className="max-w-max flex items-center bg-[#ffdbcc] border border-[#e5eeff] text-[#464555] text-xs rounded-2xl px-2 py-1 font-bold">
									<span className="h-1.5 w-1.5 bg-[#464555] rounded-full me-1"></span>
									Inactive
								</span>
							</td>
							<td className="p-2 text-left">FEB 14, 2022</td>
							<td className="p-2 text-left">
								<div className="flex flex-row items-center gap-2">
									<button className="btn btn-secondary text-[#3525cd] p-2 rounded-md cursor-pointer hover:shadow-2xl">Edit</button>
									<button className="btn btn-primary text-[#ba1a1a] p-2 rounded-md cursor-pointer hover:shadow-2xl">
										<LuTrash2 />
									</button>
								</div>
							</td>
						</tr>
					</tbody>

				</table>
			</div>
		</PageTemplate>
	);
}

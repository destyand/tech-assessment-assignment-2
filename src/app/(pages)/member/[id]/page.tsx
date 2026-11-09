import PageTemplate from "@/app/shared/components/templates/PageTemplate";
import {
	LuUser,
	LuArrowLeft,
	LuCalendar,
	LuCopy,
} from "react-icons/lu";

export default function Home() {
	return (
		<PageTemplate>
			<div id="nav-detail-member" className="flex flex-row justify-between items-center my-4">
				<div className="w-full flex flex-row justify-between items-center">
					<div className="flex flex-row gap-4 justify-start items-center">
						<button className="cursor-pointer hover:shadow-md rounded-md bg-[#dce9ff] p-2 text-[#464555]"><LuArrowLeft /></button>
						<div className="flex flex-col">
							<div className="flex flex-row gap-2 items-center">
								<span className="text-2xl text-[#0b1c30] font-bold">Sarah Jenkins</span>
								<span className="h-6 flex items-center bg-[#caf0c3] border border-[#e5eeff] text-[#464555] text-xs rounded-2xl px-2 py-0.5 font-bold">
									<span className="h-1.5 w-1.5 bg-[#464555] rounded-full me-1"></span>
									Active
								</span>
							</div>
							<div className="flex flex-row gap-2 items-center text-[#777587]">
								<div className="text-xs rounded-sm bg-[#dce9ff] px-2 py-0.5 text-[#777587]">ID: #MEM-2048</div>
								<span className="h-0.5 w-0.5 bg-[#464555] rounded-full me-1"></span>
								<LuCalendar />
								<div className="text-xs text-[#777587]">Joined March 2022</div>
							</div>
						</div>
					</div>
					<button className="text-xs font-bold bg-[#eff4ff] text-[#464555] cursor-pointer hover:shadow-md rounded-md p-2 ">
						<span className="flex flex-row gap-1 items-center">
							<LuCopy />
							<p className="">Copy ID</p>
						</span>
					</button>
				</div>
			</div>
			<div id="member-detail-container" className="flex flex-row gap-6 justify-between items-start">
				<div id="member-detail-card" className="bg-white w-1/2 shadow-md p-8 rounded-md flex flex-col items-center text-center">
					<div className="w-24 h-full avatar border-2 rounded-xl bg-[#3525cd] m-4 py-6">
						<span className="text-white text-center text-4xl font-bold">SJ</span>
					</div>
					<span className="text-sm font-bold text-[#0b1c30]">Sarah Vanece</span>
					<span className="text-sm text-[#3525cd]">Staff Frontend Engineer</span>
					<span className="text-sm text-[#464555]">sarah@email.com</span>
					<div className="w-full flex flex-row justify-center items-center m-6 bg-[#eff4ff] rounded-sm text-[#0b1c30]">
						<div className="flex flex-col py-4 px-8">
							<p className="font-bold text-lg">42</p>
							<p className="text-md">REPOSITORIES</p>
						</div>
						<div className="flex flex-col py-4 px-8">
							<p className="font-bold text-lg">1,8283</p>
							<p className="text-md">DEPLOYMENTS</p>
						</div>
					</div>
				</div>
				<div id="member-detail-form-container" className="w-full">
					<div id="member-input-form" className="bg-white w-full shadow-md p-6 rounded-t-md flex flex-col">
						<div className="flex flex-col gap-2">
							<span className="text-2xl text-[#0b1c30] font-bold">General Information</span>
							<span className="text-sm text-[#464555]">Update personal record, contact credentials, and communication metadata.</span>
						</div>

						<div id="form-input" className="w-full my-4 text-[#464555]">
							<div id="input-container" className="flex flex-row gap-4 justify-between items-center">
								<div className="w-full mb-6">
									<label className="block mb-2.5 text-xs font-bold text-fg-success-strong">
										Full Name <span className="text-red-500">*</span>
									</label>
									<div className="relative">
										<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-[#464555] opacity-50">
											<LuUser />
										</div>
										<input type="input" id="input" className="block w-full ps-9 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#464555] bg-[#eff4ff]" placeholder="Search by name, email, or role..." />
									</div>
									<p className="mt-2.5 text-xs"><span className="font-medium">Well done!</span> Some success message.</p>
								</div>
								<div className="w-full mb-6">
									<label className="block mb-2.5 text-xs font-bold text-fg-success-strong">
										Work Email <span className="text-red-500">*</span>
									</label>
									<div className="relative">
										<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-[#464555] opacity-50">
											<LuUser />
										</div>
										<input type="input" id="input" className="block w-full ps-9 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#464555] bg-[#eff4ff]" placeholder="Search by name, email, or role..." />
									</div>
									<p className="mt-2.5 text-xs"><span className="font-medium">Well done!</span> Some success message.</p>
								</div>
							</div>
							<div id="input-container" className="flex flex-row gap-4 justify-between items-center">
								<div className="w-full mb-6">
									<label className="block mb-2.5 text-xs font-bold text-fg-success-strong">
										Account Status <span className="text-red-500">*</span>
									</label>
									<div className="relative">
										<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-[#464555] opacity-50">
											<LuUser />
										</div>
										<select id="countries" className="block w-full ps-9 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#464555] bg-[#eff4ff] shadow-xs placeholder:text-body">
											<option selected>Choose a country</option>
											<option value="US">United States</option>
											<option value="CA">Canada</option>
											<option value="FR">France</option>
											<option value="DE">Germany</option>
										</select>
									</div>
									<p className="mt-2.5 text-xs"><span className="font-medium">Well done!</span> Some success message.</p>
								</div>
								<div className="w-full mb-6"></div>
							</div>
							<div id="input-container" className="flex flex-row gap-4 justify-between items-center">
								<div className="w-full mb-6">
									<label className="block mb-2.5 text-xs font-bold text-fg-success-strong">
										Bio & Administrative Notes <span className="text-red-500">*</span>
									</label>
									<textarea id="message" rows={4} className="block w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#464555] bg-[#eff4ff]" placeholder="Search by name, email, or role..."></textarea>
								</div>
							</div>
						</div>
					</div>
					<div id="member-form-action" className="w-full bg-[#eff4ff] p-4 rounded-b-md">
						<div className="flex flex-row gap-4 justify-end items-center">
							<button className="text-xs font-bold bg-[#eff4ff] text-[#464555] cursor-pointer hover:shadow-md rounded-md p-2 ">
								Cancel
							</button>
							<button className="text-xs font-bold bg-[#3525cd] text-white cursor-pointer hover:shadow-md rounded-md p-2 ">
								Save Changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</PageTemplate>
	);
}

'use client';
import { MemberPayloadType } from "@/app/features/members/domain/members.entity";
import { useDeleteMember } from "@/app/features/members/presentation/hooks/useDeleteMember";
import Link from "next/link";
import React from "react";
import { LuTrash2, LuUser } from "react-icons/lu";

interface MemberFormProps {
	id?: string;
	form: MemberPayloadType;
	onUpdate: (key: string, value: string) => void;
	onSave: (e: React.FormEvent<HTMLFormElement>) => void;
}

const MemberForm: React.FC<MemberFormProps> = ({ id, form, onUpdate, onSave }) => {
	const formRef = React.useRef(null);
	const {
		ConfirmModalWithState,
		DeletedModalWithState,
		toggle
	} = useDeleteMember()

	return (
		<form ref={formRef} onSubmit={onSave} id="member-detail-form-container" className="w-full">
			<div id="general-info-input-form" className="bg-white w-full shadow-md p-6 rounded-t-md flex flex-col">
				<div className="flex flex-col gap-2">
					<span className="text-2xl text-[#0b1c30] font-bold">General Information</span>
					<span className="text-sm text-[#464555]">{id ? `Update` : `Add`} personal record, contact credentials, and communication metadata.</span>
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
								<input
									type="text"
									name="name"
									className="block w-full ps-9 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#464555] bg-[#eff4ff]"
									value={form.name}
									onChange={(e) => onUpdate('name', e.target.value)}
									required
								/>
							</div>
							<p className="mt-2.5 text-xs">Displayed publicly accross collaborative repositories.</p>
						</div>
						<div className="w-full mb-6">
							<label className="block mb-2.5 text-xs font-bold text-fg-success-strong">
								Work Email <span className="text-red-500">*</span>
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-[#464555] opacity-50">
									<LuUser />
								</div>
								<input
									type="email"
									name="email"
									className="block w-full ps-9 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#464555] bg-[#eff4ff]"
									value={form.email}
									onChange={(e) => onUpdate('email', e.target.value)}
									required
								/>
							</div>
							<p className="mt-2.5 text-xs">Used for SSO sign-in and security notifications.</p>
						</div>
					</div>
					<div id="input-container" className="flex flex-row gap-4 justify-between items-center">
						<div className="w-full mb-6">
							<label className="block mb-2.5 text-xs font-bold text-fg-success-strong">
								Account Status
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-[#464555] opacity-50">
									<LuUser />
								</div>
								<select
									id="select"
									className="block w-full ps-9 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#464555] bg-[#eff4ff] shadow-xs placeholder:text-body"
									name="status"
									value={form.status}
									onChange={(e) => onUpdate('status', e.target.value)}
								>
									<option value="Active">Active - Full Workspace Access</option>
									<option value="Inactive">Inactive - No Workspace Access</option>
								</select>
							</div>
							<p className="mt-2.5 text-xs">Control eligibility across organization SSO.</p>
						</div>
						<div className="w-full mb-6"></div>
					</div>
				</div>
			</div>
			<div id="work-detail-input-form" className="bg-white w-full shadow-md p-6 rounded-t-md flex flex-col">
				<div className="flex flex-col gap-2">
					<span className="text-2xl text-[#0b1c30] font-bold">Work Detail & Permission</span>
					<span className="text-sm text-[#464555]">Manage department allocations, administrative scopes, and governance clearence.</span>
				</div>

				<div id="form-input" className="w-full my-4 text-[#464555]">
					<div id="input-container" className="flex flex-row gap-4 justify-between items-center">
						<div className="w-full mb-6">
							<label className="block mb-2.5 text-xs font-bold text-fg-success-strong">
								Job Title <span className="text-red-500">*</span>
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-[#464555] opacity-50">
									<LuUser />
								</div>
								<input
									type="text"
									name="job"
									className="block w-full ps-9 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#464555] bg-[#eff4ff]"
									value={form.job}
									onChange={(e) => onUpdate('job', e.target.value)}
									required
								/>
							</div>
						</div>
						<div className="w-full mb-6">
							<label className="block mb-2.5 text-xs font-bold text-fg-success-strong">
								Department <span className="text-red-500">*</span>
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-[#464555] opacity-50">
									<LuUser />
								</div>
								<div className="relative">
									<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-[#464555] opacity-50">
										<LuUser />
									</div>
									<select
										id="select"
										className="block w-full ps-9 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#464555] bg-[#eff4ff] shadow-xs placeholder:text-body"
										name="department"
										value={form.department}
										onChange={(e) => onUpdate('department', e.target.value)}
										required
									>
										<option value="">-- Select Department --</option>
										<option value="Designer">Designer</option>
										<option value="Engineer">Engineer</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					<div id="input-container" className="flex flex-row gap-4 justify-between items-center">
						<div className="w-full mb-6">
							<label className="block mb-2.5 text-xs font-bold text-fg-success-strong">
								Employment Type
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-[#464555] opacity-50">
									<LuUser />
								</div>
								<select
									id="select"
									className="block w-full ps-9 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#464555] bg-[#eff4ff] shadow-xs placeholder:text-body"
									name="employmentType"
									value={form.employmentType}
									onChange={(e) => onUpdate('employmentType', e.target.value)}
								>
									<option value="Contract">Contract</option>
									<option value="Permanent">Permanent</option>
								</select>
							</div>
						</div>
						<div className="w-full mb-6"></div>
					</div>

					<div id="input-container" className="flex flex-row gap-4 justify-between items-center">
						<div className="w-full mb-6">
							<label className="block mb-2.5 text-xs font-bold text-fg-success-strong">
								Bio & Administrative Notes <span className="text-red-500">*</span>
							</label>
							<textarea
								id="note"
								rows={4}
								className="block w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#464555] bg-[#eff4ff]"
								name="notes"
								value={form.notes}
								onChange={(e) => onUpdate('notes', e.target.value)}
							/>
						</div>
					</div>
				</div>
			</div>
			<div id="member-form-action" className="w-full bg-[#eff4ff] p-4 rounded-b-md">
				<div className="flex flex-row gap-2 justify-between items-center">
					{id ? (
						<button
							onClick={() => toggle({
								id: id,
								name: form.name
							})}
							type="button"
							className="flex flex-row gap-2 items-center text-xs font-bold text-[#ba1a1a] bg-white cursor-pointer hover:shadow-md rounded-md p-2"
						>
							<LuTrash2 /> Delete Member
						</button>
					) : <div></div>}
					<div className="flex flex-row gap-4 justify-end ">
						<Link href="/" className="text-xs font-bold border border-gray-400 bg-[#eff4ff] text-[#464555] cursor-pointer hover:shadow-md rounded-md p-2 ">
							Cancel
						</Link>
						<button type="submit" className="text-xs font-bold bg-[#3525cd] text-white cursor-pointer hover:shadow-md rounded-md p-2 ">
							Save Changes
						</button>
					</div>
				</div>
			</div>
			<ConfirmModalWithState />
			<DeletedModalWithState />
		</form>
	)
}

export default MemberForm;
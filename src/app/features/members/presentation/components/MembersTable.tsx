'use client'
import {
	LuTrash2,
	LuSearch,
	LuArchive,
	LuSearchX
} from "react-icons/lu";
import { useGetMembers } from "../hooks/useGetMembers";
import { getInitials } from "@/app/shared/utils/utils";
import BadgeStatus from "@/app/shared/components/molecules/BadgeStatus";
import Link from "next/link";
import { useDeleteMember } from "../hooks/useDeleteMember";
import Text from '@/app/shared/components/atoms/Text'

export default function MembersTable() {
	const {
		data,
		isLoading,
		filter,
		setFilter,
		onResetFilter
	} = useGetMembers()

	const {
		ConfirmModalWithState,
		DeletedModalWithState,
		toggle
	} = useDeleteMember()

	return (
		<div id="members-table" className="min-h-[60vh]">
			<div id="search-bar" className="bg-white p-4 mx-4 rounded-t-md shadow-lg">
				<div className="relative bg-[#eff4ff] w-1/4">
					<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-[#464555] opacity-50">
						<LuSearch />
					</div>
					<input type="text" id="search" className="block w-full ps-9 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#464555]" placeholder="Search by name, email, or role..." value={filter ?? ''} onChange={(e) => setFilter(e.target.value)} />
				</div>
			</div>
			<div id="table" className="mx-4 relative overflow-y-auto">
				<table className="w-full bg-white rounded-b-md shadow-md">
					<thead className="bg-[#eff4ff] text-xs text-[#464555]">
						<tr>
							<th className="p-2 text-center">
								<input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
							</th>
							<th className="p-2 text-left">MEMBER</th>
							<th className="p-2 text-left">ROLE / TITLE</th>
							<th className="p-2 text-left">DEPARTMENT</th>
							<th className="p-2 text-left">STATUS</th>
							<th className="p-2 text-left">JOINED DATE</th>
							<th className="p-2 text-left">ACTIONS</th>
						</tr>
					</thead>
					<tbody className="text-xs text-[#464555]">
						{isLoading && <tr><td colSpan={7} className="p-2 text-center h-[40vh]">Loading Data...</td></tr>}
						{!isLoading && data && data.length > 0 && data.map((member) => (
							<tr key={member.id}>
								<td className="p-2 text-center">
									<input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
								</td>
								<td className="p-2 text-left">
									<div className="flex flex-row items-start gap-2">
										<div className="avatar rounded-xl bg-[#dce9ff] p-2">{getInitials(member.name)}</div>
										<div className="flex flex-col justify-center items-start">
											<span className="font-bold">{member.name}</span>
											<span>{member.email}</span>
										</div>
									</div>
								</td>
								<td className="p-2 text-left font-bold">{member.job}</td>
								<td className="p-2 text-left">
									<span className="max-w-max text-xs text-[#464555] bg-[#e5eeff] rounded-2xl px-2 py-1 font-bold">{member.department}</span>
								</td>
								<td className="p-2 text-left">
									<BadgeStatus text={member.status} />
								</td>
								<td className="p-2 text-left">{member.createdDate}</td>
								<td className="p-2 text-left">
									<div className="flex flex-row items-center gap-2">
										<Link href={`/member/${member.id}`} className="btn btn-secondary text-[#3525cd] p-2 rounded-md cursor-pointer hover:shadow-2xl">Edit</Link>
										<button type="button" onClick={() => toggle(member)} className="btn btn-primary text-[#ba1a1a] p-2 rounded-md cursor-pointer hover:shadow-2xl">
											<LuTrash2 />
										</button>
									</div>
								</td>
							</tr>
						))}
						{!isLoading && data.length === 0 && (
							<tr className="h-[40vh]">
								<td colSpan={7} className="p-2 place-items-center">
									<div className="w-1/2 flex flex-col justify-center items-center gap-2 text-center">
										<div className="w-16 h-16 rounded-xl bg-[#eff4ff] p-2 text-center content-center">
											{filter ? <LuSearchX className="w-9 h-9 justify-self-center" /> : <LuArchive className="w-9 h-9 justify-self-center" />}
										</div>
										<Text variant="h2-bold">No members Found</Text>
										{filter && <Text variant="secondary">{`We couldn't find any members matching "Samantha Williams". Try checking for typos or searching with different keywords.`}</Text>}
										{filter && (
											<button type="button" onClick={() => onResetFilter()} className="btn btn-primary text-white bg-[#3525cd] p-2 rounded-md cursor-pointer hover:shadow-2xl">
												Clear Search
											</button>
										)}
									</div>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
			<ConfirmModalWithState />
			<DeletedModalWithState />
		</div>
	)
}
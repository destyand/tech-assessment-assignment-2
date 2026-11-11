'use client'

import Modal from "@/app/shared/components/molecules/Modal"
import Text from "@/app/shared/components/atoms/Text";
import { LuQrCode, LuTrash2 } from "react-icons/lu";

interface ConfirmProps {
	isOpen: boolean,
	data: Record<string, string> | null,
	onToggle: (data?: Record<string, string>) => void,
	submitDeleteMember: (id: string) => void,
}

export default function ConfirmDeleteMember({ isOpen, data, onToggle, submitDeleteMember }: ConfirmProps) {
	return (
		<Modal isOpen={isOpen}>
			<div className="relative bg-white rounded-t-md shadow-sm p-4 md:p-6">
				<div className="flex flex-col gap-2 justify-center items-center">
					<div className="rounded-xl bg-red-200 p-2 text-red-700 items-center"><LuTrash2 className="w-12 h-12" /></div>
					<Text variant="h2-bold" className="text-center">Are you sure to delete this item?</Text>
					<Text variant="secondary" className="text-center nowrap">
						<span className="font-bold">{data?.name}</span> <span className="text-[#3525cd]">(#{data?.id})</span> will be permanently removed from the workspace. This action cannot be undone.
					</Text>
				</div>
			</div>
			<div className="relative bg-[#dce9ff] rounded-b-md shadow-sm p-2 md:p-4">
				<div className="flex flex-row gap-2 justify-center items-center">
					<button type="button" onClick={() => onToggle()} className="text-sm flex flex-row items-center gap-1 bg-white text-gray-400 p-2 rounded-md cursor-pointer hover:shadow-2xl">Cancel</button>
					<button onClick={() => submitDeleteMember(data?.id ?? '')} type="button" className="text-sm flex flex-row items-center gap-1 bg-[#ba1a1a] text-white p-2 rounded-md cursor-pointer hover:shadow-2xl">
						<LuTrash2 /> Delete
					</button>
				</div>
			</div>
		</Modal>
	)
}

interface DeletedProps {
	isOpenDeleted: boolean,
	data: Record<string, string> | null,
	onDismiss: (data?: Record<string, string>) => void
}

export function DeletedMember({ isOpenDeleted, data, onDismiss }: DeletedProps) {
	return (
		<Modal isOpen={isOpenDeleted}>
			<div className="relative bg-white rounded-t-md shadow-sm p-4 md:p-6">
				<div className="flex flex-col gap-2 justify-center items-center">
					<div className="rounded-xl bg-red-200 p-2 text-red-700 items-center"><LuTrash2 className="w-12 h-12" /></div>
					<Text variant="h2-bold" className="text-center">Member Deleted Successfully</Text>
					<Text variant="secondary" className="text-center nowrap">
						<span className="font-bold">{data?.name}</span> <span className="text-[#3525cd]">(#{data?.id})</span> has be permanently removed from the workspace. All assigned permissions, active sessions, and access tokens have been revoked.
					</Text>
				</div>
			</div>
			<div className="relative bg-[#dce9ff] rounded-b-md shadow-sm p-2 md:p-4">
				<div className="flex flex-row gap-2 justify-center items-center">
					<button type="button" onClick={() => onDismiss()} className="text-sm flex flex-row items-center gap-1 bg-[#3525cd] text-white p-2 rounded-md cursor-pointer hover:shadow-2xl">
						<LuQrCode /> Dismiss
					</button>
				</div>
			</div>
		</Modal>
	)
}
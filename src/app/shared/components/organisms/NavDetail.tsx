'use client';
import React from "react";
import Link from "next/link";
import { LuArrowLeft, LuCalendar, LuCopy } from "react-icons/lu";
import Text from "../atoms/Text";
import BadgeStatus from "../molecules/BadgeStatus";

interface NavDetailProps {
	id?: string;
	name?: string;
	status?: string;
	createdDate?: string;
}

const NavDetail: React.FC<NavDetailProps> = ({ id, name, status, createdDate }) => {
	const [copied, setCopied] = React.useState(false)
	async function copyText(text: string) {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true)
			setTimeout(
				() => {
					setCopied(false)
				}, 2000
			)
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	}

	return (
		<div id="nav-detail-member" className="flex flex-row justify-between items-center my-4">
			<div className="w-full flex flex-row justify-between items-center">
				<div className="flex flex-row gap-4 justify-start items-center">
					<Link href="/" className="cursor-pointer hover:shadow-md rounded-md bg-[#dce9ff] p-2 text-[#464555]"><LuArrowLeft /></Link>
					{id ? (
						<div className="flex flex-col">
							<div className="flex flex-row gap-2 items-center">
								<span className="text-2xl text-[#0b1c30] font-bold">{name}</span>
								{status && <BadgeStatus text={status} />}
							</div>
							<div className="flex flex-row gap-2 items-center text-[#777587]">
								<div className="text-xs rounded-sm bg-[#dce9ff] px-2 py-0.5 text-[#777587]">ID: #{id}</div>
								<span className="h-0.5 w-0.5 bg-[#464555] rounded-full me-1"></span>
								<LuCalendar />
								<div className="text-xs text-[#777587]">Joined {createdDate}</div>
							</div>
						</div>
					) : (
						<div className="flex flex-col">
							<div className="flex flex-row gap-2 items-center">
								<Text variant="h1-bold">Add New Member</Text>
							</div>
						</div>
					)}
				</div>
				{id && (
					<button type="button" onClick={() => copyText(id)} className="text-xs font-bold bg-[#eff4ff] text-[#464555] cursor-pointer hover:shadow-md rounded-md p-2 ">
						<span className="flex flex-row gap-1 items-center">
							<LuCopy />
							<p className="">{copied ? `Copied` : `Copy ID`}</p>
						</span>
					</button>
				)}
			</div>
		</div>
	)
}

export default NavDetail;
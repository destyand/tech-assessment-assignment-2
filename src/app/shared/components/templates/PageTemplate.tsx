import React, { ReactNode } from 'react';
import { LuUser } from 'react-icons/lu';

interface PageTemplateProps {
	children: ReactNode;
}

const PageTemplate: React.FC<PageTemplateProps> = async ({ children }) => {
	return (
		<div className="max-w-full h-screen">
			<header className="flex items-center justify-start p-4 bg-white shadow-2xl">
				<div className="flex flex-row gap-2 items-center">
					<div className="avatar border-2 rounded-xl bg-[#3525cd] p-2"><LuUser /></div>
					<div className="users flex flex-col">
						<span className="username text-xs font-bold text-[#0b1c30]">Alex Vanece</span>
						<span className="job text-xs font-bold text-[#464555]">Lead Architech</span>
					</div>
				</div>
			</header>
			<main className="w-full h-full bg-[#f8f9ff] p-4">
				{children}
			</main>
		</div >
	)
};

export default PageTemplate;
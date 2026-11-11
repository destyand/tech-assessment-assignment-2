import React, { ReactNode } from 'react';
import Header from '../molecules/Header';
import { getUserController } from '@/app/features/user/controller/user.controller';

interface PageTemplateProps {
	children: ReactNode;
}

const PageTemplate: React.FC<PageTemplateProps> = async ({ children }) => {
	const result = await getUserController();
	return (
		<div className="max-w-full h-screen">
			<Header
				name={result.name}
				job={result.job}
			/>
			<main className="w-full min-h-max-content bg-[#f8f9ff] p-4">
				{children}
			</main>
		</div >
	)
};

export default PageTemplate;
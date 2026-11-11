import React from 'react';
import Text from '../atoms/Text';
import Avatar from '../atoms/Avatar';
import { LuUser } from 'react-icons/lu';

interface HeaderProps {
	name: string;
	job: string;
}

const Header: React.FC<HeaderProps> = async ({ name, job }) => {
	return (
		<header className="flex items-center justify-start p-4 bg-white shadow-2xl">
			<div className="flex flex-row gap-2 items-center">
				<Avatar variant="primary">
					<LuUser />
				</Avatar>
				<div className="users flex flex-col">
					<Text variant="primary-bold">{name}</Text>
					<Text variant="secondary-bold">{job}</Text>
				</div>
			</div>
		</header>
	)
};

export default Header;
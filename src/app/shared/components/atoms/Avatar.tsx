import React, { ReactNode } from 'react';

interface AvatarProps {
	children: ReactNode;
	className?: string;
	variant?: 'primary' | 'secondary';
}

const Avatar: React.FC<AvatarProps> = async ({ children, className, variant }) => {
	const getVariantClassName = () => {
		switch (variant) {
			case 'primary':
				return 'bg-[#3525cd] text-white'
			case 'secondary':
				return 'bg-[#dce9ff] text-[#464555]'
			default:
				return ''
		}
	}
	return (
		<div className={`avatar border-2 rounded-xl p-2 ${getVariantClassName()} ${className} `}>
			{children}
		</div>
	)
};

export default Avatar;
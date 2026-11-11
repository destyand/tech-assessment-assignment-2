'use client'
import React, { ReactNode } from 'react';

interface TextProps {
	children: ReactNode;
	className?: string;
	variant?: 'primary'
	| 'secondary'
	| 'tertiary'
	| 'h1'
	| 'h2'
	| 'h3'
	| 'primary-bold'
	| 'secondary-bold'
	| 'tertiary-bold'
	| 'h1-bold'
	| 'h2-bold'
	| 'h3-bold';
}

const Text: React.FC<TextProps> = ({ children, className, variant }) => {
	const getVariantClassName = () => {
		switch (variant) {
			case 'primary':
				return 'text-xs text-[#0b1c30]'
			case 'secondary':
				return 'text-xs text-[#464555]'
			case 'tertiary':
				return 'text-xs text-[#3525cd]'
			case 'h1':
				return 'text-2xl text-[#0b1c30]'
			case 'h2':
				return 'text-md text-[#464555]'
			case 'h3':
				return 'text-sm text-[#464555]'
			case 'primary-bold':
				return 'text-xs text-[#0b1c30] font-bold'
			case 'secondary-bold':
				return 'text-xs text-[#464555] font-bold'
			case 'tertiary-bold':
				return 'text-xs text-[#3525cd] font-bold'
			case 'h1-bold':
				return 'text-2xl text-[#0b1c30] font-bold'
			case 'h2-bold':
				return 'text-md text-[#464555] font-bold'
			case 'h3-bold':
				return 'text-sm text-[#464555] font-bold'
			default:
				return ''
		}
	}
	return (
		<p className={`${getVariantClassName()} ${className}`}>
			{children}
		</p>
	)
};

export default Text;
'use client'
import React from 'react';

interface BadgeStatusProps {
	text: string;
}

const BadgeStatus: React.FC<BadgeStatusProps> = ({ text }) => {
	const getBgColor = (src: string) => {
		if (!src) return ''
		else if (src.toLowerCase() === 'active') return 'bg-[#caf0c3]'
		else if (src.toLowerCase() === 'inactive') return 'bg-[#ffdbcc]'
	}
	return (
		<span className={`h-6 max-w-max flex items-center ${getBgColor(text)} border border-[#e5eeff] text-[#464555] text-xs rounded-2xl px-2 py-0.5 font-bold`}>
			<span className="h-1.5 w-1.5 bg-[#464555] rounded-full me-1"></span>
			{text}
		</span>
	)
}

export default BadgeStatus;
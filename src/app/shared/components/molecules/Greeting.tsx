'use client'
import React from 'react';
import Text from '../atoms/Text'

interface GreetingProps {
	title: string;
	desc: string;
}

const Greeting: React.FC<GreetingProps> = ({ title, desc }) => {
	return (
		<div className="flex flex-col gap-2">
			<Text variant="h1-bold">{title}</Text>
			<Text variant="secondary">{desc}</Text>
		</div>
	)
}

export default Greeting;
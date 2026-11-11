import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import type { ReactElement } from 'react';

import Avatar from '../Avatar';

const renderAvatar = async (props: {
	children: string;
	className?: string;
	variant?: 'primary' | 'secondary';
}) => {
	const element = await Avatar(props);
	return render(element as ReactElement);
};

describe('Avatar', () => {
	it('renders children correctly', async () => {
		await renderAvatar({ children: 'TEST', variant: 'primary' });
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});

	it('applies primary variant classes', async () => {
		await renderAvatar({ children: 'A', variant: 'primary' });
		expect(screen.getByText('A')).toHaveClass('avatar', 'bg-[#3525cd]', 'text-white');
	});

	it('applies secondary variant classes', async () => {
		await renderAvatar({ children: 'B', variant: 'secondary' });
		expect(screen.getByText('B')).toHaveClass('avatar', 'bg-[#dce9ff]', 'text-[#464555]');
	});

	it('applies no variant classes when variant is omitted', async () => {
		await renderAvatar({ children: 'C' });
		const el = screen.getByText('C');
		expect(el).toHaveClass('avatar');
		expect(el).not.toHaveClass('bg-[#3525cd]');
		expect(el).not.toHaveClass('bg-[#dce9ff]');
	});

	it('merges custom className', async () => {
		await renderAvatar({ children: 'D', className: 'custom-class', variant: 'primary' });
		expect(screen.getByText('D')).toHaveClass('custom-class');
	});

	it('renders base border and padding classes', async () => {
		await renderAvatar({ children: 'E' });
		expect(screen.getByText('E')).toHaveClass('border-2', 'rounded-xl', 'p-2');
	});
});

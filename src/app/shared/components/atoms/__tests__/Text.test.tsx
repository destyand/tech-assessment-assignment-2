import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Text from '../Text';

describe('Text', () => {
	it('renders children correctly', () => {
		render(<Text>hello</Text>);
		expect(screen.getByText('hello')).toBeInTheDocument();
	});

	it.each([
		['primary', 'text-xs text-[#0b1c30]'],
		['secondary', 'text-xs text-[#464555]'],
		['tertiary', 'text-xs text-[#3525cd]'],
		['h1', 'text-2xl text-[#0b1c30]'],
		['h2', 'text-md text-[#464555]'],
		['h3', 'text-sm text-[#464555]'],
		['primary-bold', 'text-xs text-[#0b1c30] font-bold'],
		['secondary-bold', 'text-xs text-[#464555] font-bold'],
		['tertiary-bold', 'text-xs text-[#3525cd] font-bold'],
		['h1-bold', 'text-2xl text-[#0b1c30] font-bold'],
		['h2-bold', 'text-md text-[#464555] font-bold'],
		['h3-bold', 'text-sm text-[#464555] font-bold'],
	] as const)('applies %s variant classes', (variant, expected) => {
		render(<Text variant={variant}>{variant}</Text>);
		const el = screen.getByText(variant);
		for (const cls of expected.split(' ')) {
			expect(el).toHaveClass(cls);
		}
	});

	it('does not apply variant color when variant is omitted', () => {
		render(<Text>NoVariant</Text>);
		const el = screen.getByText('NoVariant');
		expect(el.className).not.toContain('text-[#');
		expect(el).toBeInTheDocument();
	});

	it('merges custom className', () => {
		render(
			<Text className="custom-class" variant="primary">
				x
			</Text>
		);
		expect(screen.getByText('x')).toHaveClass('custom-class');
	});

	it('renders as a paragraph element', () => {
		render(<Text>p</Text>);
		expect(screen.getByText('p').tagName).toBe('P');
	});
});

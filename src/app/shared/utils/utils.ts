import React from "react";

export function getInitials(fullName: string): string {
	const parts = fullName.toUpperCase().trim().split(' ');
	const firstName = parts[0]!;

	if (parts.length < 2) {
		return firstName.substring(0, 2);
	}

	const lastName = parts[parts.length - 1]!;
	return `${firstName[0]}${lastName[0]}`;
}

export const useDebounce = <T>(value: T, delay = 500) => {
	const [debouncedValue, setDebouncedValue] = React.useState(value)

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			setDebouncedValue(value)
		}, delay)

		return () => clearTimeout(timeout)
	}, [value, delay])

	return debouncedValue
}
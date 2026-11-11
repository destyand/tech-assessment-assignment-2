'use client'
import React from 'react';
import { UserType } from '../../domain/user.entity';
import { getUserController } from '../../controller/user.controller';

export function useUser() {
	const [data, setData] = React.useState<UserType>();
	const [loading, setLoading] = React.useState<boolean>(false);
	const [error, setError] = React.useState<unknown>();

	React.useEffect(() => {
		const fetchUser = async () => {
			setLoading(true);
			try {
				const result = await getUserController();
				setData(result)
				setError('')
			} catch (error) {
				setError(error)
			} finally {
				setLoading(false);
			}
		}

		fetchUser()
	}, [])

	return {
		data,
		loading,
		error,
	}
}
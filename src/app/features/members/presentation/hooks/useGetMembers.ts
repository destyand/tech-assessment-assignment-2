'use client'
import React from 'react';
import { MemberListType } from '../../domain/members.entity';
import { getMembersController } from '../../controller/members.controller';
import { useDebounce } from '@/app/shared/utils/utils';

interface UseFetchState {
	data: MemberListType[] | null
	isLoading: boolean
	error: Error | null | unknown
}

export function useGetMembers() {
	const initialized = React.useRef(false);
	const [filter, setFilter] = React.useState<string | null>(null)
	const debouncedSearch = useDebounce(filter, 1000)

	const [members, setMembers] = React.useState<UseFetchState>({
		data: null,
		isLoading: true,
		error: null,
	})

	const fetchData = async (search?: string) => {
		setMembers(prev => ({ ...prev, isLoading: true, error: null }))
		try {
			const result = await getMembersController(search ?? '');
			setMembers(prev => ({ ...prev, data: result, isLoading: true, error: null }))
		} catch (error) {
			setMembers(prev => ({ ...prev, data: null, error: error }))
		} finally {
			setMembers(prev => ({ ...prev, isLoading: false }))
		}
	}

	const onResetFilter = () => {
		setFilter(null)
		setMembers(prev => ({ ...prev, isLoading: true, data: null }))
		fetchData();
	}

	React.useEffect(() => {
		if (!initialized.current) {
			initialized.current = true;
			fetchData()
		}
	}, [])

	React.useEffect(() => {
		if (debouncedSearch !== null) {
			fetchData(debouncedSearch)
		}
	}, [debouncedSearch])

	return {
		data: members.data ?? [],
		isLoading: members.isLoading,
		error: members.error,
		filter,
		setFilter,
		onResetFilter
	}
}
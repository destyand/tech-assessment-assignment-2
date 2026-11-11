'use client'
import React, { SetStateAction } from 'react';
import { MemberDetailType, MemberPayloadType } from '../../domain/members.entity';
import { getMemberDetailController } from '../../controller/members.controller';

interface UseFetchState {
	data: MemberDetailType | null
	isLoading: boolean
	error: Error | null | unknown
}

export function useGetDetailMember(id: string, setForm: React.Dispatch<SetStateAction<MemberPayloadType>>) {
	const initialized = React.useRef(false);
	const [state, setState] = React.useState<UseFetchState>({
		data: null,
		isLoading: true,
		error: null,
	})

	React.useEffect(() => {
		const fetchData = async () => {
			setState(prev => ({ ...prev, isLoading: true, error: null }))
			try {
				const result = await getMemberDetailController(id);
				setState(prev => ({ ...prev, data: result, error: null }))
				setForm(prev => ({ ...prev, ...result }))
			} catch (error) {
				setState(prev => ({ ...prev, data: null, error: error }))
			} finally {
				setState(prev => ({ ...prev, isLoading: false }))
			}
		}

		if (!initialized.current) {
			initialized.current = true;
			fetchData()
		}
	}, [])

	return {
		data: state.data ?? null,
		isLoading: state.isLoading,
		error: state.error,
	}
}
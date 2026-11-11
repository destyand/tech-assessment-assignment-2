

'use client'
import React from 'react';
import { MemberPayloadType } from '../../domain/members.entity';
import { postMemberController } from '../../controller/members.controller';
import { useRouter } from 'next/navigation';

interface UseFetchState {
	data: MemberPayloadType | null
	isLoading: boolean
	error: Error | null | unknown
}

export function usePostMember() {
	const router = useRouter();
	const [state, setState] = React.useState<UseFetchState>({
		data: null,
		isLoading: true,
		error: null,
	})

	const submitCreateMember = async (payload: MemberPayloadType) => {
		setState(prev => ({ ...prev, isLoading: true, error: null }))
		try {
			const result = await postMemberController(payload);
			setState(prev => ({ ...prev, data: result, error: null }))
			router.push('/')
			alert('Success create member')
		} catch (error) {
			setState(prev => ({ ...prev, data: null, error: error }))
		} finally {
			setState(prev => ({ ...prev, isLoading: false }))
		}
	}

	return {
		data: state.data ?? null,
		isLoading: state.isLoading,
		error: state.error,
		submitCreateMember
	}
}
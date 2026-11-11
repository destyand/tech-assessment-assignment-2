

'use client'
import React from 'react';
import { deleteMemberController } from '../../controller/members.controller';
import ConfirmDeleteMember, { DeletedMember } from '../components/DeleteMember';
import { useRouter } from 'next/navigation';

interface UseFetchState {
	data: Record<string, string> | null
	isLoading: boolean
	error: Error | null | unknown
}

export function useDeleteMember() {
	const router = useRouter()
	const [isOpen, setIsOpen] = React.useState<boolean>(false);
	const [isOpenDeleted, setIsOpenDeleted] = React.useState<boolean>(false);
	const [state, setState] = React.useState<UseFetchState>({
		data: null,
		isLoading: true,
		error: null,
	})

	const submitDeleteMember = async (id: string) => {
		setState(prev => ({ ...prev, isLoading: true, error: null }))
		try {
			await deleteMemberController(id);
		} catch (error) {
			setState(prev => ({ ...prev, error: error }))
		} finally {
			setIsOpen(prev => !prev)
			setIsOpenDeleted(prev => !prev)
		}
	}

	const onToggle = (data?: Record<string, string>) => {
		setState(prev => ({ ...prev, data: data ?? null }))
		setIsOpen(prev => !prev)
	}

	const onDismiss = () => {
		setIsOpenDeleted(prev => !prev)
		setState(prev => ({ ...prev, data: null, error: null }))
		router.push("/")
	}

	const ConfirmModalWithState = React.useMemo(() => {
		return function ConfirmModalWithState() {
			if (!isOpen) return null;
			return (
				<ConfirmDeleteMember
					isOpen={isOpen}
					data={state.data ?? null}
					onToggle={onToggle}
					submitDeleteMember={submitDeleteMember}
				/>
			);
		};
	}, [isOpen]);

	const DeletedModalWithState = React.useMemo(() => {
		return function ConfirmModalWithState() {
			if (!isOpenDeleted) return null;
			return (
				<DeletedMember
					isOpenDeleted={isOpenDeleted}
					data={state.data ?? null}
					onDismiss={onDismiss}
				/>
			);
		};
	}, [isOpenDeleted]);

	return {
		data: state.data ?? null,
		ConfirmModalWithState,
		DeletedModalWithState,
		toggle: (data?: Record<string, string>) => onToggle(data),
		submitDeleteMember
	};
}
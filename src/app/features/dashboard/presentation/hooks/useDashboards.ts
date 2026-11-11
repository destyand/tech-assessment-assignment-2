'use client'
import React from 'react';
import { TotalDescriptionType } from '../../domain/dashboard.entity';
import {
	getTotalMembersController,
	getTotalActiveMembersController,
	getTotalDepartmentsController,
	getTotalPendingMembersController
} from '../../controller/dashboard.controller';

interface UseFetchState {
	data: TotalDescriptionType | null
	isLoading: boolean
	error: Error | null | unknown
}

export function useDashboards() {
	const initialized = React.useRef(false);
	const [members, setMembers] = React.useState<UseFetchState>({
		data: null,
		isLoading: true,
		error: null,
	})
	const [activeMembers, setActiveMembers] = React.useState<UseFetchState>({
		data: null,
		isLoading: true,
		error: null,
	})
	const [departments, setDepartments] = React.useState<UseFetchState>({
		data: null,
		isLoading: true,
		error: null,
	})
	const [pendings, setPendings] = React.useState<UseFetchState>({
		data: null,
		isLoading: true,
		error: null,
	})

	React.useEffect(() => {
		const fetchTotalMembers = async () => {
			setMembers(prev => ({ ...prev, isLoading: true, error: null }))
			try {
				const result = await getTotalMembersController();
				setMembers(prev => ({ ...prev, data: result, error: null }))
			} catch (error) {
				setMembers(prev => ({ ...prev, data: null, error: error }))
			} finally {
				setMembers(prev => ({ ...prev, isLoading: false }))
			}
		}
		const fetchActiveMembers = async () => {
			setActiveMembers(prev => ({ ...prev, isLoading: true, error: null }))
			try {
				const result = await getTotalActiveMembersController();
				setActiveMembers(prev => ({ ...prev, data: result, error: null }))
			} catch (error) {
				setActiveMembers(prev => ({ ...prev, data: null, error: error }))
			} finally {
				setActiveMembers(prev => ({ ...prev, isLoading: false }))
			}
		}
		const fetchDeparments = async () => {
			setDepartments(prev => ({ ...prev, isLoading: true, error: null }))
			try {
				const result = await getTotalDepartmentsController();
				setDepartments(prev => ({ ...prev, data: result, error: null }))
			} catch (error) {
				setDepartments(prev => ({ ...prev, data: null, error: error }))
			} finally {
				setDepartments(prev => ({ ...prev, isLoading: false }))
			}
		}
		const fetchPendings = async () => {
			setPendings(prev => ({ ...prev, isLoading: true, error: null }))
			try {
				const result = await getTotalPendingMembersController();
				setPendings(prev => ({ ...prev, data: result, error: null }))
			} catch (error) {
				setPendings(prev => ({ ...prev, data: null, error: error }))
			} finally {
				setPendings(prev => ({ ...prev, isLoading: false }))
			}
		}

		if (!initialized.current) {
			initialized.current = true;
			fetchTotalMembers()
			fetchActiveMembers()
			fetchDeparments()
			fetchPendings()
		}
	}, [])

	return {
		members,
		activeMembers,
		departments,
		pendings
	}
}
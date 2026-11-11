

'use client'
import React from 'react';
import { getMembersController } from '../../controller/members.controller';
import { mkConfig, generateCsv, asBlob, download } from "export-to-csv";

interface UseFetchState {
	data: Record<string, string>[] | null
	isLoading: boolean
	error: Error | null | unknown
}

export function useExportCSVMembers() {
	const csvConfig = mkConfig({ useKeysAsHeaders: true });
	const [state, setState] = React.useState<UseFetchState>({
		data: [],
		isLoading: false,
		error: null,
	})

	const onExportCSV = React.useCallback(async () => {
		setState(prev => ({ ...prev, isLoading: true, error: null }))
		try {
			const result = await getMembersController('');
			const newData = result.map((item: Record<string, string>) => {
				delete item.totalActivity
				return {
					...item
				}
			})
			setState(prev => ({ ...prev, data: newData, isLoading: true, error: null }))

			const csv = generateCsv(csvConfig)(newData ?? []);
			const csvblob = asBlob(csvConfig)(csv);

			download(csvConfig)(csv)
			const url = URL.createObjectURL(csvblob);
			const link = document.createElement('a');

			link.setAttribute('href', url);
			link.setAttribute('download', 'table_data.csv');
			link.style.visibility = 'hidden';

			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} catch (error) {
			setState(prev => ({ ...prev, data: null, error: error }))
		} finally {
			setState(prev => ({ ...prev, data: null, isLoading: false }))
		}
	}, [state.data, state.isLoading, state.error])

	return {
		isLoading: state.isLoading,
		error: state.error,
		onExportCSV
	}
}
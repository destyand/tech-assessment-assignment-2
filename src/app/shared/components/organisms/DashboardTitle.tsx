'use client'
import Greeting from "../molecules/Greeting"
import DashboardAction from "./DashboardAction"

type PropsType = {
	title: string;
	desc: string;
	onExportCSV: () => void;
	isLoading: boolean;
}
const DashboardTitle: React.FC<PropsType> = ({
	title,
	desc,
	onExportCSV,
	isLoading
}) => {
	return (
		<div id="greetings" className="flex flex-row justify-between items-center m-4">
			<Greeting
				title={title ?? ''}
				desc={desc ?? ''}
			/>
			<DashboardAction
				onExportCSV={onExportCSV}
				isLoading={isLoading}
			/>
		</div>
	)
}

export default DashboardTitle;
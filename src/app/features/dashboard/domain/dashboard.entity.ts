export type TotalDescriptionType = {
	total: number;
	description: string;
};

export type GetDashboardResponse = {
	status: number;
	message: string;
	data: TotalDescriptionType;
}
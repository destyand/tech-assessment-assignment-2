import { TotalDescriptionType } from "../domain/dashboard.entity"

export interface DashboardRepositoryInterface {
	getTotalMembers: () => Promise<TotalDescriptionType>;
	getTotalactiveMembers: () => Promise<TotalDescriptionType>;
	getTotalDepartments: () => Promise<TotalDescriptionType>;
	getTotalpendingMembers: () => Promise<TotalDescriptionType>;
}
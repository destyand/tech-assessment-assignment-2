import { GetDashboardResponse, TotalDescriptionType } from "../domain/dashboard.entity";
import { DashboardRepositoryInterface } from "../usecase/dashboard.repository.interface";

export class ApiDashboardRepository implements DashboardRepositoryInterface {
	getTotalMembers: () => Promise<TotalDescriptionType> = async () => {
		const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/total-active-members`

		const res = await fetch(url)
		const result = await res.json() as GetDashboardResponse
		return result.data
	};
	getTotalactiveMembers: () => Promise<TotalDescriptionType> = async () => {
		const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/total-departments`

		const res = await fetch(url)
		const result = await res.json() as GetDashboardResponse
		return result.data
	};
	getTotalDepartments: () => Promise<TotalDescriptionType> = async () => {
		const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/total-members`

		const res = await fetch(url)
		const result = await res.json() as GetDashboardResponse
		return result.data
	};
	getTotalpendingMembers: () => Promise<TotalDescriptionType> = async () => {
		const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/total-pending-members`

		const res = await fetch(url)
		const result = await res.json() as GetDashboardResponse
		return result.data
	};
}
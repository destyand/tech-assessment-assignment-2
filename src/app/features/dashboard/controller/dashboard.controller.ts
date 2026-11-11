import { ApiDashboardRepository } from "../infrastructure/dashboard.repository.api"
import {
	getTotalMembersUseCase,
	getTotalactiveMembersUseCase,
	getTotalDepartmentsUseCase,
	getTotalpendingMembersUseCase,
} from "../usecase/dashboard.usecase"

export async function getTotalMembersController() {
	const repo = new ApiDashboardRepository()
	return getTotalMembersUseCase(repo)
}

export async function getTotalActiveMembersController() {
	const repo = new ApiDashboardRepository()
	return getTotalactiveMembersUseCase(repo)
}
export async function getTotalDepartmentsController() {
	const repo = new ApiDashboardRepository()
	return getTotalDepartmentsUseCase(repo)
}
export async function getTotalPendingMembersController() {
	const repo = new ApiDashboardRepository()
	return getTotalpendingMembersUseCase(repo)
}
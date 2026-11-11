import { DashboardRepositoryInterface } from "./dashboard.repository.interface";

export async function getTotalMembersUseCase(repo: DashboardRepositoryInterface) {
	return repo.getTotalMembers()
}

export async function getTotalactiveMembersUseCase(repo: DashboardRepositoryInterface) {
	return repo.getTotalactiveMembers()
}

export async function getTotalDepartmentsUseCase(repo: DashboardRepositoryInterface) {
	return repo.getTotalDepartments()
}

export async function getTotalpendingMembersUseCase(repo: DashboardRepositoryInterface) {
	return repo.getTotalpendingMembers()
}
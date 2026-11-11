import { ApiUserRepository } from "../infrastructure/user.repository.api"
import { getUserUseCase } from "../usecase/user.usecase"

export async function getUserController() {
	const repo = new ApiUserRepository()
	return getUserUseCase(repo)
}
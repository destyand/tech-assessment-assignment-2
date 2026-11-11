import { UserRepositoryInterface } from "./user.repository.interface";

export async function getUserUseCase(repo: UserRepositoryInterface) {
	return repo.getUser()
}
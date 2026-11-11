import { GetUserResponse, UserType } from "../domain/user.entity";
import { UserRepositoryInterface } from "../usecase/user.repository.interface";

export class ApiUserRepository implements UserRepositoryInterface {
	getUser: () => Promise<UserType> = async () => {
		const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/user`

		const res = await fetch(url)
		const result = await res.json() as GetUserResponse
		return result.data
	};
}
import { UserType } from "../domain/user.entity";

export interface UserRepositoryInterface {
	getUser: () => Promise<UserType>;
}
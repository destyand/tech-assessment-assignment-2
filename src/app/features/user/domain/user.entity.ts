export type UserType = {
	id: string;
	name: string;
	job: string;
};

export type GetUserResponse = {
	status: number;
	message: string;
	data: UserType;
}
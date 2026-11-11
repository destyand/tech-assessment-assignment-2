export type MemberListType = {
	id: string;
	name: string;
	email: string;
	status: StatusType;
	job: string;
	department: string;
	createdDate: string;
};

export type MemberDetailType = {
	id: string;
	name: string;
	email: string;
	status: StatusType;
	job: string;
	department: string;
	employmentType: string;
	notes: string;
	createdDate: string;
	updatedDate: string;
	totalActivity: MemberTotalActivity;
};

export type MemberTotalActivity = {
	repositories: number;
	deployments: number;
};

export type StatusType = "active" | "inactive";

// for master Account Status, Department, Employment Type
export type SelectType = {
	id: string;
	label: string;
	value: string;
};

// for master Job Title
export type JobType = {
	id: string;
	label: string;
	value: string;
	departmentId: string;
};

export type MemberPayloadType = {
	name: string;
	email: string;
	status: StatusType | string;
	job: string;
	department: string;
	employmentType: string;
	notes: string;
	createdDate?: string;
	updatedDate?: string;
	totalActivity?: MemberTotalActivity;
};

export type GetMemberResponse<T> = {
	status: number;
	message: string;
	data: T;
}
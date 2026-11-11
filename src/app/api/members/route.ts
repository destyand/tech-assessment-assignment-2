import { NextResponse, NextRequest } from 'next/server';
import { mocks } from './mocks';

export async function GET(request: NextRequest): Promise<Response> {
	const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
	await delay(3000);
	const params = request.nextUrl.searchParams.get('search');
	let result = mocks;
	if (params !== "") {
		result = mocks.filter((item) =>
			item.name.toLowerCase().includes(params?.toLowerCase() ?? "")
			|| item.email.toLowerCase().includes(params?.toLowerCase() ?? "")
			|| item.job.toLowerCase().includes(params?.toLowerCase() ?? "")
		)
	}

	return NextResponse.json({
		status: true,
		code: 200,
		message: "Success GET data",
		data: result
	})
}

export async function POST(request: Request): Promise<Response> {
	const body = await request.json();

	if (body) {
		return NextResponse.json({
			status: true,
			code: 200,
			message: "Success GET data",
			data: {
				id: 'MEM-' + Date.now().toString().slice(-8),
				...body
			}
		})
	}

	return NextResponse.json({
		status: false,
		code: 400,
		message: "Failed GET data",
		data: null
	})
}
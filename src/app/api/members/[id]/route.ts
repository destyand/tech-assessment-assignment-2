import { NextResponse } from 'next/server';
import { mocks } from '../mocks';

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }): Promise<Response> {
	const body = await request.json();
	const { id } = await params;

	if (id && body) {
		return NextResponse.json({
			status: true,
			code: 200,
			message: "Success GET data",
			data: {
				id: id,
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

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }): Promise<Response> {
	const { id } = await params;
	const data = mocks.find(x => x.id.toString() === id.toString()) ?? null;
	if (id) {
		return NextResponse.json({
			status: true,
			code: 200,
			message: "Success GET data",
			data: data
		})
	}

	return NextResponse.json({
		status: false,
		code: 400,
		message: "Failed GET data",
		data: null
	})
}
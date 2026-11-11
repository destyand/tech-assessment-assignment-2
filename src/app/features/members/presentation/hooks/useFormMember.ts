

'use client'
import React from 'react';
import { MemberPayloadType } from '../../domain/members.entity';
import { InitMemberForm } from '@/app/shared/utils/constant';

export function useFormMember() {
	const [form, setForm] = React.useState<MemberPayloadType>(InitMemberForm)

	const onUpdate = (key: string, value: string) => {
		setForm(prev => ({ ...prev, [key]: value }))
	}

	return {
		form,
		onUpdate,
		setForm
	}
}
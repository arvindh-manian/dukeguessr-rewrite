import { NextResponse, NextRequest } from 'next/server'
import { getProfile } from '@/utils/user'
import {Account, Record} from '@/types';

export async function GET(req: NextRequest, { params }: { params: { uuid: string }}): Promise<NextResponse<(Account & Record) | null>> {
    console.log(params)
    const { uuid } = params
    const profile: (Account & Record) | null | undefined = await getProfile(uuid)
    if (!profile) {
        return NextResponse.json(null)
    }
    return NextResponse.json(profile)
}


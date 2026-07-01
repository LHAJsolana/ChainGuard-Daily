import {NextResponse} from 'next/server'; import {getRpcHealth} from '@/lib/solana';
export const dynamic='force-dynamic';
export async function GET(){const rpc=await getRpcHealth();return NextResponse.json({service:'chainguard-daily',status:rpc.ok?'ok':'degraded',rpc},{status:rpc.ok?200:503,headers:{'Cache-Control':'no-store'}})}

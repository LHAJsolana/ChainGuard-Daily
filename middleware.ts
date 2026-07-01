import {NextRequest,NextResponse} from 'next/server';
const addressPattern=/^[1-9A-HJ-NP-Za-km-z]{32,44}$/;const signaturePattern=/^[1-9A-HJ-NP-Za-km-z]{64,90}$/;
export function middleware(request:NextRequest){const [,kind,value]=request.nextUrl.pathname.split('/');if(!value)return NextResponse.next();const valid=kind==='tx'?signaturePattern.test(value):addressPattern.test(value);if(valid)return NextResponse.next();const url=request.nextUrl.clone();url.pathname='/not-found';return NextResponse.rewrite(url,{status:404})}
export const config={matcher:['/wallet/:path*','/token/:path*','/tx/:path*']};

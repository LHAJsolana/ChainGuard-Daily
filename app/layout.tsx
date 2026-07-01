import './globals.css'; import type {Metadata} from 'next'; import {AppShell} from '@/components/shell';
export const metadata:Metadata={title:{default:'ChainGuard Daily',template:'%s · ChainGuard Daily'},description:'Daily on-chain safety checks for crypto users, builders, and developers.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className="noise"><AppShell>{children}</AppShell></body></html>}

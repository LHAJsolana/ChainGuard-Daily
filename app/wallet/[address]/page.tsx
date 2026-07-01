import {WalletReport} from '@/components/report'; import {validateSolanaAddress} from '@/lib/solana'; import {notFound} from 'next/navigation';
export default async function Page({params}:{params:Promise<{address:string}>}){const {address}=await params;if(!validateSolanaAddress(address))notFound();return <WalletReport address={address}/>}

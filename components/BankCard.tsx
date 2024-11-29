import Link from 'next/link'
import { formatAmount } from '@/lib/utils'
import Image from 'next/image'

const BankCard = ({ account, userName, showBalance = true }: CreditCardProps) => {


	return (
		<div className="flex flex-col" dir='ltr'>
			<Link href="/" className="bank-card font-yekan">
				<div className="bank-card_content">
					<div>
						<h1 className="font-semibold text-16 text-white">{ account.name || userName }</h1>
						<p className="font-ibm-plex-serif font-black text-white">{ formatAmount(account.currentBalance) }</p>
					</div>
					<article className="flex flex-col gap-2">
						<div className="flex justify-between">
							<h1 className="text-white font-semibold text-12">{ userName }</h1>
							<h2 className="text-white font-semibold text-12">●● / ●●</h2>
						</div>
						<p className="text-14 font-semibold tracking- text-white" dir='ltr'>
							●●●● ●●●● ●●●● <span className='text-16 font-inter'>1234</span>
						</p>
					</article>
				</div>
				<div className="bank-card_icon">
					<Image src='/icons/Paypass.svg' alt='paypass' width={20} height={24} />
					<Image src='/icons/mastercard.svg' alt='mastercard' width={65} height={32} className='ml-5' />
					<Image src='/icons/lines.png' alt='lines' width={316} height={190} className='absolute top-0 left-0' />
				</div>
			</Link>
		</div>
	)
}

export default BankCard

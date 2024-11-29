import Link from 'next/link'
import Image from 'next/image'
import BankCard from '@/components/BankCard'

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
	return (
		<aside className="right-sidebar">
			<section className="flex flex-col pb-8">
				<div className="profile-banner"/>
				<div className="profile -mt-3.5">
					<div className="profile-img">
						<span className="text-5xl -mt-5 font-bold text-blue-500">{ user.firstName[0] }</span>
					</div>
					<div className="profile-details">
						<h1 className="profile-name">{ user.firstName } { user.lastName }</h1>
						<p className="profile-email font-inter pt-1">{ user.email }</p>
					</div>
				</div>
				<section className="banks">
					<div className="flex w-full justify-between">
						<h2 className="header-2">حساب های من</h2>
						<Link href="/" className="flex gap-2">
							<Image src="/icons/plus.svg" height={ 20 } width={ 20 } alt="افزودن حساب"/>
							<h2 className="font-semibold text-14 text-gray-600 mt-0.5">افزودن حساب</h2>
						</Link>
					</div>
					{ banks.length > 0 && (
						<div className="relative flex flex-col justify-center items-center flex-1 gap-5">
							<div className="relative z-10">
								<BankCard
									key={ banks[0].$id }
									account={ banks[0] }
									userName={`${user.firstName} ${user.lastName}`}
									showBalance={false}
								/>
							</div>
							{ banks[1] && (
								<div className="absolute left-0 top-8 z-0 w-[90%]">
									<BankCard
										key={ banks[1].$id }
										account={ banks[1] }
										userName={`${user.firstName} ${user.lastName}`}
										showBalance={false}
									/>
								</div>
							) }
						</div>
					) }
				</section>
			</section>
		</aside>
	)
}

export default RightSidebar

import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'

const HomePage = () => {
	const user = {firstName: 'پوریا', lastName: 'ایران منش', email: 'akapouria@gmail.com'}
	return (
		<section className='home'>
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type='greeting'
						title='خوش آمدید'
						user={user.firstName || 'کاربر میهمان'}
						subtext='به راحتی به حساب های خود دسترسی داشته باشید و آن ها را مدیریت کنید'
					/>
					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={10250}
					/>
				</header>
			</div>
			<RightSidebar user={user} transactions={[]} banks={[{currentBalance: 123.50}, {currentBalance: 346.75}]} />
		</section>
	)
}

export default HomePage

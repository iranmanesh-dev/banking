import AnimatedCounter from '@/components/AnimatedCounter'
import DoughnutChart from '@/components/DoughnutChart'

const TotalBalanceBox = (
	{
		accounts = [], totalBanks, totalCurrentBalance
	}: TotlaBalanceBoxProps
) => {
	return (
		<section className={ `font-yekan fanum total-balance` }>
			<div className="total-balance-chart">
				<DoughnutChart accounts={ accounts }/>
			</div>
			<div className="flex flex-col gap-6">
				<h2 className="header-2">{ totalBanks } حساب بانکی</h2>
				<div className="flex flex-col gap-2">
					<p className="total-balance-label">
						اعتبار حساب
					</p>
					<div className="flex-center gap-2 total-balance-amount">
						<AnimatedCounter amount={ totalCurrentBalance }/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TotalBalanceBox

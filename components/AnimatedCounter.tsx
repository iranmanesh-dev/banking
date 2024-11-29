'use client'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
	return (
		<div className="total-balance-chart w-full font-ibm-plex-serif font-black">
			<CountUp end={ amount } prefix='$' decimals={2} />
		</div>
	)
}

export default AnimatedCounter

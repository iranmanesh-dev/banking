'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)
ChartJS.defaults.font.family = 'yekan'

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
	const data = {
		datasets: [
			{
				label: 'بانک ها',
				data: [ 125000, 112700, 172000 ],
				backgroundColor: [ '#0747b6', '#3365d8', '#2f91fe' ]
			},

		],
		labels: [ 'بانک ۱', 'بانک 2', 'بانک 3' ]
	}

	return <Doughnut
		redraw
		data={ data }
		options={ {
			cutout: '70%',
			plugins: {
				legend: {
					labels: {
						font: { family: 'yekan' },
					},
					display: false
				}
			}
		} }
		className="font-yekan"
	/>
}

export default DoughnutChart

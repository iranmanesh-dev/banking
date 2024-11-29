'use client'
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const Sidebar = ({ user }: SiderbarProps) => {
	const path = usePathname()
	return (
		<section className="sidebar">
			<nav className="flex flex-col gap-4">
				<Link href="/" className="mb-12 flex gap-2 cursor-pointer items-center">
					<Image src="/icons/logo.svg" alt="نرم افزار بانکداری افق" width={ 34 } height={ 34 }
					       className="size-[24px] max-xl:size-14"/>
					<h1 className="sidebar-logo !font-yekan font-extrabold">بانکداری افق</h1>
				</Link>
				{ sidebarLinks.map((item, index) => {
					const isActive = path === item.route || path.startsWith(`${ item.route }/`)
					return (
						<Link className={ cn('sidebar-link font-yekan font-bold', {
							'bg-bank-gradient': isActive
						}) } href={ item.route } key={ index }>
							<div className="relative size-6">
								<Image src={ item.imgURL } alt={ item.label } fill className={ cn({
									'brightness-[3] invert-0': isActive
								}) }/>
							</div>
							<p className={ cn('sidebar-label', {
								'!text-white': isActive
							}) }>{ item.label }</p>
						</Link>
					)
				}) }
				USER
			</nav>
			FOOTER
		</section>
	)
}

export default Sidebar

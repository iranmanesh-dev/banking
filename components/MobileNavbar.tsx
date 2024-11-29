'use client'
import {
	Sheet,
	SheetDescription,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetClose
} from '@/components/ui/sheet'

import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const MobileNavbar = ({ user }: MobileNavProps) => {
	const path = usePathname()
	return (
		<section className="w-full max-w-[264px] text-left">
			<Sheet>
				<SheetTrigger>
					<Image src="/icons/hamburger.svg" alt="menu icon" width={ 30 } height={ 30 } className="cursor-pointer"/>
				</SheetTrigger>
				<SheetContent className="border-none bg-white">
					<Link href="/" className="flex gap-1 px-4 cursor-pointer items-center">
						<Image src="/icons/logo.svg" alt="نرم افزار بانکداری افق" width={ 34 } height={ 34 }/>
						<h1 className="text-26 text-black-1 !font-yekan font-extrabold">بانکداری افق</h1>
					</Link>
					<div className="mobilenav-sheet">
						<SheetClose asChild>
							<nav className="flex flex-col gap-6 pt-16 text-white">
								{ sidebarLinks.map((item) => {
									const isActive = path === item.route || path.startsWith(`${ item.route }/`)
									return (
										<SheetClose key={item.label} asChild>
											<Link className={ cn('mobilenav-sheet_close w-full font-yekan font-bold', {
												'bg-bank-gradient': isActive
											}) } href={ item.route } key={ item.label }>
												<Image src={ item.imgURL } alt={ item.label } width={20} height={20} className={ cn({
													'brightness-[3] invert-0': isActive
												}) }/>
												<p className={ cn('font-semibold text-16 text-black-2', {
													'text-white': isActive
												}) }>{ item.label }</p>
											</Link>
										</SheetClose>
									)
								}) }
								USER
							</nav>
						</SheetClose>
						FOOTER
					</div>
				</SheetContent>
			</Sheet>
		</section>
	)
}

export default MobileNavbar

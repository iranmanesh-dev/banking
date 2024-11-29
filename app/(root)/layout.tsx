import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import MobileNavbar from '@/components/MobileNavbar'

export default function RootLayout(
	{
		children,
	}: Readonly<{
		children: React.ReactNode;
	}>
) {
	return (
		<main className="flex h-screen w-full font-rubik">
			<Sidebar user={ { firstName: 'پوریا', lastName: 'ایران منش', email: 'akapouria@gmail.com' } }/>
			<div className="flex flex-col size-full">
				<div className="root-layout">
					<Image src="/icons/logo.svg" alt="بانکداری افق" width={ 30 } height={ 30 }/>
					<MobileNavbar user={ { firstName: 'پوریا', lastName: 'ایران منش' } }/>
				</div>
				{ children }
			</div>
		</main>
	)
}

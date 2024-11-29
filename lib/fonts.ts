import {Rubik, Vazirmatn, IBM_Plex_Serif, Inter} from 'next/font/google'
import localFont from 'next/font/local'

export const ibm = IBM_Plex_Serif({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700'],
	variable: '--font-ibm-plex-serif'
})

export const inter = Inter({
	subsets: ['latin-ext'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-inter'
})

export const rubik = Rubik({
	subsets: ['arabic', 'latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-rubik'
})

export const vazir = Vazirmatn({
	subsets: ['latin', 'arabic'],
	weight: ['200', '400', '600', '800'],
	variable: '--font-vazir'
})

export const yekan = localFont({
	src: '../fonts/iranyekan.woff2',
	variable: '--font-yekan'
})
import {Inter, Lusitana} from 'next/font/google'
import {NextFont} from "next/dist/compiled/@next/font";

export const inter = Inter({subsets: ['latin']}) as NextFont
export const lusitana = Lusitana({subsets: ['latin'], weight: ['400', '700']}) as NextFont;
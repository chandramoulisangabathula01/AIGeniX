import type {Metadata} from 'next'
import {Inter} from "next/font/google"
import './style.css'

import Navbar1 from '@/components/Navbar1'

const inter = Inter({subsets:['latin']})

export const metadata: Metadata={
    title:"AI GeniX Studio",
    description:'Create what you think'
}

export default function RootLayout({
    children,
}: {
    children:React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar1/>
                
                {children}</body>

        </html>
    )
}
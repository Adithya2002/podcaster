"use client"

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { sidebarLinks } from '@/constants';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

const LeftSidebar = () => {
    const pathname = usePathname();
    const router = useRouter();
    return (
        <section className='left_sidebar'>
            <nav className='flex flex-col gap-6'>
                <Link href="/" className='flex cursor-pointer gap-2 pb-10 items-center '>
                    <Image
                        src="/icons/logo.svg"
                        height={28}
                        width={28}
                        alt='logo'
                    />
                    <h1 className='text-24 font-extrabold text-white max-lg:hidden'>Podcastr</h1>
                </Link>
                {
                    sidebarLinks.map((item) => {
                        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                        return <Link href={item.route} key={item.route} className={cn("flex gap-4 py-4 max-lg:px-4 justify-center lg:justify-start", {
                            'bg-nav-focus border-r-4 border-orange-1':isActive
                        })}>
                            <Image
                                src={item.imgURL}
                                height={24}
                                width={24}
                                alt={item.label}
                            />
                            {item.label}
                        </Link>
                    })
                }

            </nav>
        </section>
    )
}

export default LeftSidebar;
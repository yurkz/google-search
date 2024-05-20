import React from 'react'
import User from './User'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter()
    return (
        <header className='flex justify-between p-5 text-sm text-gray-700'>
            <div className='flex space-x-4 items-center'>
                <Link href={"https://about.google/"}>
                    About
                </Link>
                <Link href={"https:store.google.com/"}>
                    Store
                </Link>
            </div>

            <div className='flex space-x-4 items-center'>
                <Link href={"https:mail.google.com"}>
                    Gmail
                </Link>

                <a onClick={() => router.push(`/search?query=${router.query.query || "google"}&searchType=image`)} className='link'>Images</a>
                {/* <User /> */}

            </div>
        </header>
    )
}

export default Header
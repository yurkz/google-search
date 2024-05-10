import { useRouter } from 'next/router'
import React from 'react'

export default function SearchHeaderOption({ title, Icon, selected }) {
    const router = useRouter();

    const handleSelectTab = (title) => {
        router.push(`/search?query=${router.query.query}&searchType=${title == "Images" ? "image" : ""}`)
    }
    return (
        <div onClick={() => handleSelectTab(title)} className={`flex items-center space-x-2 border-b-4 border-transparent
         hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-3
         ${selected && "text-blue-500 border-blue-500"}
         `}>
            <Icon className="h-4" />
            <p>{title}</p>
        </div>
    )
}

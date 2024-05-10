import SearchHeaderOption from './SearchHeaderOption'
import { PhotographIcon, SearchIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'

export default function SearchHeaderOptions() {
    const router = useRouter();


    return (
        <div className='flex space-x-7 select-none w-full justify-center text-gray-500 lg:pl-52 lg:justify-start border-b'>
            <SearchHeaderOption selected={router.query.searchType == "" || !router.query.searchType} title="All" Icon={SearchIcon} />
            <SearchHeaderOption selected={router.query.searchType == "image"} title="Images" Icon={PhotographIcon} />
        </div>
    )
}


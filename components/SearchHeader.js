import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import User from "./User";
import SearchHeaderOptions from "./SearchHeaderOptions";


export default function SearchHeader() {
    const router = useRouter();
    const searchInputRef = useRef("");

    const handleSearch = (e) => {
        e.preventDefault();
        const searchValue = searchInputRef.current.value;
        if (!searchValue.trim()) return;

        router.push(`/search?query=${searchValue.trim()}&searchType=`);
    }



    return (
        <header className='sticky top-0 bg-white'>
            <div className='flex w-full p-6 items-center'>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                    width={120}
                    height={40}
                    alt=""
                    objectFit="contain"
                    className="cursor-pointer"
                    onClick={() => router.push("/")}
                />

                <form className="flex border border-gray-500 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
                    <input ref={searchInputRef} defaultValue={router.query.query}
                        className="w-full focus:outline-none" type="text" />

                    <XIcon className="h-7 text-gray-500 cursor-pointer sm:mr-3" onClick={() => searchInputRef.current.value = ""} />
                    <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-500 mr-3" />
                    <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500" />
                    <button hidden onClick={handleSearch}></button>
                </form>
                <User className="ml-auto whitespace-nowrap" />
            </div>
            <SearchHeaderOptions />
        </header>
    )
}

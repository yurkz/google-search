import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import Footer from "@/components/Footer";
import { SearchIcon, MicrophoneIcon } from '@heroicons/react/solid'
import { useRouter } from "next/router";
import { useRef } from "react";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef("");

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = searchInputRef.current.value;
    if (!searchValue.trim()) return;

    router.push(`/search?query=${searchValue.trim()}&searchType=`);
  }

  const handleRandomSearch = async (e) => {
    e.preventDefault();
    const searchRandom = await fetch("https://random-word-api.herokuapp.com/word?number=1")
      .then(response => response.json())

    if (!searchRandom) return;

    router.push(`/search?query=${searchRandom}&searchType=`);
  }

  return (
    <div className="">
      <Head>
        <title>Made from NextJS</title>
        <meta name="description" content="Generate by create next app"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <Header />

      <form className="flex flex-col items-center mt-52">
        {/* <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          //src="https://media.licdn.com/dms/image/D4D12AQEG9wTchYm1xQ/article-cover_image-shrink_720_1280/0/1698925328170?e=2147483647&v=beta&t=Ct12hsgQWPcznb82UdLW8d0thopcn_fWboM9g57BV2U"
          width={300}
          height={100}
          alt=""
          objectFit="cover"
        /> */}
        <div className="flex justify-center items-center flex-col">
          <h1 className="  text-7xl" >
            Search Engine
          </h1>
          <p className="font-semibold">  Inspired by NextJS         </p>
        </div>
        <div className="flex w-full items-center mt-5 mx-auto max-w-[90%] border border-gray-200
        hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full
        sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 text-gray-500 mr-5" />
          <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="h-5" />

        </div>
        <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
          <button onClick={handleSearch} className="btn">Google Search</button>
          <button onClick={handleRandomSearch} className="btn">Feeling Lucky</button>
        </div>
      </form>


      <Footer />

    </div>

  );
}

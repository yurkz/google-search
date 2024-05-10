import SearchHeader from "@/components/SearchHeader";
import SearchResult from "@/components/SearchResult";
import { useState, useEffect } from 'react';

import Head from "next/head";
import { useRouter } from "next/router";


export default function Search({ results }) {
    const router = useRouter()

    const API_KEY = results.split("|")[0];

    const CONTEXT_KEY = results.split("|")[1];
    const QUERY = results.split("|")[2];
    const SEARCH_TYPE = results.split("|")[3];
    const STARTINDEX = results.split("|")[4];


    const [data, setData] = useState(null);

    useEffect(() => {
        // Fetch data when the component mounts
        fetchData();
    }, []);

    async function fetchData() {
        try {
            console.log(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${QUERY}${SEARCH_TYPE && "&searchType=image"}&start=${STARTINDEX}`)
            const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${QUERY}${SEARCH_TYPE && "&searchType=image"}&start=${STARTINDEX}`);
            const jsonData = await response.json();
            setData(jsonData);

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }


    return (
        <div>
            <Head>
                <title>{router.query.query} - Search page</title>
            </Head>


            <SearchHeader />

            {data && <SearchResult results={data} />}
        </div>
    )
}

export async function getServerSideProps(context) {
    const startIndex = context.query.start || "1";
    //     const mockData = false;
    //     //mockData ? response :

    //     const data = await fetch(
    //         //`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.query}${context.query.searchType && "&searchType=image"}&start=${startIndex}`
    //         `https://www.googleapis.com/customsearch/v1?key=AIzaSyAt413g_v_7ZlB0IbrufvGrhu6xztqJVwg&cx=${process.env.CONTEXT_KEY}&q=${context.query.query}${context.query.searchType && "&searchType=image"}&start=${startIndex}`
    //     ).then(response => response.json());
    return {
        props: {
            results: process.env.API_KEY + "|" + process.env.CONTEXT_KEY + "|" + context.query.query + "|" + context.query.searchType + "|" + startIndex
        }
    }
}
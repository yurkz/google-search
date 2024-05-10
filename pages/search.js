import SearchHeader from "@/components/SearchHeader";
import SearchResult from "@/components/SearchResult";
import response from "@/response";

import Head from "next/head";
import { useRouter } from "next/router";


export default function search({ results }) {

    const router = useRouter()
    return (
        <div>
            <Head>
                <title>{router.query.query} - Search page</title>
            </Head>


            <SearchHeader />

            <SearchResult results={results} />
        </div>
    )
}

export async function getServerSideProps(context) {
    const startIndex = context.query.start || "1";
    console.log("startIndex", startIndex);
    const mockData = false;
    const data = !mockData ? response : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${context.query.query}${context.query.searchType && "&searchType=image"}&start=${startIndex}`
    ).then(response => response.json());
    return {
        props: {
            results: data
        }
    }
}
import SearchHeader from "@/components/SearchHeader";
import SearchResult from "@/components/SearchResult";


import Head from "next/head";
import { useRouter } from "next/router";


export default function Search({ results }) {

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
    const mockData = false;
    //mockData ? response :${process.env.GOOGLE_API_KEY}
    const data = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyAt413g_v_7ZlB0IbrufvGrhu6xztqJVwg&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${context.query.query}${context.query.searchType && "&searchType=image"}&start=${startIndex}`
    ).then(response => response.json());
    return {
        props: {
            results: data
        }
    }
}
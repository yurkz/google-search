import React from 'react'
import Parser from 'html-react-parser'
import PaginationButtons from './PaginationButtons'

export default function SearchResult({ results }) {

    return (
        <div className='w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
            <p className='text-gray-500 text-sm mb-5 mt-5 '>
                About {results.searchInformation.formattedTotalResults} results ({results.searchInformation.formattedSearchTime} seconds)
            </p>

            {results.items.map((res) => (
                <div key={res.link} className='max-w-xl mb-8'>
                    <div className='group'>
                        <a href={res.link} className='text-sm truncate' >
                            {res.formattedUrl}
                        </a>
                        <a href={res.link} className='group-hover:underline decoration-blue-800' >
                            <h2 className='truncate text-xl font-medium text-blue-500'>
                                {res.title}
                            </h2>
                        </a>
                    </div>
                    <p className='text-gray-700'>
                        {Parser(res.htmlSnippet)}
                    </p>
                </div>
            ))}
            <PaginationButtons />
        </div>
    )
}

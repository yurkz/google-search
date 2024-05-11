import React from 'react'
import PaginationButtons from './PaginationButtons'

export default function ImageResults({ results }) {

  return (
    <div className='mt-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4'>
        {results.items?.map(r => (
          <div key={r.link} className='mb-8'>
            <div className='group'>
              <a className='' href={r.image.contextLink}>
                <img className="group-hover:shadow-xl w-full h-60 object-contain" src={r.link} alt={r.title} />
              </a>
              <a className='group-hover:underline' href={r.image.contextLink}>
                <h2 className='truncate text-xl'>
                  {r.title}
                </h2>
              </a>

              <a className='group-hover:underline' href={r.image.contextLink}>
                <p className='text-gray-600 '>
                  {r.displayLink}
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className='ml-16'>
        <PaginationButtons />
      </div>
    </div>
  )
}

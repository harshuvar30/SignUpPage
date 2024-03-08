import React from 'react'


export default function NewsItems(props) {
  const { title, description, imageUrl, newsUrl, author, date, source } = props;
  return(
    <div className="max-w-sm mx-auto mb-8 ">
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700x">
        <a href="https://www.engadget.com/final-fantasy-14-will-finally-hit-xbox-series-xs-on-march-21-205030097.html">
          <img className="rounded-t-lg p-1 w-vh" src="https://s.yimg.com/ny/api/res/1.2/ZI6qOM8sFjyC1d_ItqAagg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2024-03/1d0be5d0-dbfa-11ee-b16b-eea3dfce2d3a" alt="" />
        </a>
        <div className="flex-1 p-5">
          <a href="https://www.engadget.com/final-fantasy-14-will-finally-hit-xbox-series-xs-on-march-21-205030097.html">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Final Fantasy 14 will finally hit Xbox Series X/S on March 21 - Engadget</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> "Square Enix has finally revealed the proper release date for Final Fantasy 14 on Xbox Series X/S. It's coming to the consoles on March 21."</p>
          <a href="https://www.engadget.com/final-fantasy-14-will-finally-hit-xbox-series-xs-on-march-21-205030097.html" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

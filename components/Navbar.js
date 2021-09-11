import { useState } from 'react';
import Link from 'next/link';
import Container from '@components/Container';

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    const [offcanvas, setOffcanvas] = useState(false);
    const [search, setSearch] = useState(false);
    const lainnyaList = [
        {text: "Internet", href: "#"},
        {text: "Book", href: "#"},
        {text: "Open Source", href: "#"}
    ];
    return (
      <nav className="py-10">
        <Container>
          <div className="flex items-center">
            <div className="w-3/12 lg:hidden">
              <button onClick={() => setOffcanvas(true)}>
              <svg viewBox="0 0 100 80" width="20" height="20">
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
              </svg>
              </button>
            </div>
            <div className="lg:w-2/12 w-6/12">
            <Link href="/">
              <a className="flex items-center justify-center lg:justify-start">
                <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-xl">DB</div>
                Dahaaw Blog
              </a>
            </Link>
            </div>
            <div className="w-3/12 text-right lg:hidden">
              <button onClick={() => setSearch(!search)}>
                <svg className="inline-block" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                  <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/>
                </svg>
              </button>
            </div>
            <div className={`lg:w-7/12 w-full bg-gradient-to-b from-gray-600 to-gray-900 lg:bg-none fixed lg:static top-0 h-full lg:h-auto p-10 lg:p-0 transition-all ${offcanvas ? "left-0"  : "-left-full"} `}>
              <button className="absolute top-10 right-10 lg:hidden" onClick={() => setOffcanvas(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              <ul className="lg:space-x-14 flex lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0">
                <li><Link href="/posts"><a className="hover:underline">UI Design</a></Link></li>
                <li><Link href="/posts"><a className="hover:underline">Front End</a></Link></li>
                <li><Link href="/posts"><a className="hover:underline">Back End</a></Link></li>
                <li className="relative">
                  <a 
                    className="hover:underline cursor-pointer flex items-center" 
                    onClick={()=>setDropdown(!dropdown)}
                  >Lainnya
                    <svg className="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://w3.org/2000/svg">
                      <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  {dropdown && (
                  <ul className="absolute w-[200px] bg-gray-800 rounded shadow-2xl mt-4">
                    {lainnyaList.map(({text, href}) => (
                      <li key={text} className="border-b border-white/5 last:border-0">
                        <Link href={href}>
                          <a className="flex py-3 px-6 hover:bg-gray-700/60">{text}</a>
                        </Link>
                        </li>
                    ))}
                    
                  </ul>)}
                </li>
              </ul>
            </div>

            <div className={`lg:w-3/12 absolute lg:static w-full left-0 px-10 lg:px-0 transition-all ${search ? "top-10" : "-top-40"}`}>
              <button className="absolute top-3 right-12 lg:hidden" onClick={() => setSearch(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              <input className="bg-gray-700 py-3 px-6 w-full lg:rounded-full rounded-lg bg-search pl-12" placeholder="Search ..."/>
            </div>

          </div>
        </Container>
      </nav>
    )
}

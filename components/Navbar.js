import { useState } from 'react'
import Container from '@components/Container';

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false);
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
              <button>
              <svg viewBox="0 0 100 80" width="20" height="20">
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
              </svg>
              </button>
            </div>
            <div className="lg:w-2/12 w-6/12 flex items-center justify-center lg:justify-start">
                <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-6">DB</div>
                Dahaaw Blog
            </div>
            <div className="w-3/12 text-right lg:hidden">
              <svg className="inline-block" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/>
              </svg>
            </div>
            <div className="lg:w-7/12 w-full bg-white fixed top-0 left-0 h-full">
              <ul className="space-x-10 flex items-center">
                <li><a className="hover:underline" href="#">UI Design</a></li>
                <li><a className="hover:underline" href="#">Front End</a></li>
                <li><a className="hover:underline" href="#">Back End</a></li>
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
                        <a href={href} className="flex py-3 px-6 hover:bg-gray-700/60">{text}</a>
                        </li>
                    ))}
                    
                  </ul>)}
                </li>
              </ul>
            </div>

            <div className="w-3/12 hidden">
              <input className="bg-gray-700 py-3 px-6 w-full rounded-full border-0 bg-search pl-12" placeholder="Search ..."/>
            </div>

          </div>
        </Container>
      </nav>
    )
}

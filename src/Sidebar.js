import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'

import { useGlobalContext } from './context'


const Sidebar = () => {

  const {isSidebarOpen, closeSidebar} = useGlobalContext();


  return (
    <aside className={`${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}> 
    {/* if is sidebarOpen is true then show sidebar-wrapper show class(class in index.css). if it is false, show sidebar-wrapper class */}

    <div className="sidebar">
      <button className='close-btn' onClick={closeSidebar}>
        <FaTimes/>
      </button>

      {/* // displaying the link now. we will have to iterate it twice because our data is nested (see data.js)*/}

      {/* in data we have one array (named sublinks)  where we have the objects and inside the objects  it dispalys the pages(display, developers etc) but then each page has the sub links which is another array*/}

      <div className="sidebar-links">
         {sublinks.map((item, index)=> { {/* index is becasue we have a list and item represents this object (
          {
    page: 'products',
    links: [
      { label: 'payment', icon: <FaCreditCard />, url: '/products' },
      { label: 'terminal', icon: <FaCreditCard />, url: '/products' },
      { label: 'connect', icon: <FaCreditCard />, url: '/products' },
    ],
  },)  */}
            const {links, page} = item; // deconstructing links, page from item
            return <article key={index}>
              <h4>{page}</h4>

              <div className="sidebar-sublinks">
                {links.map((link, index)=> {
                  const {url, icon , label} = link; // deconstructing url, icon, label from link
                  return (
                    <a key={index} href={url}>
                      {icon}
                      {label}
                    </a>
                  )
                })}
              </div>
            </article>
        })}
      </div>
    </div>
    </aside>
  )
}

export default Sidebar

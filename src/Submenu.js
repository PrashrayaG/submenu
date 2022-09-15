import React, { useState, useRef, useEffect } from 'react'

import { useGlobalContext } from './context'


const Submenu = () => {

  const {isSubmenuOpen, location, page: {page, links}} = useGlobalContext();


  const container = useRef(null)

  const [columns, setColumns] = useState('col-2')

  // every time location changes, run use effect
  useEffect(()=> {

    setColumns('col-2')
    const submenu = container.current; // ,current gives the node
    const {center, bottom} = location; // coming from location

    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

  // for changing the columns (of submenu dynamically) , col classes are in index.css

    if(links.length === 3) {
      setColumns('col-3') // 3 column layout
    }
    if (links.length > 3 ) {
      setColumns('col-4')
    }

  },[location, links])

  return (
    <aside className={`${isSubmenuOpen? 'submenu show' : 'submenu'}`} ref={container}> 
    {/* if isSubmenuopen is true display submeny show otherwise if false, show submenu class */}
    

    <h4>{page}</h4>
    <div className={`submenu-center ${columns}`}>
      {links.map((link,index)=> {
        const {label, icon, url} = link;
        return <a  key={index} href={url}>
          {icon}
          {label}
        </a>
      })}
    </div>
    </aside>
  )
}

export default Submenu

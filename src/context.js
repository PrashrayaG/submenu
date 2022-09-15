import React, { useState, useContext } from 'react'
import sublinks from './data'

// setting global context
const AppContext = React.createContext();

export const AppProvider = ({children}) => {

 const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

 //
 const [location, setLocation] = useState({})
 const [page, setPage] = useState({page: '', links: []}) // by default passing 2 values. page with empty string and links with empty array

 //functions (sidebar)
 const openSidebar = () => {
  setIsSidebarOpen(true);
 }

  const closeSidebar = () => {
  setIsSidebarOpen(false);
 }

  //functions (SubMenu)
 const openSubmenu = (text,coordinates) => {

  const page = sublinks.find((link)=> link.page === text); // from find method - get me the page that matches the page coming from btn

  setPage(page)

  setLocation(coordinates)
  setIsSubmenuOpen(true);
 }

  const closeSubmenu = () => {
  setIsSubmenuOpen(false);
 }


 return (
         <AppContext.Provider 
          value={{isSubmenuOpen, 
          isSidebarOpen, 
          openSubmenu, 
          closeSubmenu, 
          openSidebar, 
          closeSidebar,
          location,
          page,
          
           }}>
          {children}
        </AppContext.Provider>
       )
}

// custom hook
export const useGlobalContext = () => {
 return useContext(AppContext);
}


import React from 'react';
import SideBar from 'layouts/components/SideBar';
import './style.scss'

const MainLayout = ({children}: { children: React.ReactNode}) => {
  

  return (
    <div className="grid grid-cols-12 w-full h-full">

      <SideBar />

      <main className="col-span-10 bg-[#F3F2F2] w-full h-full overflow-y-hidden">
        <nav className="px-7 bg-white w-full h-16 flex justify-between items-center">
          <div className="flex items-center h-full py-3 ml-auto">
            <input type="search" placeholder='Rechercher' className="form--custom"/>
          </div>
        </nav>
        <div className="w-full px-7 list-container">
          {children}
        </div>
      </main>
    </div>
  );
}

export default MainLayout;

import Navbar from '@/components/layout/navbar';
import React from 'react'


export default function ContentLayout({children} : {children: React.ReactNode}) {
    return (
      <div>
        {/* <div className="bg-body flex">
          <Sidebar    /> */}
          <div className="sticky left-10 flex flex-1 flex-col">
            <Navbar  />
            <div className="padding">
                <main >
                  {children}
                </main>
            </div>
          </div>
        </div>
    //   </div>
    );
  }
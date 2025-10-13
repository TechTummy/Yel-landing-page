import React from 'react'

export default function HomeLayout({children}) {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="w-full mx-auto max-w-[1280px]">
            {children}
        </div>
    </div>
  )
}
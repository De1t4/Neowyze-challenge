import React, { Children } from 'react';

const Layout = ({children}: {
  children: React.ReactNode
}) => {
  return (
    <main className=' text-gray-100 flex min-h-screen flex-col items-center  gap-4 px-12 py-6  bg-gray-800'>

      {children}
    </main>
  );
}

export default Layout;

import React from 'react'
import Image from 'next/image';



function header() {
  return (
    <header className="bg-black text-white body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src="/Foodtuck.png" alt="logo" width={109} height={32} />
      
    </div>
    <nav className="w-[508px] h-[24px] md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center coursor-pointer">
      <a className="mr-5 text-yellow-700 font-bold">Home</a>
      <a className="mr-5 hover:text-white coursor-pointer">Menu</a>
      <a className="mr-5 hover:text-white">Blog</a>
      <a className="mr-5 hover:text-white">pages</a>
      <a className="mr-5 hover:text-white">About</a>
      <a className="mr-5 hover:text-white">Shop</a>
      <a className="mr-5 hover:text-white">Contact</a>
    </nav>
    <div className='grid grid-cols-3 gap-2'>
  <Image src="/MagnifyingGlass.png" alt='logo' width={24} height={24} />
  <Image src="/User.png" alt='logo' width={24} height={24} />
  <Image src="/Vector.png" alt='logo' width={24} height={24} />
  </div>
  </div>
</header>
 
  )
}

export default header
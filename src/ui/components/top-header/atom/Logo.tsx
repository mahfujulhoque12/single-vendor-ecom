import React from 'react'
import logo from '/public/logo/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
        <Image src={logo} alt="Logo" width={300} height={300} className='h-20 w-36' />
    </Link>
  )
}

export default Logo
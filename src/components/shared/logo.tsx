
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
        <Link href="/" className="flex items-center gap-2 self-center">
              <Image src={'/logo.png'} alt="Logo" width={40} height={40} className="size-10" />
              <h1 className="text-2xl font-bold">
                Job<span className="text-primary">Portal</span>
              </h1>
            </Link>
  )
}

export { Logo }
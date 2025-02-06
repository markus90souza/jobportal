import Image from 'next/image'
import Link from 'next/link'
import { type FC } from 'react'
import { Button } from '../ui/button'
import { ThemeToggle } from '../theme-toggle'

const Navbar: FC = () => {
  return (
    <nav className='flex justify-between items-center py-5'>
      <Link href={'/'} className='flex items-center gap-2'>
        <Image src="/logo.png" alt="Job Marshal Logo" width={40} height={40} />
        <strong className='text-2xl font-bold'>
          Job <span className='text-primary'>Portal</span>
        </strong>
      </Link>

    <div className="flex items-center gap-2">
      <ThemeToggle />
      <Button>
        Entrar
      </Button>
    </div>
    </nav>
  )
}

export { Navbar }

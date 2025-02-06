
import { type FC } from 'react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { Logo } from '@/components/shared/logo'

const Navbar: FC = () => {
  return (
    <nav className='flex justify-between items-center py-5'>
    <Logo />

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

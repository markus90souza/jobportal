
import { type FC } from 'react'
import { Button, buttonVariants } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { Logo } from '@/components/shared/logo'
import { auth,  signOut } from '@/utils/auth'
import Link from 'next/link'

const Navbar: FC = async () => {

  const session = await auth();


  return (
    <nav className='flex justify-between items-center py-5'>
      <Logo />
      <div className="flex items-center gap-2">
        <ThemeToggle />
        
          {
            session?.user ? (
              <form action={async () => { 
                "use server";
                await signOut() }}>

                <Button>
                  Sair
                </Button>
                </form>
            ) : (
              <Link href="/login" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
                Login
                </Link>
            )
          }
      
      </div>
    </nav>
  )
}

export { Navbar }

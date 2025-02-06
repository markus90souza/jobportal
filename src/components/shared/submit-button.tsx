'use client'
import { Button } from '@/components/ui/button'
import { useFormStatus } from 'react-dom'
import { Loader2 } from 'lucide-react'
import type { FC, ReactNode } from 'react'
type SubmitButtonProps = {
  title: string;
  icon?: ReactNode;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  width?: string;
}

const SubmitButton: FC<SubmitButtonProps> = (
  { title, icon, variant = 'outline', width = 'w-full' }
) => {
 const { pending } = useFormStatus()
 
    return (
      <Button
        type="submit"
        variant={variant}
        disabled={pending}
        className={width}
      >
        {pending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin " />
            <span>Enviando...</span>
          </>
        ) : (
          <>
            {icon && <div className="">{icon}</div>}
            <span>{title}</span>
          </>
        )}
      </Button>
  )
}

export { SubmitButton }

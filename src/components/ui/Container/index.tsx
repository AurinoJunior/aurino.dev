import { ReactNode } from 'react'

interface IContainerProps {
  children: ReactNode
}

export function Container({ children }: IContainerProps) {
  return (
    <div className="mx-auto mt-20 max-w-[80%] xl:max-w-[40%] 2xl:max-w-[30%]">
      {children}
    </div>
  )
}

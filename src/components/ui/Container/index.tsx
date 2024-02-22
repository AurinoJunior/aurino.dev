import { ReactNode } from 'react'

interface IContainerProps {
  children: ReactNode
}

export function Container({ children }: IContainerProps) {
  return (
    <div className="mx-auto max-w-[85%] antialiased lg:max-w-[40%] 2xl:max-w-[30%]">
      {children}
    </div>
  )
}

import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  /* max-w-3xl leda max-w-5xl ni theesesi max-w-none vaadanu */
  return (
    <section className="mx-auto w-full max-w-none px-0 sm:px-0 xl:px-0">
      {children}
    </section>
  )
}
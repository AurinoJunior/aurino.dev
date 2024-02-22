import { Github } from '@/components/ui/Icons/Github'
import { Instagram } from '@/components/ui/Icons/Instagram'
import { useTheme } from '@/hooks/useTheme'
import { ArrowUpRight, Linkedin } from 'lucide-react'

interface IContactItemProps {
  name: string
  user: string
  link: string
}

export function ContactItem({ name, user, link }: IContactItemProps) {
  const { theme } = useTheme()
  const fillIcon = theme === 'dark' ? 'black' : 'white'

  const Icons = {
    Linkedin: (
      <Linkedin
        className="text-white dark:text-slate-950"
        size={30}
        fill={fillIcon}
      />
    ),
    Github: (
      <Github
        classname="text-white dark:text-slate-950"
        size={30}
        fill={fillIcon}
      />
    ),
    Instagram: (
      <Instagram classname="text-white dark:text-slate-950" size={30} />
    )
  }

  return (
    <a
      href={link}
      target="_blank"
      className="group/item relative flex cursor-pointer items-center gap-4 rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-900 md:p-4"
      rel="noreferrer"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-black dark:bg-white">
        {Icons[name as keyof typeof Icons]}
      </div>
      <div>
        <p className="pr-4 text-lg font-bold">{name}</p>
        <p className="pr-4 text-slate-400">{user}</p>
      </div>
      <ArrowUpRight className="absolute right-4 top-4 text-sky-500 group-hover/item:visible lg:invisible" />
    </a>
  )
}

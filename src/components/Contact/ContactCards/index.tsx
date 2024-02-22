import { Github } from '@/components/ui/Icons/Github'
import { Instagram } from '@/components/ui/Icons/Instagram'
import { ArrowUpRight, Linkedin } from 'lucide-react'

interface IContactItemProps {
  name: string
  user: string
  link: string
}

const Icons = {
  Linkedin: <Linkedin className="text-slate-950" size={30} fill="black" />,
  Github: <Github classname="text-slate-950" size={30} fill="black" />,
  Instagram: <Instagram classname="text-slate-950" size={30} />
}

type IconsKeys = keyof typeof Icons

export function ContactItem({ name, user, link }: IContactItemProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="group/item relative flex cursor-pointer items-center gap-4 rounded-lg p-2 hover:bg-slate-900 md:p-4"
      rel="noreferrer"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white">
        {Icons[name as IconsKeys]}
      </div>
      <div>
        <p className="pr-4 text-lg font-bold text-white">{name}</p>
        <p className="pr-4 text-slate-400">{user}</p>
      </div>
      <ArrowUpRight className="absolute right-4 top-4 text-sky-500 group-hover/item:visible lg:invisible" />
    </a>
  )
}

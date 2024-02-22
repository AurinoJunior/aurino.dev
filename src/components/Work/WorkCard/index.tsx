interface IWorkCardProps {
  title: string
  tag: string
  workTime: string
  description: string
  role: string
  link: string
}

export function WorkCard({
  title,
  tag,
  description,
  role,
  workTime,
  link
}: IWorkCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="mt-4 block cursor-pointer rounded-lg p-2 hover:bg-slate-900 md:p-6"
      rel="noreferrer"
    >
      <div className="flex items-center gap-4">
        <h3 className="text-lg font-bold md:text-xl">{title}</h3>

        {tag && (
          <div className="rounded-md bg-slate-500 px-2 py-0.5 text-sm font-bold md:py-1">
            {tag}
          </div>
        )}
      </div>

      <p className="mt-4 text-slate-400">{description}</p>

      <div className="mt-4 flex flex-col items-start justify-between md:flex-row md:items-end">
        <p className="text-md text-sky-500 md:text-lg">{role}</p>
        <p className="text-md italic text-slate-500">{workTime}</p>
      </div>
    </a>
  )
}

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
    <div className="mt-4 p-2 md:p-6">
      <div className="flex items-center justify-between gap-4">
        <a
          href={link}
          target="_blank"
          className={`cursor-pointer text-lg font-bold  underline hover:brightness-75 md:text-xl`}
          rel="noreferrer"
        >
          {title}
        </a>

        {tag && (
          <div className="rounded-md bg-slate-500 px-2 py-0.5 text-sm font-bold text-white md:py-1">
            {tag}
          </div>
        )}
      </div>

      <p className="mt-4 text-slate-500 dark:text-slate-400">{description}</p>

      <div className="mt-4 flex flex-col items-start justify-between md:flex-row md:items-end">
        <p className="text-md md:text-lg">{role}</p>
        <p className="text-md italic text-slate-400 dark:text-slate-500">
          {workTime}
        </p>
      </div>
    </div>
  )
}

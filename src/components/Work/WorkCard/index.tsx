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
      className="block cursor-pointer rounded-lg p-6 hover:bg-slate-900"
      rel="noreferrer"
    >
      <div className="flex items-center gap-4">
        <h3 className="text-xl font-bold">{title}</h3>

        {tag && (
          <div className="rounded-md bg-slate-500 px-2 py-1 text-sm font-bold">
            {tag}
          </div>
        )}
      </div>

      <p className="mt-4 text-slate-400">{description}</p>

      <div className="flex items-end justify-between">
        <p className="mt-4 text-lg italic text-sky-500">{role}</p>
        <p className="text-md mt-4 text-slate-500">{workTime}</p>
      </div>
    </a>
  )
}

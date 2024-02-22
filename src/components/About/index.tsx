import { Brush } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="pt-24">
      <h2 className="text-3xl font-bold italic">Sobre</h2>

      <p className="mt-4 text-slate-400">
        Atualmente sou desenvolvedor web front-end, me formei em ciência da
        computação em 2019 e desde então tenho desbravado esse mundo da
        programação web, metodologias ágeis e cultura devops.
      </p>

      <p className="mt-4 text-slate-400">
        Possuo experiência em teste AB, criação de design system, melhoria de
        métricas em web core vitals e criação de testes automatizados.
      </p>

      <p className="mt-4 text-slate-400">
        Bom, espero conseguir compartilhar um pouco dos meus estudos com vocês e
        aprender bastante durantes esse processo, bora aprender juntos 🚀
      </p>

      <p className="mt-4 text-slate-400">Meus outros interesses:</p>
      <a
        className="ml-4 mt-4 flex cursor-pointer items-center gap-2 underline decoration-1 hover:text-pink-500"
        target="_blank"
      >
        <Brush size={18} />
        Instagram de desenhos
      </a>

      <div className="mt-8 italic text-slate-500">
        <p>Nunca deixe de aprender sempre há uma forma que você não conhece.</p>
        <p>~~ Irelia - League of legends</p>
      </div>
    </section>
  )
}

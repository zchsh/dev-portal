import s from './examples-container.module.css'

function ExamplesContainer({ children }: { children: React.ReactNode }) {
  return <div className={s.root}>{children}</div>
}

export default ExamplesContainer

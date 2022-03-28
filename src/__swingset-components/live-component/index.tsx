import sg from './shared.module.css'
import s from './style.module.css'
import { useState } from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import theme from './editor-theme'

export default function createLiveComponent(scope) {
  return function LiveComponent({ children, components, collapsed = false }) {
    const [code, setCode] = useState(children)
    const [isCollapsed, setIsCollapsed] = useState(collapsed)

    return (
      <div className={s.liveComponent}>
        <LiveProvider
          code={code}
          scope={Object.assign({}, scope, components)}
          theme={theme as $TSFixMe}
          transformCode={(code) => {
            setCode(code)
            return code
          }}
        >
          <LivePreview />
          <h6
            className={`${sg.label} ${s.clickable}`}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            Code Editor
            <svg
              width="15"
              height="10.5"
              viewBox="0 0 10 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.caret} ${isCollapsed ? s.caretCollapsed : ''}`}
            >
              <path
                d="M8.05264 2L5.05264 5.00649L2.05264 2"
                stroke="#aaa"
                strokeWidth="1.25"
                strokeLinecap="square"
              ></path>
            </svg>
          </h6>
          <div className={`${s.editor} ${isCollapsed ? s.collapsed : ''}`}>
            <LiveEditor />
          </div>
          <LiveError />
        </LiveProvider>
      </div>
    )
  }
}

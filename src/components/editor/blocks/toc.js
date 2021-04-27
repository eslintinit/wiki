import React from 'react'
import { NodeViewWrapper } from '@tiptap/react'

// const content = [
//   {
//     name: 'Early life',
//     children: ['1960s', '1970s', '1980s'],
//   },
//   {
//     name: 'Next',
//     children: ['Sex', 'Drugs', 'Alco'],
//   },
//   {
//     name: 'Last',
//     children: ['Death', 'Post mortem'],
//   },
// ]

// const content = [{ name: 'raz' }, { name: 'dva' }, { name: 'tri' }]

export default function Counter(props) {
  const increase = () => {
    props.updateAttributes({
      count: props.node.attrs.count + 1,
    })
  }

  let content
  try {
    content = eval(props.node.attrs.content)
  } catch (e) {
    if (e instanceof SyntaxError) {
      console.log('error')
    }
  }

  if (!content) return null
  // const content = eval(props.node.attrs.content)

  return (
    <NodeViewWrapper className="react-component">
      <div
        id="toc"
        className="toc"
        role="navigation"
        aria-labelledby="mw-toc-heading"
      >
        <input
          type="checkbox"
          role="button"
          id="toctogglecheckbox"
          className="toctogglecheckbox"
          style={{ display: 'none' }}
        />
        <div className="toctitle" lang="en" dir="ltr">
          <h2 id="mw-toc-heading">Contents</h2>
        </div>
        <ul>
          {content.map((level1, level1Index) => {
            let subContent
            if (level1.children && level1.children.length > 0) {
              subContent = (
                <ul>
                  {level1.children.map((level2, level2Index) => (
                    <li className="toclevel-2 tocsection-3">
                      <a href={`#${level2.replaceAll(' ', '-').toLowerCase()}`}>
                        <span className="tocnumber">{`${level1Index + 1}.${
                          level2Index + 1
                        }`}</span>
                        <span className="toctext">{level2}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )
            }

            return (
              <li className="toclevel-1 tocsection-1">
                <a href={`#${level1.name.replaceAll(' ', '-').toLowerCase()}`}>
                  <span className="tocnumber">{level1Index + 1}</span>{' '}
                  <span className="toctext">{level1.name}</span>
                </a>
                {subContent ? subContent : null}
              </li>
            )
          })}
        </ul>
      </div>
    </NodeViewWrapper>
  )
}

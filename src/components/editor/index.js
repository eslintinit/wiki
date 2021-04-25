import { useContext } from 'react'
import { EditorContext } from '../../context'
import { EditorContent } from '@tiptap/react'

import Menu from './menus/menu'

export default function Tiptap() {
  const { editor } = useContext(EditorContext)

  return (
    <div>
      <Menu />

      <div style={{ marginTop: 92 }}>
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}

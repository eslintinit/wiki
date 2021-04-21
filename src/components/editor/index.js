import { useEffect, useContext } from 'react'
import { EditorContext } from '../../context'
import { EditorContent, BubbleMenu } from '@tiptap/react'

import FixedMenuBar from './menus/fixed-menu'
import BubbleMenuBar from './menus/bubble-menu'

export default function Tiptap() {
  const { editor } = useContext(EditorContext)

  useEffect(() => {
    if (editor && window.localStorage.getItem('content')) {
      editor.commands.setContent(window.localStorage.getItem('content'))
    }
  }, [editor])

  const addLink = () => {
    const url = window.prompt('URL')

    if (url) {
      editor.chain().focus().toggleLink({ href: url }).run()
    }
  }

  return (
    <div>
      <div id="menu-bar">
        <FixedMenuBar editor={editor} addLink={addLink} />
      </div>

      {editor && (
        <BubbleMenu editor={editor}>
          <BubbleMenuBar editor={editor} addLink={addLink} />
        </BubbleMenu>
      )}

      <EditorContent editor={editor} />
    </div>
  )
}

// <editable-component></editable-component>
// <image-component></image-component>

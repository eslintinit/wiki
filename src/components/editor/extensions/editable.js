import { Node, mergeAttributes } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import Component from '../blocks/editable'

export default Node.create({
  name: 'editableComponent',

  group: 'block',

  content: 'inline*',

  parseHTML() {
    return [
      {
        tag: 'editable-component',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['editable-component', mergeAttributes(HTMLAttributes), 0]
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component)
  },
})

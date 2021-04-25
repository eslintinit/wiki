import { Node, mergeAttributes } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import Component from '../blocks/toc'

export default Node.create({
  name: 'tocComponent',

  group: 'block',

  atom: true,

  addAttributes() {
    return {
      content: [],
    }
  },

  parseHTML() {
    return [
      {
        tag: 'toc',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['toc', mergeAttributes(HTMLAttributes)]
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component)
  },
})

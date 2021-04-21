import { Node, mergeAttributes } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import Component from '../../../components/image-upload-nocaption'

export default Node.create({
  name: 'justImageComponent',

  group: 'block',

  content: 'inline*',

  atom: true,

  addAttributes() {
    return {
      imageUri: {
        default: null,
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'just-image-component',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['just-image-component', mergeAttributes(HTMLAttributes)]
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component)
  },
})

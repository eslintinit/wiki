import { Node, mergeAttributes } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import Component from '../../../components/image-upload'

export default Node.create({
  name: 'imageComponent',

  group: 'block',

  content: 'inline*',

  atom: true,

  addAttributes() {
    return {
      imageUri: {
        default: null,
      },
      caption: {
        default: 'caption...',
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'image-component',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['image-component', mergeAttributes(HTMLAttributes), 0]
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component)
  },
})

import { Node, mergeAttributes } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import Component from '../blocks/image-upload'
// import { setSelection } from 'prosemirror-commands'

export default Node.create({
  name: 'imageComponent',

  group: 'block',

  content: 'inline*',

  atom: true,
  selectable: false,
  draggable: true,
  isolating: true,
  allowGapCursor: false,

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

  addCommands() {
    return {
      deleteImage: (pos) => ({ tr }) => {
        return tr.delete(pos, pos + 1)
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

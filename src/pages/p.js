import { useEffect, useState } from 'react'
import { useEditor } from '@tiptap/react'
import { EditorContent } from '@tiptap/react'
import { defaultExtensions } from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Link from '@tiptap/extension-link'
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import ImageUploadExtension from 'components/editor/extensions/image-upload'
import ImageUploadNoCaptionExtension from 'components/editor/extensions/image-upload-nocaption'
import CounterExtension from 'components/editor/extensions/counter'
import EditableExtension from 'components/editor/extensions/editable'
import TableOfContentExtension from 'components/editor/extensions/toc'
import Image from '@tiptap/extension-image'
import Dropcursor from '@tiptap/extension-dropcursor'
import { Node } from '@tiptap/core'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import Heading from '@tiptap/extension-heading'

// const CustomHeading = Heading.extend({
//   renderHTML({ node, HTMLAttributes }) {
//     const hasLevel = this.options.levels.includes(node.attrs.level)
//     const level = hasLevel
//       ? node.attrs.level
//       : this.options.levels[0]

//     return [`h${level}`, mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
//   },
// })

export const CustomDocument = Node.create({
  name: 'doc',
  topNode: true,
  content: 'heading block+',
})

const CustomTable = Table.extend({
  atom: true,
  selectable: false,
  draggable: false,
  isolating: true,
  allowGapCursor: false,
})

const Page = () => {
  const { id } = useParams()
  const [content, setContent] = useState(null)

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACK_URL}/api/post/slug/${id}`)
      .then((res) => {
        setContent(res.data.content)
      })
  }, [id])

  if (!content) return null

  return <Editor content={content} />
}

const Editor = ({ content }) => {
  const editor = useEditor({
    editable: false,
    extensions: [
      ...defaultExtensions(),
      CustomDocument,
      Link,
      CustomTable,
      TableRow,
      TableOfContentExtension,
      TableHeader,
      TableCell,
      Image,
      Dropcursor,
      CounterExtension,
      ImageUploadExtension,
      ImageUploadNoCaptionExtension,
      EditableExtension,
      Placeholder,
    ],
    content,
  })

  const delay = (ms) => new Promise((res) => setTimeout(res, ms))

  // eslint-disable-next-line
  useEffect(async () => {
    if (content) {
      await delay(2000)
      document.getElementsByTagName('h2').map((i) => {
        return (i.id = i.innerText.replaceAll(' ', '-').toLowerCase())
      })
      document
        .getElementsByTagName('h3')
        .map((i) => (i.id = i.innerText.replaceAll(' ', '-').toLowerCase()))
    }
  }, [content])
  if (!content) return null

  return (
    <div style={{ marginTop: 92 }}>
      <EditorContent editor={editor} />
    </div>
  )
}

export default Page

import { createContext } from 'react'
import { useEditor } from '@tiptap/react'

import { defaultExtensions } from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Document from '@tiptap/extension-document'
import Link from '@tiptap/extension-link'
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'

import ImageUploadExtension from '../components/editor/extensions/image-upload'
import ImageUploadNoCaptionExtension from '../components/editor/extensions/image-upload-nocaption'
import CounterExtension from '../components/editor/extensions/counter'
import EditableExtension from '../components/editor/extensions/editable'

import Image from '@tiptap/extension-image'
import Dropcursor from '@tiptap/extension-dropcursor'

const EditorContext = createContext()

const EditorProvider = ({ children }) => {
  const editor = useEditor({
    autofocus: 'end',
    extensions: [
      ...defaultExtensions(),
      Document,
      Link,
      Table,
      TableRow,
      TableHeader,
      TableCell,
      Image,
      Dropcursor,
      CounterExtension,
      ImageUploadExtension,
      ImageUploadNoCaptionExtension,
      EditableExtension,
      Placeholder.configure({
        showOnlyCurrent: false,
        emptyNodeText: (node) => {
          if (node.type.name === 'title') {
            return 'Give me a name'
          }
          return 'Write something'
        },
      }),
    ],
    content: defaultContent,
    onUpdate() {
      const editorState = this.getHTML()
      window.localStorage.setItem('content', editorState)
    },
  })

  return (
    <EditorContext.Provider
      value={{
        editor,
      }}
    >
      {children}
    </EditorContext.Provider>
  )
}

const defaultContent = `
  <h1>Title</h1>
  <table className="infobox biography vcard">
    <tbody>
      <tr>
        <td colspan=2>
          <just-image-component></just-image-component>
        </td>
      </tr>
      <tr>
        <th scope="row" className="infobox-label">
          key
        </th>
        <td className="infobox-data role">value</td>
      </tr>
      <tr>
        <th scope="row" className="infobox-label">
          key
        </th>
        <td className="infobox-data role">value</td>
      </tr>
    </tbody>
  </table>
  <p></p>
`

export { EditorProvider, EditorContext }

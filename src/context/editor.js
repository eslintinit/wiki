import { createContext, useContext, useEffect, useState } from 'react'
import { FoldersContext } from 'context'
import { useEditor } from '@tiptap/react'

import { defaultExtensions } from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Document from '@tiptap/extension-document'
import History from '@tiptap/extension-history'
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

import { Node } from '@tiptap/core'

export const CustomDocument = Node.create({
  name: 'doc',
  topNode: true,
  content: 'heading block+',
})

const EditorContext = createContext()

// const CustomDocument = Document.expand({
//   content: 'heading block+',
// })

const CustomTable = Table.extend({
  atom: true,
  // content: 'block+',
  selectable: false,
  draggable: false,
  isolating: true,
  allowGapCursor: false,
})

const EditorProvider = ({ children }) => {
  const { folders, changeNote, selectedNote, selectedFolder } = useContext(
    FoldersContext,
  )
  const [currentNote, setCurrentNote] = useState(
    folders
      .find((f) => f.id === selectedFolder)
      .notes.find((n) => n.id === selectedNote),
  )
  const [localSelectedNote, setLocalSelectedNote] = useState(selectedNote)

  useEffect(() => {
    setCurrentNote(
      folders
        .find((f) => f.id === selectedFolder)
        .notes.find((n) => n.id === selectedNote),
    )
  }, [folders, selectedNote, selectedFolder])

  const editor = useEditor({
    autofocus: 'start',
    extensions: [
      ...defaultExtensions(),
      CustomDocument,
      Link,
      CustomTable,
      TableRow,
      TableHeader,
      TableCell,
      Image,
      Dropcursor,
      CounterExtension,
      ImageUploadExtension,
      ImageUploadNoCaptionExtension,
      EditableExtension,
      Placeholder,
      // Placeholder.configure({
      //   // showOnlyCurrent: false,
      //   placeholder: 'empty',
      //   // placeholder: ({ node }) => {
      //   //   console.log(node)
      //   //   if (node.type.name === 'title') {
      //   //     return 'Give me a name'
      //   //   }
      //   //   return 'Write something'
      //   // },
      // }),
    ],
    content: '',
    // content:
    //   window.localStorage.getItem(`note${selectedNote}`) || currentNote.body,
    // content: defaultContent,
    // onUpdate() {
    //   const editorState = this.getHTML()
    //   // console.log('current note')
    //   // console.log(currentNote)
    //   changeNote(selectedNote, editorState)
    //   // window.localStorage.setItem(`note${selectedNote}`, editorState)
    // },
  })

  useEffect(() => {
    if (editor) {
      console.log('update')
      console.log(selectedNote)
      editor.off('update')
      editor.on('update', () => {
        const content = editor.getHTML()
        window.localStorage.setItem(`note${selectedNote}`, content)
      })
    }
  }, [selectedNote, editor])

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(
        window.localStorage.getItem(`note${selectedNote}`) ||
          folders
            .find((f) => f.id === selectedFolder)
            .notes.find((n) => n.id === selectedNote).body,
      )
      editor.commands.focus('start')
    }
  }, [selectedNote, editor])

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
  <p></p>
`

// <table className="infobox biography vcard">
//   <tbody>
//     <tr>
//       <td colspan=2>
//         <just-image-component></just-image-component>
//       </td>
//     </tr>
//     <tr>
//       <th scope="row" className="infobox-label">
//         key
//       </th>
//       <td className="infobox-data role">value</td>
//     </tr>
//     <tr>
//       <th scope="row" className="infobox-label">
//         key
//       </th>
//       <td className="infobox-data role">value</td>
//     </tr>
//   </tbody>
// </table>

export { EditorProvider, EditorContext }

import { createContext, useState, useEffect, useCallback } from 'react'
import { generateId } from 'utils'
import initFolders from './foldersInitData'

const FoldersContext = createContext()

const FoldersProvider = ({ children }) => {
  // console.log(JSON.parse(window.localStorage.getItem('folders')))
  const [folders, setFolders] = useState(
    JSON.parse(window.localStorage.getItem('folders')) || initFolders,
  )
  const [selectedFolder, setSelectedFolder] = useState(initFolders[0].id)
  const [selectedNote, setSelectedNote] = useState(initFolders[0].notes[0].id)
  const [notes, setNotes] = useState(
    folders.find((folder) => folder.id === selectedFolder)
      ? folders.find((folder) => folder.id === selectedFolder).notes
      : [],
  )

  useEffect(() => {
    // alert('selectedNote' + selectedNote)
  }, [selectedNote])

  const addFolder = () => {
    const folderId = generateId()
    const folderName = `Folder${folders.length + 1}`
    const firstNoteId = generateId()
    setFolders([
      ...folders,
      {
        id: folderId,
        name: folderName,
        notes: [
          {
            id: firstNoteId,
            name: 'Untitled',
            body: '',
          },
        ],
      },
    ])
    setSelectedFolder(folderId)
    setSelectedNote(firstNoteId)
  }

  const selectFolder = (folderId) => {
    setSelectedFolder(folderId)
    setSelectedNote(folders.find((f) => f.id === folderId).notes[0].id)
  }

  const deleteFolder = (folderId) => {
    const newFolders = folders.filter((folder) => folder.id !== folderId)

    setSelectedFolder(newFolders[0].id)
    setSelectedNote(newFolders[0].notes[0].id)
    setFolders(newFolders)
  }

  useEffect(() => {
    // when deleting folder select first folder
    // if (folders.findIndex((folder) => folder.id === selectedFolder) === -1) {
    //   setSelectedFolder(folders[0].id)
    //   setSelectedNote(folders[0].notes[0].id)
    // }
  }, [folders, selectedFolder])

  useEffect(() => {
    // !!!
    // setSelectedNote(
    //   folders.find((folder) => folder.id === selectedFolder).notes[0].id,
    // )
  }, [selectedFolder, folders])

  useEffect(() => {
    setNotes(folders.find((f) => f.id === selectedFolder).notes)
  }, [folders, selectedFolder])

  useEffect(() => {
    // setCurrentNote(
    //   folders
    //     .find((f) => f.id === selectedFolder)
    //     .notes.find((n) => n.id === selectedNote),
    // )
  }, [selectedFolder, selectedNote, folders])

  useEffect(() => {
    window.localStorage.setItem('folders', JSON.stringify(folders))
  }, [folders])

  const addNote = () => {
    const newNoteId = generateId()

    const newFolders = folders.map((f) => {
      if (f.id === selectedFolder) {
        const newNote = {
          id: newNoteId,
          name: 'Untitled',
          body: '',
        }

        // console.log([...notes, newNote])
        return {
          ...f,
          notes: [...notes, newNote],
        }
      }
      return f
    })

    setFolders(newFolders)
    setSelectedNote(newNoteId)
  }

  const deleteNote = (noteId) => {
    const newFolders = folders.map((f) => {
      if (f.id === selectedFolder)
        return {
          ...f,
          notes: notes.filter((n) => n.id !== noteId),
        }
      return f
    })
    // const newNotes = folders.find(f => f.id === selectedFolder).notes.filter((n) => n.id !== noteId)

    // set new folders item
    setFolders(newFolders)

    // set first note as selected
    setSelectedNote(newFolders[0].notes[0].id)
  }

  const changeNote = (noteId, content) => {
    console.log('selectedNote')
    console.log(noteId)
    console.log(selectedNote)
    // window.localStorage.setItem(`note${selectedNote}`, content)
    // const updatedFolders = folders.map((folder) => {
    //   if (folder.notes.findIndex((n) => n.id == noteId) > -1) {
    //     return {
    //       ...folder,
    //       notes: folder.notes.map((note) => {
    //         if (note.id === noteId) {
    //           return {
    //             ...note,
    //             body: content,
    //           }
    //         } else {
    //           return note
    //         }
    //       }),
    //     }
    //   } else {
    //     return folder
    //   }
    // })
    // setFolders(updatedFolders)
  }

  const publishPage = () => {
    // alert('govno')
  }

  const changeFolder = (folderId, values) => {
    const newFolders = folders.map((f) => {
      if (f.id === folderId) {
        return {
          ...f,
          ...values,
        }
      } else {
        return f
      }
    })
    setFolders(newFolders)
  }

  return (
    <FoldersContext.Provider
      value={{
        folders,
        setFolders,
        selectedFolder,
        selectFolder,
        setSelectedFolder,
        selectedNote,
        setSelectedNote,
        addFolder,
        deleteFolder,
        addNote,
        deleteNote,
        changeNote,
        notes,
        setNotes,
        publishPage,
        changeFolder,
      }}
    >
      {children}
    </FoldersContext.Provider>
  )
}

export { FoldersProvider, FoldersContext }

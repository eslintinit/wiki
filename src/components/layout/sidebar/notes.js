import { useContext, useEffect, useState } from 'react'
import { FoldersContext, AppContext } from 'context'
import AlertDialog from 'components/alert-dialog'

const Notes = () => {
  const {
    folders,
    selectedNote,
    setSelectedNote,
    selectedFolder,
    addNote,
    deleteNote,
    notes,
    setCurrentNote,
  } = useContext(FoldersContext)
  const { setShowSidebar } = useContext(AppContext)

  // useEffect(() => {
  //   alert('update folders')
  // }, [folders])

  // deleteNote(note.id)
  const [showAlertDialog, setShowAlertDialog] = useState(false)
  const [selectedNoteId, setSelectedNoteId] = useState(false)

  const getName = (note) => {
    const ls = window.localStorage.getItem(`note${note.id}`)
    if (ls) {
      return ls.substring(4, ls.indexOf('</h1>'))
    } else {
      return note.name
    }
  }

  return (
    <div className="leftbar-2 _2si-copy">
      <div className="open2-copy">
        <div className="div-block-827 nou sep2">
          <div className="text-block-199 allcaps">Pages</div>
          <img
            src="https://uploads-ssl.webflow.com/603d12d60cce95ce28fa8a69/603d12d60cce950e30fa8c1a_Icon_-_Arrow%402x.png"
            width={8}
            alt=""
            className="image-285"
          />
          <div className="link-block bl0k blj w-inline-block pointer">
            <img
              src="https://uploads-ssl.webflow.com/603d12d60cce95ce28fa8a69/603d12d60cce95ba2afa8d48_plus.svg"
              loading="lazy"
              width={19}
              alt=""
              className="image-312-copy"
              onClick={() => {
                addNote()
                setShowSidebar(false)
              }}
            />
          </div>
        </div>
        {notes.map((note) => (
          <div
            className={`avablock-2 blj w-inline-block ${
              selectedNote === note.id ? 'w--current' : 'pointer'
            }`}
            onClick={() => {
              setSelectedNote(note.id)
              setShowSidebar(false)
              // setCurrentNote(
              //   folders
              //     .find((f) => f.id === selectedFolder)
              //     .notes.find((n) => n.id === note.id),
              // )
            }}
            key={note.id}
            style={{ paddingRight: 10 }}
          >
            <div className="folder div-block-886 flex flex-row items-center justify-between">
              <div className="text-block-209">{getName(note)}</div>
              <img
                src="https://uploads-ssl.webflow.com/603d12d60cce95ce28fa8a69/603d12d60cce95ba2afa8d48_plus.svg"
                loading="lazy"
                width={21}
                height={21}
                alt=""
                className="image-312-copy pointer folder-del"
                onClick={(e) => {
                  e.stopPropagation()
                  // setShowAlertDialog(true)
                  // setSelectedNoteId(note.id)
                  deleteNote(note.id)
                }}
                style={{ transform: 'rotate(45deg)' }}
              />
              {/*
               */}
              {/*
              <div className="_3dot">
                <img
                  src="https://uploads-ssl.webflow.com/603d12d60cce95ce28fa8a69/603d12d60cce95503afa8cd6_more-vertical%20(1).svg"
                  loading="lazy"
                  width={22}
                  alt=""
                  className="image-339"
                />
              </div>
*/}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notes

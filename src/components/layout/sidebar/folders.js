import { useContext, useState } from 'react'
import { FoldersContext } from 'context'
import AlertDialog from 'components/alert-dialog'
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react'
import Menu from 'components/menu'

const Folders = () => {
  const {
    folders,
    selectedFolder,
    selectFolder,
    addFolder,
    deleteFolder,
    changeFolder,
  } = useContext(FoldersContext)
  const [showAlertDialog, setShowAlertDialog] = useState(false)
  const [selectedFolderId, setSelectedFolderId] = useState(false)

  return (
    <div className="leftbar-2 _1si-copy" style={{ display: 'flex' }}>
      <div className="open2-copy">
        <div className="div-block-827 nou sep2">
          <div className="text-block-199 allcaps">Folders</div>
          <div className="link-block bl0k blj w-inline-block pointer">
            <img
              src="https://uploads-ssl.webflow.com/603d12d60cce95ce28fa8a69/603d12d60cce95ba2afa8d48_plus.svg"
              loading="lazy"
              width={19}
              alt=""
              className="image-312-copy"
              onClick={() => addFolder()}
            />
            {/*
             */}
          </div>
        </div>
        {folders.map((folder) => (
          <Folder
            folder={folder}
            key={folder.id}
            selectedFolder={selectedFolder}
            setShowAlertDialog={setShowAlertDialog}
            setSelectedFolderId={setSelectedFolderId}
            selectFolder={selectFolder}
            changeFolder={changeFolder}
            deleteFolder={deleteFolder}
          />
        ))}
      </div>
    </div>
  )
}

const Folder = ({
  folder,
  selectedFolder,
  setShowAlertDialog,
  setSelectedFolderId,
  selectFolder,
  changeFolder,
  deleteFolder,
}) => {
  return (
    <div
      className={`avablock-2 w-inline-block ${
        selectedFolder === folder.id ? 'w--current' : 'pointer'
      }`}
      onClick={() => selectFolder(folder.id)}
      key={folder.id}
      style={{ paddingRight: 10, zIndex: 10 }}
    >
      <div className="folder div-block-886 flex flex-row items-center justify-between">
        <Editable
          defaultValue={folder.name}
          className="text-block-209"
          onSubmit={(newName) => changeFolder(folder.id, { name: newName })}
        >
          <EditablePreview />
          <EditableInput />
        </Editable>
        {/*
        <Menu />
        */}
        <img
          src="https://uploads-ssl.webflow.com/603d12d60cce95ce28fa8a69/603d12d60cce95ba2afa8d48_plus.svg"
          loading="lazy"
          width={21}
          height={21}
          alt=""
          className="image-312-copy pointer folder-del"
          onClick={(e) => {
            e.stopPropagation()
            deleteFolder(folder.id)
            // setShowAlertDialog(true)
            // setSelectedFolderId(folder.id)
          }}
          style={{ transform: 'rotate(45deg)' }}
        />
        {/*
         */}
      </div>
    </div>
  )
}

export default Folders

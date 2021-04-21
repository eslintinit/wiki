import { useState } from 'react'
import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'

const fileToDataUri = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (event) => {
      resolve(event.target.result)
    }
    reader.readAsDataURL(file)
  })

const App = (props) => {
  const [dataUri, setDataUri] = useState(props.node.attrs.imageUri || '')
  const [showFullscreen, setShowFullscreen] = useState(false)

  const onChange = (file) => {
    if (!file) {
      setDataUri('')
      return
    }

    fileToDataUri(file).then((dataUri) => {
      props.updateAttributes({
        imageUri: dataUri,
      })
      setDataUri(dataUri)
    })
  }

  return (
    <NodeViewWrapper className="image">
      {showFullscreen && (
        <div
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            top: 0,
            left: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'black',
            zIndex: 120,
          }}
          onClick={() => setShowFullscreen(false)}
        >
          <img
            src={dataUri}
            alt="smth"
            // style={{
            //   height: '100%',
            //   width: 'auto',
            // }}
            onClick={() => setShowFullscreen(!showFullscreen)}
            style={{
              cursor: 'pointer',
              height: '100%',
              width: 'auto',
            }}
          />
        </div>
      )}
      {dataUri ? (
        <div className="image-wrapper">
          <img
            width="200"
            height="auto"
            src={dataUri}
            alt="avatar"
            onClick={() => setShowFullscreen(!showFullscreen)}
            style={{ cursor: 'pointer' }}
          />
          {/*
            yoyo
            <NodeViewContent className="image-caption" />
            */}
        </div>
      ) : (
        <div
          style={{
            width: '100%',
            height: 200,
            border: '1px solid black',
            // display: 'flex',
            // flexDirection: 'column',
            // alignItems: 'center',
          }}
        >
          <input
            type="file"
            onChange={(event) => onChange(event.target.files[0] || null)}
          />
        </div>
      )}
    </NodeViewWrapper>
  )
}

export default App

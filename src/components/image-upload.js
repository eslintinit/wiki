import S3 from 'react-aws-s3'
import { useState } from 'react'
import { NodeViewWrapper } from '@tiptap/react'

const config = {
  bucketName: 'wikieditor',
  region: 'eu-central-1',
  accessKeyId: 'AKIA2G5WKYQMU3LVI4S4',
  secretAccessKey: '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',
}

const ReactS3Client = new S3(config)

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
  const [loading, setLoading] = useState(false)
  console.log(props.getPos())
  console.log(props)

  const deleteNode = () => {
    alert('delete block (word in progress)')
    // props.editor.commands.deleteRange(8, 20)
    // console.log('yo')
  }

  const onChange = (file) => {
    if (!file) {
      setDataUri('')
      return
    }

    setLoading(true)
    ReactS3Client.uploadFile(file)
      .then((data) => {
        setLoading(false)

        props.updateAttributes({
          imageUri: data.location,
        })
      })
      .catch((err) => console.error(err))

    fileToDataUri(file).then((dataUri) => {
      props.updateAttributes({
        imageUri: dataUri,
      })
      setDataUri(dataUri)
    })
  }

  return (
    <NodeViewWrapper className="image">
      <div className="thumb tright">
        <div className="thumbinner" style={{ width: '222px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              // alignItems: 'center',
              width: '100%',
            }}
          >
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
                  src="/del.png"
                  className="del-icon del-icon-large"
                  onClick={() => setShowFullscreen(false)}
                  style={{
                    filter: 'invert(100%)',
                  }}
                />
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
                {/*
                <img src="/del.png" className="del-icon" onClick={deleteNode} />
                */}
                <img
                  width="200"
                  height="auto"
                  src={dataUri}
                  alt="avatar"
                  onClick={() => setShowFullscreen(!showFullscreen)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            ) : loading ? (
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
                loading...
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
          </div>
          {/*
          <NodeViewContent as="div" className="thumbcaption" />
          */}
          <div className="thumbcaption">
            <input
              placeholder="caption..."
              value={props.node.attrs.caption || ''}
              onChange={(e) =>
                props.updateAttributes({
                  caption: e.target.value,
                })
              }
              style={{
                border: 'none',
                background: 'transparent',
                width: '100%',
              }}
            />
          </div>
        </div>
      </div>
    </NodeViewWrapper>
  )
}

export default App

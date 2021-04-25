import { useState } from 'react'
import { NodeViewWrapper } from '@tiptap/react'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import S3 from 'react-aws-s3'

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
        setDataUri(data.location)
      })
      .catch((err) => console.error(err))

    fileToDataUri(file).then((dataUri) => {
      // props.updateAttributes({
      //   imageUri: dataUri,
      // })
      setDataUri(dataUri)
    })
  }

  const deleteNode = () => {
    console.log(props)
    const str = props.editor.getHTML()
    props.editor.commands.setContent(
      str.split('<table>')[0] + str.split('</table>')[1],
    )
    // props.editor.commands.deleteImage(props.getPos())
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
          className="fullscreen-mode"
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
          {props.editor.options.editable && (
            <div className="img-actions flex flex-row">
              <div className="pointer hover-ef">
                <EditIcon
                  color="white"
                  fontSize="small"
                  onClick={() => {
                    setDataUri(null)
                    props.updateAttributes({
                      imageUri: null,
                    })
                  }}
                />
              </div>
              <div className="pointer hover-ef">
                <DeleteIcon onClick={deleteNode} fontSize="small" />
              </div>
              {/*
                <img src="/del.png" className="del-icon" onClick={deleteNode} />
*/}
            </div>
          )}
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
            paddingTop: 4,
            paddingLeft: 4,
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

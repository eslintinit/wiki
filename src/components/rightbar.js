import { useContext } from 'react'
import { EditorContext } from '../context'

export default function Rightbar({ setShowRightbar }) {
  const { editor } = useContext(EditorContext)

  return (
    <div
      className="rightbar"
      data-ix="new-interaction-18"
      style={{ display: 'flex', position: 'fixed' }}
    >
      <div className="div-block-1043">
        <div className="kerou-3">
          <img
            src="https://uploads-ssl.webflow.com/603d12d60cce95ce28fa8a69/603d12d60cce9541a9fa8c51_file-plus-2.svg"
            width={26}
            alt=""
            className="image-336"
          />
          <div className="text-block-248 eg">New</div>
        </div>
        <div className="kerou-3">
          <img
            src="https://uploads-ssl.webflow.com/603d12d60cce95ce28fa8a69/603d12d60cce95cff3fa8cf0_external-link.svg"
            width={26}
            alt=""
            className="image-336"
          />
          <div className="text-block-248">Share</div>
        </div>
        <div
          className="kerou-3"
          data-ix="new-interaction-19"
          onClick={() => setShowRightbar(false)}
          style={{ cursor: 'pointer' }}
        >
          <img
            src="https://uploads-ssl.webflow.com/603d12d60cce95ce28fa8a69/603d12d60cce9521effa8cec_icon-x.svg"
            width={36}
            alt=""
            className="image-336"
          />
          <div className="text-block-248">Close</div>
        </div>
      </div>
      <div className="open2-copy">
        <div className="div-block-1042 nou">
          <div className="text-block-250 allcaps">Add</div>
          <img
            src="https://uploads-ssl.webflow.com/603d12d60cce95ce28fa8a69/603d12d60cce950e30fa8c1a_Icon_-_Arrow%402x.png"
            width={8}
            alt=""
            className="image-341 hfn"
          />
        </div>
        <div
          className="avablock-3"
          data-ix="new-interaction-21"
          style={{ cursor: 'pointer' }}
          onClick={() => editor.commands.insertContent('<h1>Title</h1>')}
        >
          <div className="div-block-878 up">
            <div>SB</div>
          </div>
          <div className="div-block-886">
            <div className="text-block-251">Heading 1</div>
            <div className="div-block-887">
              <div className="text-block-249">Page title</div>
              <img
                src="https://uploads-ssl.webflow.com/603d12d60cce95ce28fa8a69/603d12d60cce95d49cfa8c69_edit-2.svg"
                width={15}
                alt=""
                className="image-286"
              />
            </div>
          </div>
        </div>
        <div
          className="avablock-3"
          data-ix="new-interaction-21"
          style={{ cursor: 'pointer' }}
          onClick={() => editor.commands.insertContent('<h2>Heading</h2>')}
        >
          <div className="div-block-878 up">
            <div>SB</div>
          </div>
          <div className="div-block-886">
            <div className="text-block-251">Heading 2</div>
            <div className="div-block-887">
              <div className="text-block-249">Big Section</div>
              <img
                src="https://uploads-ssl.webflow.com/603d12d60cce95ce28fa8a69/603d12d60cce95d49cfa8c69_edit-2.svg"
                width={15}
                alt=""
                className="image-286"
              />
            </div>
          </div>
        </div>
        <div
          className="avablock-3"
          data-ix="new-interaction-21"
          style={{ cursor: 'pointer' }}
          onClick={() => editor.commands.insertContent('<h3>Subheading</h3>')}
        >
          <div className="div-block-878 up _2">
            <div>WE</div>
          </div>
          <div className="div-block-886">
            <div className="text-block-251">Heading 3</div>
            <div className="div-block-887">
              <div className="text-block-249">Smaller Section</div>
              <img
                src="https://uploads-ssl.webflow.com/603d12d60cce95ce28fa8a69/603d12d60cce955ef0fa8c5d_eye.svg"
                width={15}
                alt=""
                className="image-286"
              />
            </div>
          </div>
        </div>
        <div
          className="avablock-3"
          data-ix="new-interaction-21"
          style={{ cursor: 'pointer' }}
          onClick={() =>
            editor.commands.insertContent('<image-component></image-component>')
          }
        >
          <div className="div-block-878 up _2">
            <div>WE</div>
          </div>
          <div className="div-block-886">
            <div className="text-block-251">Info Box</div>
            <div className="div-block-887">
              <div className="text-block-249">Parameters table block</div>
              <img
                src="https://uploads-ssl.webflow.com/603d12d60cce95ce28fa8a69/603d12d60cce955ef0fa8c5d_eye.svg"
                width={15}
                alt=""
                className="image-286"
              />
            </div>
          </div>
        </div>
        <div
          className="avablock-3"
          data-ix="new-interaction-21"
          style={{ cursor: 'pointer' }}
          onClick={() =>
            editor.commands.insertContent('<image-component></image-component>')
          }
        >
          <div className="div-block-878 up _2">
            <div>WE</div>
          </div>
          <div className="div-block-886">
            <div className="text-block-251">Image</div>
            <div className="div-block-887">
              <div className="text-block-249">Image block with caption</div>
              <img
                src="https://uploads-ssl.webflow.com/603d12d60cce95ce28fa8a69/603d12d60cce955ef0fa8c5d_eye.svg"
                width={15}
                alt=""
                className="image-286"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

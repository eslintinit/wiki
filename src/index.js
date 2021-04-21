import React from 'react'
import ReactDOM from 'react-dom'

import Editor from './components/editor'
import Layout from './components/layout'

import { EditorProvider } from './context'

import './css/index.css'
import './css/wiki.css'
import './css/index.css'
import './css/infobox.css'
import './css/images.css'
import './css/webflow.css'

ReactDOM.render(
  <React.StrictMode>
    <EditorProvider>
      <Layout>
        <Editor />
      </Layout>
    </EditorProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// <ImageUpload />

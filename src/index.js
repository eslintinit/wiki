import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

import { AppProvider, FoldersProvider, EditorProvider } from './context'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

import './css/index.css'
import './css/wiki.css'
import './css/index.css'
import './css/infobox.css'
import './css/images.css'
import './css/webflow.css'
import './css/menu.css'

const theme = extendTheme({
  // components: {
  // Editable: {
  // }
  // }
})

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <FoldersProvider>
        <EditorProvider>
          <App />
        </EditorProvider>
      </FoldersProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
// <ChakraProvider theme={theme}>
// </ChakraProvider>

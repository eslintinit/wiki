import React from 'react'
import ReactDOM from 'react-dom'
import { AppProvider, FoldersProvider, EditorProvider } from './context'
import App from './app'
import Page from './pages/p'
import Layout from './components/layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './css/index.css'
import './css/wiki.css'
import './css/infobox.css'
import './css/webflow.css'
import './css/menu.css'
// import './css/images.css'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <FoldersProvider>
        <EditorProvider>
          <Router>
            <Switch>
              <Route path="/p/:id">
                <Layout hideLayout>
                  <Page />
                </Layout>
              </Route>
              <Route path="/">
                <App />
              </Route>
            </Switch>
          </Router>
        </EditorProvider>
      </FoldersProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

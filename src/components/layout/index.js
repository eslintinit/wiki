import { useContext } from 'react'
import { AppContext } from 'context'

import Header from './header'
import Sidebar from './sidebar'
import Rightbar from './rightbar'

export default function Layout({ children }) {
  const {
    showSidebar,
    showRightbar,
    setShowSidebar,
    setShowRightbar,
  } = useContext(AppContext)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {showSidebar && <Sidebar />}
      <div className="div-block-861-copy-copy">
        <Header
          showSidebar={showSidebar}
          showRightbar={showRightbar}
          setShowRightbar={setShowRightbar}
          setShowSidebar={setShowSidebar}
        />

        {showRightbar && <Rightbar setShowRightbar={setShowRightbar} />}
        <div id="content" className="mw-body" role="main">
          <div
            className="mw-body-content"
            style={{
              width: showSidebar ? '100%' : '70vw',
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

// {showSidebar && (
//   <div className="sidebar-container">
//     <Sidebar />
//   </div>
// )}

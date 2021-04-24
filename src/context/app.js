import { createContext, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [showRightbar, setShowRightbar] = useState(false)

  return (
    <AppContext.Provider
      value={{
        showSidebar,
        showRightbar,
        setShowSidebar,
        setShowRightbar,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }

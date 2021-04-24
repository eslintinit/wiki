import useMagicLink from 'use-magic-link'
import Editor from './components/editor'
import Layout from './components/layout'

export default function Home() {
  return (
    <Layout>
      <Editor />
    </Layout>
  )

  // create the hook
  const auth = useMagicLink('pk_test_C8116636617BC5D2')

  function loginNow() {
    const email = prompt('Enter your email')
    auth.login(email)
  }

  function getContent() {
    // Show a loading screen until we detect the login-state
    if (auth.loading || auth.loggingIn || auth.loggingOut) {
      return '...'
    }

    // Show this, if logged in
    if (auth.loggedIn) {
      return (
        <Layout>
          <Editor />
        </Layout>
      )
      // return (
      //   <div>
      //     You are logged-in.
      //     <br/>
      //     <button onClick={() => auth.logout()}>Logout</button>
      //   </div>
      // )
    }

    // Show this, if not logged-in
    return (
      <div
        className="flex justify-center items-center"
        style={{ width: '100vw', height: '100vh' }}
      >
        <button className="btn" onClick={loginNow}>
          Login now
        </button>
      </div>
    )
  }

  return <div>{getContent()}</div>
}

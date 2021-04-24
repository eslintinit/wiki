import EditorMenu from 'components/editor/menus/menu'

export default function Header({
  showSidebar,
  setShowSidebar,
  showRightbar,
  setShowRightbar,
}) {
  return (
    <div
      className="navbarof indiv dark-copy"
      style={
        showSidebar
          ? {
              position: 'fixed',
              // width: 'calc(100vw - 418px)',
              left: '418px',
            }
          : {
              position: 'fixed',
            }
      }
    >
      <div className="div-block-949 mak">
        <div className="div-block-1044">
          <a
            href="#"
            className="kerou-3 w-inline-block"
            data-ix="new-interaction-36"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <img
              src="https://uploads-ssl.webflow.com/603d12d60cce95ce28fa8a69/606a25fff0491660272ff825_menu.svg"
              width={36}
              alt=""
              className="image-336"
            />
          </a>
        </div>
        {/*
        <EditorMenu />
        */}
        {/*
        <div
          className="kerou-3 hfn"
          data-ix="new-interaction-17"
          onClick={() => setShowRightbar(!showRightbar)}
          style={{ cursor: 'pointer' }}
        >
          <img
            src="https://uploads-ssl.webflow.com/603d12d60cce95ce28fa8a69/60733889f38e757ce4b94296_more-vertical.svg"
            width={36}
            alt=""
            className="image-336"
          />
        </div>
        */}
      </div>
    </div>
  )
}

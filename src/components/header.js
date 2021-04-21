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
              width: 'calc(100vw - 418px)',
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
          {/*
          <div className="div-block-1041">
            <a href="#" className="kerou-2 cfd-copy njo w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/603d12d60cce95ce28fa8a69/603d12d60cce9580adfa8d16_menu%20(1).svg"
                width={36}
                alt=""
                className="image-336"
              />
            </a>
            <a
              href="/"
              aria-current="page"
              className="tabdi-copy-copy w--current"
            >
              Write
            </a>
            <a
              href="#"
              className="tabdi-copy-copy"
              data-ix="new-interaction-37"
            >
              Preview
            </a>
          </div>
          */}
          <div className="form-block-copy-copy hfn4 w-form">
            <form id="email-form" name="email-form" data-name="Email Form">
              <input
                type="text"
                className="text-field-2 sh hfna w-input"
                maxLength={256}
                name="field-2"
                data-name="Field 2"
                data-ix="new-interaction-32"
                placeholder="Search"
                id="field-2"
              />
              <img
                src="https://uploads-ssl.webflow.com/603d12d60cce95ce28fa8a69/603d12d60cce95724efa8cf1_icon-search.svg"
                loading="lazy"
                width={19}
                alt=""
                className="image-343"
              />
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  )
}

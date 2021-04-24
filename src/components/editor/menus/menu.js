import { useContext, useState, useEffect } from 'react'
import { EditorContext, AppContext } from 'context'
import axios from 'axios'

export default function Menu() {
  const { editor } = useContext(EditorContext)
  const { showSidebar } = useContext(AppContext)
  const [formatOpened, setFormatOpened] = useState(false)
  const [styleOpened, setStyleOpened] = useState(false)
  const [listsOpened, setListsOpened] = useState(false)
  const [insertOpened, setInsertOpened] = useState(false)

  useEffect(() => {
    if (formatOpened) {
      setStyleOpened(false)
      setListsOpened(false)
      setInsertOpened(false)
    }
  }, [formatOpened])

  useEffect(() => {
    if (styleOpened) {
      setFormatOpened(false)
      setListsOpened(false)
      setInsertOpened(false)
    }
  }, [styleOpened])

  useEffect(() => {
    if (listsOpened) {
      setFormatOpened(false)
      setStyleOpened(false)
      setInsertOpened(false)
    }
  }, [listsOpened])

  useEffect(() => {
    if (insertOpened) {
      setFormatOpened(false)
      setStyleOpened(false)
      setListsOpened(false)
    }
  }, [insertOpened])

  if (!editor) return null

  return (
    <div
      className="oo-ui-toolbar-bar"
      style={
        showSidebar
          ? {
              border: '1px solid #eaecf0',
              width: 'calc(100% - 76px)',
              marginLeft: '76px',
            }
          : {
              border: '1px solid #eaecf0',
            }
      }
    >
      <div className="oo-ui-toolbar-actions">
        <div className="oo-ui-toolbar oo-ui-toolbar-position-top ve-ui-toolbar ve-ui-dir-inline-ltr ve-ui-dir-block-ltr ve-ui-targetToolbar">
          <div className="oo-ui-toolbar-bar">
            <div className="oo-ui-toolbar-tools">
              <div
                className="ve-ui-toolbar-group-save oo-ui-widget oo-ui-toolGroup oo-ui-barToolGroup oo-ui-widget-enabled"
                aria-disabled="false"
              >
                <div className="oo-ui-toolGroup-tools oo-ui-barToolGroup-tools oo-ui-toolGroup-enabled-tools">
                  <span
                    className="oo-ui-widget oo-ui-flaggedElement-primary oo-ui-flaggedElement-progressive oo-ui-tool oo-ui-tool-name-showSave oo-ui-tool-with-label oo-ui-widget-enabled"
                    aria-disabled="false"
                  >
                    <a
                      tabIndex={0}
                      aria-disabled="false"
                      className="oo-ui-tool-link ve-ui-toolbar-saveButton"
                      role="button"
                      title="Publish changes… ^⌥S"
                      data-old-accesskey="s"
                      onClick={() => {
                        axios
                          .get('https://api-publish-page.vercel.app/api/hello')
                          .then((res) => console.log(res))
                      }}
                    >
                      <span
                        className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                        aria-disabled="false"
                      />
                      <span className="oo-ui-iconElement-icon oo-ui-iconElement-noIcon oo-ui-image-invert" />
                      <span className="oo-ui-tool-title">Publish page</span>
                      <span className="oo-ui-tool-accel" dir="ltr" lang="en">
                        ^⌥S
                      </span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div style={{ clear: 'both' }} />
          </div>
          <div className="oo-ui-toolbar-popups">
            <div
              className="oo-ui-widget oo-ui-widget-enabled oo-ui-labelElement oo-ui-floatableElement-floatable oo-ui-popupWidget-anchored oo-ui-popupWidget-anchored-undefined oo-ui-popupWidget oo-ui-element-hidden oo-ui-popupTool-popup"
              aria-disabled="false"
              aria-label="Help"
            >
              <div className="oo-ui-popupWidget-popup">
                <div className="oo-ui-popupWidget-head">
                  <span className="oo-ui-iconElement-icon oo-ui-iconElement-noIcon" />
                  <span className="oo-ui-labelElement-label">Help</span>
                  <span
                    className="oo-ui-widget oo-ui-widget-enabled oo-ui-buttonElement oo-ui-buttonElement-frameless oo-ui-iconElement oo-ui-buttonWidget"
                    aria-disabled="false"
                  >
                    <a
                      className="oo-ui-buttonElement-button"
                      role="button"
                      tabIndex={0}
                      aria-disabled="false"
                      rel="nofollow"
                    >
                      <span className="oo-ui-iconElement-icon oo-ui-icon-close" />
                      <span className="oo-ui-labelElement-label oo-ui-labelElement-invisible">
                        Close
                      </span>
                      <span className="oo-ui-indicatorElement-indicator oo-ui-indicatorElement-noIndicator" />
                    </a>
                  </span>
                </div>
                <div className="oo-ui-clippableElement-clippable oo-ui-popupWidget-body">
                  <div className="ve-ui-mwHelpPopupTool-items">
                    <div className="ve-ui-mwHelpPopupTool-item">
                      If you encounter any technical issues as you edit, please
                      report them.
                    </div>
                    <div className="ve-ui-mwHelpPopupTool-item">
                      <span
                        className="oo-ui-widget oo-ui-widget-enabled oo-ui-buttonElement oo-ui-buttonElement-frameless oo-ui-iconElement oo-ui-labelElement oo-ui-buttonWidget"
                        aria-disabled="false"
                      >
                        <a
                          className="oo-ui-buttonElement-button"
                          role="button"
                          title="Guide for how to use the editor"
                          tabIndex={0}
                          aria-disabled="false"
                          href="/wiki/Wikipedia:VisualEditor/User_guide"
                          target="_blank"
                          rel="nofollow noopener"
                        >
                          <span className="oo-ui-iconElement-icon oo-ui-icon-help" />
                          <span className="oo-ui-labelElement-label">
                            Read the user guide
                          </span>
                          <span className="oo-ui-indicatorElement-indicator oo-ui-indicatorElement-noIndicator" />
                        </a>
                      </span>
                      <span
                        className="oo-ui-widget oo-ui-widget-enabled oo-ui-buttonElement oo-ui-buttonElement-frameless oo-ui-iconElement oo-ui-labelElement oo-ui-buttonWidget"
                        aria-disabled="false"
                      >
                        <a
                          className="oo-ui-buttonElement-button"
                          role="button"
                          tabIndex={0}
                          aria-disabled="false"
                          rel="nofollow"
                        >
                          <span className="oo-ui-iconElement-icon oo-ui-icon-keyboard" />
                          <span className="oo-ui-labelElement-label">
                            Keyboard shortcuts
                          </span>
                          <span className="oo-ui-indicatorElement-indicator oo-ui-indicatorElement-noIndicator" />
                        </a>
                      </span>
                      <span
                        className="oo-ui-widget oo-ui-widget-enabled oo-ui-buttonElement oo-ui-buttonElement-frameless oo-ui-iconElement oo-ui-labelElement oo-ui-buttonWidget"
                        aria-disabled="false"
                      >
                        <a
                          className="oo-ui-buttonElement-button"
                          role="button"
                          tabIndex={0}
                          aria-disabled="false"
                          rel="nofollow"
                        >
                          <span className="oo-ui-iconElement-icon oo-ui-icon-speechBubble" />
                          <span className="oo-ui-labelElement-label">
                            Leave feedback about this software
                          </span>
                          <span className="oo-ui-indicatorElement-indicator oo-ui-indicatorElement-noIndicator" />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="oo-ui-popupWidget-anchor" />
            </div>
            <div
              className="oo-ui-widget oo-ui-widget-enabled oo-ui-labelElement oo-ui-floatableElement-floatable oo-ui-popupWidget-anchored oo-ui-popupWidget-anchored-undefined oo-ui-popupWidget oo-ui-element-hidden oo-ui-popupTool-popup"
              aria-disabled="false"
            >
              <div className="oo-ui-popupWidget-popup">
                <div className="oo-ui-popupWidget-head">
                  <span className="oo-ui-iconElement-icon oo-ui-iconElement-noIcon" />
                  <span className="oo-ui-labelElement-label">Edit notices</span>
                  <span
                    className="oo-ui-widget oo-ui-widget-enabled oo-ui-buttonElement oo-ui-buttonElement-frameless oo-ui-iconElement oo-ui-buttonWidget"
                    aria-disabled="false"
                  >
                    <a
                      className="oo-ui-buttonElement-button"
                      role="button"
                      tabIndex={0}
                      aria-disabled="false"
                      rel="nofollow"
                    >
                      <span className="oo-ui-iconElement-icon oo-ui-icon-close" />
                      <span className="oo-ui-labelElement-label oo-ui-labelElement-invisible">
                        Close
                      </span>
                      <span className="oo-ui-indicatorElement-indicator oo-ui-indicatorElement-noIndicator" />
                    </a>
                  </span>
                </div>
                <div className="oo-ui-clippableElement-clippable oo-ui-popupWidget-body" />
              </div>
              <div className="oo-ui-popupWidget-anchor" />
            </div>
            <div className="oo-ui-toolGroup-tools oo-ui-toolGroup-enabled-tools oo-ui-clippableElement-clippable oo-ui-floatableElement-floatable oo-ui-popupToolGroup-tools oo-ui-listToolGroup-tools">
              <span
                className="oo-ui-widget oo-ui-widget-enabled oo-ui-tool oo-ui-tool-name-more-fewer oo-ui-element-hidden oo-ui-iconElement oo-ui-tool-with-icon"
                aria-disabled="false"
              >
                <a
                  tabIndex={0}
                  aria-disabled="false"
                  className="oo-ui-tool-link"
                  role="button"
                >
                  <span
                    className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                    aria-disabled="false"
                  />
                  <span className="oo-ui-iconElement-icon oo-ui-icon-expand" />
                  <span className="oo-ui-tool-title">More</span>
                  <span className="oo-ui-tool-accel" dir="ltr" lang="en" />
                </a>
              </span>
            </div>
            <div className="oo-ui-toolGroup-tools oo-ui-toolGroup-enabled-tools oo-ui-clippableElement-clippable oo-ui-floatableElement-floatable oo-ui-popupToolGroup-tools oo-ui-listToolGroup-tools">
              <span
                className="oo-ui-widget oo-ui-widget-enabled oo-ui-tool oo-ui-tool-name-more-fewer oo-ui-element-hidden oo-ui-iconElement oo-ui-tool-with-icon"
                aria-disabled="false"
              >
                <a
                  tabIndex={0}
                  aria-disabled="false"
                  className="oo-ui-tool-link"
                  role="button"
                >
                  <span
                    className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                    aria-disabled="false"
                  />
                  <span className="oo-ui-iconElement-icon oo-ui-icon-expand" />
                  <span className="oo-ui-tool-title">More</span>
                  <span className="oo-ui-tool-accel" dir="ltr" lang="en" />
                </a>
              </span>
            </div>
            <div
              className="oo-ui-widget oo-ui-widget-enabled oo-ui-labelElement oo-ui-floatableElement-floatable oo-ui-popupWidget-anchored oo-ui-popupWidget-anchored-undefined oo-ui-popupWidget oo-ui-element-hidden oo-ui-popupTool-popup"
              aria-disabled="false"
              aria-label="Help"
            >
              <div className="oo-ui-popupWidget-popup">
                <div className="oo-ui-popupWidget-head">
                  <span className="oo-ui-iconElement-icon oo-ui-iconElement-noIcon" />
                  <span className="oo-ui-labelElement-label">Help</span>
                  <span
                    className="oo-ui-widget oo-ui-widget-enabled oo-ui-buttonElement oo-ui-buttonElement-frameless oo-ui-iconElement oo-ui-buttonWidget"
                    aria-disabled="false"
                  >
                    <a
                      className="oo-ui-buttonElement-button"
                      role="button"
                      tabIndex={0}
                      aria-disabled="false"
                      rel="nofollow"
                    >
                      <span className="oo-ui-iconElement-icon oo-ui-icon-close" />
                      <span className="oo-ui-labelElement-label oo-ui-labelElement-invisible">
                        Close
                      </span>
                      <span className="oo-ui-indicatorElement-indicator oo-ui-indicatorElement-noIndicator" />
                    </a>
                  </span>
                </div>
                <div className="oo-ui-clippableElement-clippable oo-ui-popupWidget-body">
                  <div className="ve-ui-mwHelpPopupTool-items">
                    <div className="ve-ui-mwHelpPopupTool-item">
                      If you encounter any technical issues as you edit, please
                      report them.
                    </div>
                    <div className="ve-ui-mwHelpPopupTool-item">
                      <span
                        className="oo-ui-widget oo-ui-widget-enabled oo-ui-buttonElement oo-ui-buttonElement-frameless oo-ui-iconElement oo-ui-labelElement oo-ui-buttonWidget"
                        aria-disabled="false"
                      >
                        <a
                          className="oo-ui-buttonElement-button"
                          role="button"
                          title="Guide for how to use the editor"
                          tabIndex={0}
                          aria-disabled="false"
                          href="/wiki/Wikipedia:VisualEditor/User_guide"
                          target="_blank"
                          rel="nofollow noopener"
                        >
                          <span className="oo-ui-iconElement-icon oo-ui-icon-help" />
                          <span className="oo-ui-labelElement-label">
                            Read the user guide
                          </span>
                          <span className="oo-ui-indicatorElement-indicator oo-ui-indicatorElement-noIndicator" />
                        </a>
                      </span>
                      <span
                        className="oo-ui-widget oo-ui-widget-enabled oo-ui-buttonElement oo-ui-buttonElement-frameless oo-ui-iconElement oo-ui-labelElement oo-ui-buttonWidget"
                        aria-disabled="false"
                      >
                        <a
                          className="oo-ui-buttonElement-button"
                          role="button"
                          tabIndex={0}
                          aria-disabled="false"
                          rel="nofollow"
                        >
                          <span className="oo-ui-iconElement-icon oo-ui-icon-keyboard" />
                          <span className="oo-ui-labelElement-label">
                            Keyboard shortcuts
                          </span>
                          <span className="oo-ui-indicatorElement-indicator oo-ui-indicatorElement-noIndicator" />
                        </a>
                      </span>
                      <span
                        className="oo-ui-widget oo-ui-widget-enabled oo-ui-buttonElement oo-ui-buttonElement-frameless oo-ui-iconElement oo-ui-labelElement oo-ui-buttonWidget"
                        aria-disabled="false"
                      >
                        <a
                          className="oo-ui-buttonElement-button"
                          role="button"
                          tabIndex={0}
                          aria-disabled="false"
                          rel="nofollow"
                        >
                          <span className="oo-ui-iconElement-icon oo-ui-icon-speechBubble" />
                          <span className="oo-ui-labelElement-label">
                            Leave feedback about this software
                          </span>
                          <span className="oo-ui-indicatorElement-indicator oo-ui-indicatorElement-noIndicator" />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="oo-ui-popupWidget-anchor" />
            </div>
            <div
              className="oo-ui-widget oo-ui-widget-enabled oo-ui-labelElement oo-ui-floatableElement-floatable oo-ui-popupWidget-anchored oo-ui-popupWidget oo-ui-popupTool-popup oo-ui-popupWidget-anchored-top oo-ui-element-hidden"
              aria-disabled="false"
              style={{}}
            >
              <div
                className="oo-ui-popupWidget-popup"
                style={{ width: '380px', height: 'auto' }}
              >
                <div className="oo-ui-popupWidget-head">
                  <span className="oo-ui-iconElement-icon oo-ui-iconElement-noIcon" />
                  <span className="oo-ui-labelElement-label">1 notice</span>
                  <span
                    className="oo-ui-widget oo-ui-widget-enabled oo-ui-buttonElement oo-ui-buttonElement-frameless oo-ui-iconElement oo-ui-buttonWidget"
                    aria-disabled="false"
                  >
                    <a
                      className="oo-ui-buttonElement-button"
                      role="button"
                      tabIndex={0}
                      aria-disabled="false"
                      rel="nofollow"
                    >
                      <span className="oo-ui-iconElement-icon oo-ui-icon-close" />
                      <span className="oo-ui-labelElement-label oo-ui-labelElement-invisible">
                        Close
                      </span>
                      <span className="oo-ui-indicatorElement-indicator oo-ui-indicatorElement-noIndicator" />
                    </a>
                  </span>
                </div>
                <div
                  className="oo-ui-clippableElement-clippable oo-ui-popupWidget-body"
                  style={{}}
                >
                  <div className="ve-ui-mwNoticesPopupTool-items">
                    <div className="ve-ui-mwNoticesPopupTool-item">
                      <div className="mw-parser-output">
                        <div className="mw-editintro">
                          <div className="editnotice_BLP_editintro">
                            <table
                              className="plainlinks fmbox fmbox-editnotice"
                              role="presentation"
                              style={{ backgroundColor: '#fee' }}
                            >
                              <tbody>
                                <tr>
                                  <td
                                    className="mbox-text"
                                    style={{ fontSize: '100%' }}
                                  >
                                    <div
                                      style={{
                                        fontWeight: 'bold',
                                        fontSize: '120%',
                                      }}
                                    >
                                      Notice about sources
                                    </div>
                                    <p>
                                      This article must adhere to the{' '}
                                      <b>
                                        <a
                                          href="/wiki/Wikipedia:Biographies_of_living_persons"
                                          title="Wikipedia:Biographies of living persons"
                                          rel="noopener"
                                          target="_blank"
                                        >
                                          biographies of living persons policy
                                        </a>
                                      </b>
                                      , even if it is not a biography, because
                                      it contains material about living persons.
                                      Take extra care to use high-quality
                                      sources. Material about living persons
                                      should not be added when the only sourcing
                                      is{' '}
                                      <a
                                        href="/wiki/Tabloid_journalism"
                                        title="Tabloid journalism"
                                        rel="noopener"
                                        target="_blank"
                                      >
                                        tabloid journalism
                                      </a>
                                      ; see{' '}
                                      <a
                                        href="/wiki/Wikipedia:Biographies_of_living_persons#Reliable_sources"
                                        title="Wikipedia:Biographies of living persons"
                                        rel="noopener"
                                        target="_blank"
                                      >
                                        more information on sources
                                      </a>
                                      . Never use self-published sources about a
                                      living person unless written or published
                                      by the subject; see{' '}
                                      <a
                                        href="/wiki/Wikipedia:BLPSPS"
                                        className="mw-redirect"
                                        title="Wikipedia:BLPSPS"
                                        rel="noopener"
                                        target="_blank"
                                      >
                                        WP:BLPSPS
                                      </a>{' '}
                                      and{' '}
                                      <a
                                        href="/wiki/Wikipedia:BLPSELFPUB"
                                        className="mw-redirect"
                                        title="Wikipedia:BLPSELFPUB"
                                        rel="noopener"
                                        target="_blank"
                                      >
                                        WP:BLPSELFPUB
                                      </a>
                                      .
                                    </p>
                                    Contentious material about living persons
                                    that is unsourced or{' '}
                                    <a
                                      href="/wiki/Wikipedia:Verifiability"
                                      title="Wikipedia:Verifiability"
                                      rel="noopener"
                                      target="_blank"
                                    >
                                      poorly sourced
                                    </a>{' '}
                                    <b>must be removed immediately</b> from the
                                    article and its talk page, especially if
                                    potentially{' '}
                                    <a
                                      href="/wiki/Wikipedia:Libel"
                                      title="Wikipedia:Libel"
                                      rel="noopener"
                                      target="_blank"
                                    >
                                      libellous
                                    </a>
                                    . If such material is repeatedly inserted,
                                    or if you have other concerns, please report
                                    the issue to{' '}
                                    <a
                                      href="/wiki/Wikipedia:Biographies_of_living_persons/Noticeboard"
                                      title="Wikipedia:Biographies of living persons/Noticeboard"
                                      rel="noopener"
                                      target="_blank"
                                    >
                                      this noticeboard
                                    </a>
                                    . If you are connected to one of the
                                    subjects of this article and need help, see{' '}
                                    <a
                                      href="/wiki/Wikipedia:Biographies_of_living_persons/Help"
                                      title="Wikipedia:Biographies of living persons/Help"
                                      rel="noopener"
                                      target="_blank"
                                    >
                                      this page
                                    </a>
                                    .
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="oo-ui-popupWidget-anchor"
                style={{ left: '191px' }}
              />
            </div>
            <div
              className="oo-ui-toolGroup-tools oo-ui-toolGroup-enabled-tools oo-ui-clippableElement-clippable oo-ui-floatableElement-floatable oo-ui-popupToolGroup-tools oo-ui-listToolGroup-tools"
              style={{}}
            >
              <span
                className="oo-ui-widget oo-ui-iconElement oo-ui-tool-with-icon oo-ui-tool oo-ui-tool-name-meta oo-ui-widget-enabled"
                aria-disabled="false"
              >
                <a
                  tabIndex={0}
                  aria-disabled="false"
                  className="oo-ui-tool-link"
                  role="button"
                >
                  <span
                    className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                    aria-disabled="false"
                  />
                  <span className="oo-ui-iconElement-icon oo-ui-icon-window" />
                  <span className="oo-ui-tool-title">Options</span>
                  <span className="oo-ui-tool-accel" dir="ltr" lang="en" />
                </a>
              </span>
              <span
                className="oo-ui-widget oo-ui-iconElement oo-ui-tool-with-icon oo-ui-tool oo-ui-tool-name-categories oo-ui-widget-enabled"
                aria-disabled="false"
              >
                <a
                  tabIndex={0}
                  aria-disabled="false"
                  className="oo-ui-tool-link"
                  role="button"
                >
                  <span
                    className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                    aria-disabled="false"
                  />
                  <span className="oo-ui-iconElement-icon oo-ui-icon-tag" />
                  <span className="oo-ui-tool-title">Categories</span>
                  <span className="oo-ui-tool-accel" dir="ltr" lang="en" />
                </a>
              </span>
              <span
                className="oo-ui-widget oo-ui-iconElement oo-ui-tool-with-icon oo-ui-tool oo-ui-tool-name-settings oo-ui-widget-enabled"
                aria-disabled="false"
              >
                <a
                  tabIndex={0}
                  aria-disabled="false"
                  className="oo-ui-tool-link"
                  role="button"
                >
                  <span
                    className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                    aria-disabled="false"
                  />
                  <span className="oo-ui-iconElement-icon oo-ui-icon-pageSettings" />
                  <span className="oo-ui-tool-title">Page settings</span>
                  <span className="oo-ui-tool-accel" dir="ltr" lang="en" />
                </a>
              </span>
              <span
                className="oo-ui-widget oo-ui-iconElement oo-ui-tool-with-icon oo-ui-tool oo-ui-tool-name-advancedSettings oo-ui-widget-enabled"
                aria-disabled="false"
              >
                <a
                  tabIndex={0}
                  aria-disabled="false"
                  className="oo-ui-tool-link"
                  role="button"
                >
                  <span
                    className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                    aria-disabled="false"
                  />
                  <span className="oo-ui-iconElement-icon oo-ui-icon-settings" />
                  <span className="oo-ui-tool-title">Advanced settings</span>
                  <span className="oo-ui-tool-accel" dir="ltr" lang="en" />
                </a>
              </span>
              <span
                className="oo-ui-widget oo-ui-iconElement oo-ui-tool-with-icon oo-ui-tool oo-ui-tool-name-languages oo-ui-widget-enabled"
                aria-disabled="false"
              >
                <a
                  tabIndex={0}
                  aria-disabled="false"
                  className="oo-ui-tool-link"
                  role="button"
                >
                  <span
                    className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                    aria-disabled="false"
                  />
                  <span className="oo-ui-iconElement-icon oo-ui-icon-textLanguage" />
                  <span className="oo-ui-tool-title">Languages</span>
                  <span className="oo-ui-tool-accel" dir="ltr" lang="en" />
                </a>
              </span>
              <span
                className="oo-ui-widget oo-ui-iconElement oo-ui-tool-with-icon oo-ui-tool oo-ui-tool-name-templatesUsed oo-ui-widget-enabled"
                aria-disabled="false"
              >
                <a
                  tabIndex={0}
                  aria-disabled="false"
                  className="oo-ui-tool-link"
                  role="button"
                >
                  <span
                    className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                    aria-disabled="false"
                  />
                  <span className="oo-ui-iconElement-icon oo-ui-icon-puzzle" />
                  <span className="oo-ui-tool-title">Templates used</span>
                  <span className="oo-ui-tool-accel" dir="ltr" lang="en" />
                </a>
              </span>
              <span
                className="oo-ui-widget oo-ui-iconElement oo-ui-tool-with-icon oo-ui-tool oo-ui-tool-name-codeMirror oo-ui-widget-disabled"
                aria-disabled="true"
              >
                <a
                  tabIndex={-1}
                  aria-disabled="true"
                  className="oo-ui-tool-link"
                  role="button"
                >
                  <span
                    className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                    aria-disabled="false"
                  />
                  <span className="oo-ui-iconElement-icon oo-ui-icon-highlight" />
                  <span className="oo-ui-tool-title">Syntax highlighting</span>
                  <span className="oo-ui-tool-accel" dir="ltr" lang="en" />
                </a>
              </span>
              <span
                className="oo-ui-widget oo-ui-iconElement oo-ui-tool-with-icon oo-ui-tool oo-ui-tool-name-changeDirectionality oo-ui-widget-enabled"
                aria-disabled="false"
              >
                <a
                  tabIndex={0}
                  aria-disabled="false"
                  className="oo-ui-tool-link"
                  role="button"
                >
                  <span
                    className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                    aria-disabled="false"
                  />
                  <span className="oo-ui-iconElement-icon oo-ui-icon-textDirRTL" />
                  <span className="oo-ui-tool-title">
                    View as right-to-left
                  </span>
                  <span className="oo-ui-tool-accel" dir="ltr" lang="en">
                    ⌘⇧X
                  </span>
                </a>
              </span>
              <span
                className="oo-ui-widget oo-ui-iconElement oo-ui-tool-with-icon oo-ui-tool oo-ui-tool-name-findAndReplace oo-ui-widget-enabled"
                aria-disabled="false"
              >
                <a
                  tabIndex={0}
                  aria-disabled="false"
                  className="oo-ui-tool-link"
                  role="button"
                >
                  <span
                    className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                    aria-disabled="false"
                  />
                  <span className="oo-ui-iconElement-icon oo-ui-icon-articleSearch" />
                  <span className="oo-ui-tool-title">Find and replace</span>
                  <span className="oo-ui-tool-accel" dir="ltr" lang="en">
                    ⌘F
                  </span>
                </a>
              </span>
              <span
                className="oo-ui-widget oo-ui-widget-enabled oo-ui-tool oo-ui-tool-name-more-fewer oo-ui-element-hidden oo-ui-iconElement oo-ui-tool-with-icon"
                aria-disabled="false"
              >
                <a
                  tabIndex={0}
                  aria-disabled="false"
                  className="oo-ui-tool-link"
                  role="button"
                >
                  <span
                    className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                    aria-disabled="false"
                  />
                  <span className="oo-ui-iconElement-icon oo-ui-icon-expand" />
                  <span className="oo-ui-tool-title">More</span>
                  <span className="oo-ui-tool-accel" dir="ltr" lang="en" />
                </a>
              </span>
            </div>
            <div
              className="oo-ui-toolGroup-tools oo-ui-toolGroup-enabled-tools oo-ui-clippableElement-clippable oo-ui-floatableElement-floatable oo-ui-popupToolGroup-tools oo-ui-listToolGroup-tools"
              style={{}}
            >
              <span
                className="oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-tool-with-icon oo-ui-tool oo-ui-tool-name-editModeVisual oo-ui-tool-active"
                aria-disabled="false"
              >
                <a
                  tabIndex={0}
                  aria-disabled="false"
                  className="oo-ui-tool-link"
                  role="button"
                  title="Visual editing"
                >
                  <span
                    className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                    aria-disabled="false"
                  />
                  <span className="oo-ui-iconElement-icon oo-ui-icon-eye oo-ui-image-progressive" />
                  <span className="oo-ui-tool-title">Visual editing</span>
                  <span className="oo-ui-tool-accel" dir="ltr" lang="en" />
                </a>
              </span>
              <span
                className="oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-tool-with-icon oo-ui-tool oo-ui-tool-name-editModeSource"
                aria-disabled="false"
              >
                <a
                  tabIndex={0}
                  aria-disabled="false"
                  className="oo-ui-tool-link"
                  role="button"
                  title="Source editing"
                >
                  <span
                    className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                    aria-disabled="false"
                  />
                  <span className="oo-ui-iconElement-icon oo-ui-icon-wikiText" />
                  <span className="oo-ui-tool-title">Source editing</span>
                  <span className="oo-ui-tool-accel" dir="ltr" lang="en" />
                </a>
              </span>
              <span
                className="oo-ui-widget oo-ui-widget-enabled oo-ui-tool oo-ui-tool-name-more-fewer oo-ui-element-hidden oo-ui-iconElement oo-ui-tool-with-icon"
                aria-disabled="false"
              >
                <a
                  tabIndex={0}
                  aria-disabled="false"
                  className="oo-ui-tool-link"
                  role="button"
                >
                  <span
                    className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                    aria-disabled="false"
                  />
                  <span className="oo-ui-iconElement-icon oo-ui-icon-expand" />
                  <span className="oo-ui-tool-title">More</span>
                  <span className="oo-ui-tool-accel" dir="ltr" lang="en" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="oo-ui-toolbar-tools">
        <History />
        <Format
          opened={formatOpened}
          toggle={() => setFormatOpened(!formatOpened)}
          editor={editor}
        />
        <Style
          opened={styleOpened}
          toggle={() => setStyleOpened(!styleOpened)}
        />
        <Link />
        <Lists
          opened={listsOpened}
          toggle={() => setListsOpened(!listsOpened)}
        />
        <Insert
          opened={insertOpened}
          toggle={() => setInsertOpened(!insertOpened)}
        />

        {editor.can().addRowBefore() && (
          <div
            className={`ve-ui-toolbar-group-insert oo-ui-widget oo-ui-toolGroup oo-ui-indicatorElement oo-ui-labelElement oo-ui-popupToolGroup oo-ui-listToolGroup oo-ui-widget-enabled`}
            aria-disabled="false"
            title="Insert"
            onClick={() => editor.chain().focus().addRowBefore().run()}
          >
            <span
              tabIndex={0}
              aria-disabled="false"
              className="oo-ui-popupToolGroup-handle"
              role="button"
              aria-expanded="false"
              style={{ padding: '11px 12px' }}
            >
              <span className="oo-ui-labelElement-label">Add Row Below</span>
            </span>
          </div>
        )}
        {editor.can().addRowAfter() && (
          <div
            className={`ve-ui-toolbar-group-insert oo-ui-widget oo-ui-toolGroup oo-ui-indicatorElement oo-ui-labelElement oo-ui-popupToolGroup oo-ui-listToolGroup oo-ui-widget-enabled`}
            aria-disabled="false"
            title="Insert"
            onClick={() => editor.chain().focus().addRowAfter().run()}
          >
            <span
              tabIndex={0}
              aria-disabled="false"
              className="oo-ui-popupToolGroup-handle"
              role="button"
              aria-expanded="false"
              style={{ padding: '11px 12px' }}
            >
              <span className="oo-ui-labelElement-label">Add Row After</span>
            </span>
          </div>
        )}
        {editor.can().deleteRow() && (
          <div
            className={`ve-ui-toolbar-group-insert oo-ui-widget oo-ui-toolGroup oo-ui-indicatorElement oo-ui-labelElement oo-ui-popupToolGroup oo-ui-listToolGroup oo-ui-widget-enabled`}
            aria-disabled="false"
            title="Insert"
            onClick={() => editor.chain().focus().deleteRow().run()}
          >
            <span
              tabIndex={0}
              aria-disabled="false"
              className="oo-ui-popupToolGroup-handle"
              role="button"
              aria-expanded="false"
              style={{ padding: '11px 12px' }}
            >
              <span className="oo-ui-labelElement-label">Delete Row</span>
            </span>
          </div>
        )}
      </div>
      <div className="oo-ui-toolbar-popups">
        <div className="oo-ui-toolGroup-tools oo-ui-toolGroup-disabled-tools oo-ui-clippableElement-clippable oo-ui-floatableElement-floatable oo-ui-popupToolGroup-tools oo-ui-menuToolGroup-tools" />
        <div className="oo-ui-toolGroup-tools oo-ui-toolGroup-disabled-tools oo-ui-clippableElement-clippable oo-ui-floatableElement-floatable oo-ui-popupToolGroup-tools oo-ui-listToolGroup-tools">
          <span
            className="oo-ui-widget oo-ui-widget-enabled oo-ui-tool oo-ui-tool-name-more-fewer oo-ui-iconElement oo-ui-tool-with-icon"
            aria-disabled="false"
          >
            <a
              tabIndex={0}
              aria-disabled="false"
              className="oo-ui-tool-link"
              role="button"
            >
              <span
                className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                aria-disabled="false"
              />
              <span className="oo-ui-iconElement-icon oo-ui-icon-expand" />
              <span className="oo-ui-tool-title">More</span>
              <span className="oo-ui-tool-accel" dir="ltr" lang="en" />
            </a>
          </span>
        </div>
        <div className="oo-ui-toolGroup-tools oo-ui-toolGroup-disabled-tools oo-ui-clippableElement-clippable oo-ui-floatableElement-floatable oo-ui-popupToolGroup-tools oo-ui-listToolGroup-tools">
          <span
            className="oo-ui-widget oo-ui-widget-enabled oo-ui-tool oo-ui-tool-name-more-fewer oo-ui-element-hidden oo-ui-iconElement oo-ui-tool-with-icon"
            aria-disabled="false"
          >
            <a
              tabIndex={0}
              aria-disabled="false"
              className="oo-ui-tool-link"
              role="button"
            >
              <span
                className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                aria-disabled="false"
              />
              <span className="oo-ui-iconElement-icon oo-ui-icon-expand" />
              <span className="oo-ui-tool-title">More</span>
              <span className="oo-ui-tool-accel" dir="ltr" lang="en" />
            </a>
          </span>
        </div>
        <div className="oo-ui-toolGroup-tools oo-ui-toolGroup-disabled-tools oo-ui-clippableElement-clippable oo-ui-floatableElement-floatable oo-ui-popupToolGroup-tools oo-ui-listToolGroup-tools">
          <span
            className="oo-ui-widget oo-ui-widget-enabled oo-ui-tool oo-ui-tool-name-more-fewer oo-ui-iconElement oo-ui-tool-with-icon"
            aria-disabled="false"
          >
            <a
              tabIndex={0}
              aria-disabled="false"
              className="oo-ui-tool-link"
              role="button"
            >
              <span
                className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                aria-disabled="false"
              />
              <span className="oo-ui-iconElement-icon oo-ui-icon-expand" />
              <span className="oo-ui-tool-title">More</span>
              <span className="oo-ui-tool-accel" dir="ltr" lang="en" />
            </a>
          </span>
        </div>
        <div
          className={`oo-ui-toolGroup-tools oo-ui-clippableElement-clippable oo-ui-floatableElement-floatable oo-ui-popupToolGroup-tools oo-ui-menuToolGroup-tools oo-ui-toolGroup-enabled-tools  ${
            formatOpened ? 'oo-ui-popupToolGroup-active-tools' : ''
          }`}
          style={{ marginLeft: 88 }}
        >
          {/*
          <span
            className={`oo-ui-widget oo-ui-tool oo-ui-tool-name-heading1 oo-ui-widget-enabled ${
              editor.isActive('heading', { level: 1 })
                ? 'oo-ui-tool-active'
                : ''
            }`}
            aria-disabled="false"
            onClick={() => {
              editor.chain().focus().toggleHeading({ level: 1 }).run()
              setFormatOpened(false)
            }}
          >
            <a
              tabIndex={0}
              aria-disabled="false"
              className="oo-ui-tool-link"
              role="button"
            >
              <span
                className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                aria-disabled="false"
              />
              <span className="oo-ui-iconElement-icon oo-ui-iconElement-noIcon" />
              <span className="oo-ui-tool-title">Page title</span>
              <span className="oo-ui-tool-accel" dir="ltr" lang="en">
                ^1
              </span>
            </a>
          </span>
          */}
          <span
            className={`oo-ui-widget oo-ui-tool oo-ui-tool-name-heading2 oo-ui-widget-enabled ${
              editor.isActive('heading', { level: 2 })
                ? 'oo-ui-tool-active'
                : ''
            }`}
            aria-disabled="false"
            onClick={() => {
              editor.chain().focus().toggleHeading({ level: 2 }).run()
              setFormatOpened(false)
            }}
          >
            <a
              tabIndex={0}
              aria-disabled="false"
              className="oo-ui-tool-link"
              role="button"
            >
              <span
                className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                aria-disabled="false"
              />
              <span className="oo-ui-iconElement-icon oo-ui-iconElement-noIcon" />
              <span className="oo-ui-tool-title">Heading</span>
              <span className="oo-ui-tool-accel" dir="ltr" lang="en">
                ^2
              </span>
            </a>
          </span>
          <span
            className={`oo-ui-widget oo-ui-tool oo-ui-tool-name-heading3 oo-ui-widget-enabled ${
              editor.isActive('heading', { level: 3 })
                ? 'oo-ui-tool-active'
                : ''
            }`}
            aria-disabled="false"
            onClick={() => {
              editor.chain().focus().toggleHeading({ level: 3 }).run()
              setFormatOpened(false)
            }}
          >
            <a
              tabIndex={0}
              aria-disabled="false"
              className="oo-ui-tool-link"
              role="button"
            >
              <span
                className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                aria-disabled="false"
              />
              <span className="oo-ui-iconElement-icon oo-ui-iconElement-noIcon" />
              <span className="oo-ui-tool-title">Sub-heading</span>
              <span className="oo-ui-tool-accel" dir="ltr" lang="en">
                ^3
              </span>
            </a>
          </span>
          {/*
          <span
            className={`oo-ui-widget oo-ui-tool oo-ui-tool-name-heading4 oo-ui-widget-enabled ${ACTIV} ? 'oo-ui-tool-active' : ''`}
            aria-disabled="false"
          >
            <a
              tabIndex={0}
              aria-disabled="false"
              className="oo-ui-tool-link"
              role="button"
            >
              <span
                className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                aria-disabled="false"
              />
              <span className="oo-ui-iconElement-icon oo-ui-iconElement-noIcon" />
              <span className="oo-ui-tool-title">Sub-heading 2</span>
              <span className="oo-ui-tool-accel" dir="ltr" lang="en">
                ^4
              </span>
            </a>
          </span>
          */}
          <span
            className={`oo-ui-widget oo-ui-tool oo-ui-tool-name-paragraph oo-ui-widget-enabled ${
              editor.isActive('paragraph') ? ' oo-ui-tool-active' : ''
            }`}
            aria-disabled="false"
          >
            <a
              tabIndex={0}
              aria-disabled="false"
              className="oo-ui-tool-link"
              role="button"
              onClick={() => {
                editor.chain().focus().setParagraph().run()
                setFormatOpened(false)
              }}
            >
              <span
                className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                aria-disabled="false"
              />
              <span className="oo-ui-iconElement-icon oo-ui-iconElement-noIcon oo-ui-image-progressive" />
              <span className="oo-ui-tool-title">Paragraph</span>
              <span className="oo-ui-tool-accel" dir="ltr" lang="en">
                ^0
              </span>
            </a>
          </span>
          <span
            className={`oo-ui-widget oo-ui-tool oo-ui-tool-name-blockquote oo-ui-widget-enabled ${
              editor.isActive('blockquote') ? 'oo-ui-tool-active' : ''
            }`}
            aria-disabled="false"
            onClick={() => {
              editor.chain().focus().toggleBlockquote().run()
              setFormatOpened(false)
            }}
          >
            <a
              tabIndex={0}
              aria-disabled="false"
              className="oo-ui-tool-link"
              role="button"
            >
              <span
                className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                aria-disabled="false"
              />
              <span className="oo-ui-iconElement-icon oo-ui-iconElement-noIcon" />
              <span className="oo-ui-tool-title">Block quote</span>
              <span className="oo-ui-tool-accel" dir="ltr" lang="en">
                ^8
              </span>
            </a>
          </span>
        </div>
        <div
          className={`oo-ui-toolGroup-tools oo-ui-clippableElement-clippable oo-ui-floatableElement-floatable oo-ui-popupToolGroup-tools oo-ui-menuToolGroup-tools oo-ui-toolGroup-enabled-tools  ${
            styleOpened ? 'oo-ui-popupToolGroup-active-tools' : ''
          }`}
          style={{ marginLeft: 228 }}
        >
          <span
            className={`oo-ui-widget oo-ui-iconElement oo-ui-tool-with-icon oo-ui-tool oo-ui-tool-name-bold oo-ui-widget-enabled ${
              editor.isActive('bold') ? 'oo-ui-tool-active' : ''
            }`}
            aria-disabled="false"
            onClick={() => {
              editor.chain().focus().toggleBold().run()
              setStyleOpened(false)
            }}
          >
            <a
              tabIndex={0}
              aria-disabled="false"
              className="oo-ui-tool-link"
              role="button"
            >
              <span
                className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                aria-disabled="false"
              />
              <span className="oo-ui-iconElement-icon oo-ui-icon-bold" />
              <span className="oo-ui-tool-title">Bold</span>
              <span className="oo-ui-tool-accel" dir="ltr" lang="en">
                ⌘B
              </span>
            </a>
          </span>
          <span
            className={`oo-ui-widget oo-ui-iconElement oo-ui-tool-with-icon oo-ui-tool oo-ui-tool-name-italic oo-ui-widget-enabled ${
              editor.isActive('italic') ? 'oo-ui-tool-active' : ''
            }`}
            aria-disabled="false"
            onClick={() => {
              editor.chain().focus().toggleItalic().run()
              setStyleOpened(false)
            }}
          >
            <a
              tabIndex={0}
              aria-disabled="false"
              className="oo-ui-tool-link"
              role="button"
            >
              <span
                className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                aria-disabled="false"
              />
              <span className="oo-ui-iconElement-icon oo-ui-icon-italic" />
              <span className="oo-ui-tool-title">Italic</span>
              <span className="oo-ui-tool-accel" dir="ltr" lang="en">
                ⌘I
              </span>
            </a>
          </span>
          <span
            className={`oo-ui-widget oo-ui-iconElement oo-ui-tool-with-icon oo-ui-tool oo-ui-tool-name-strikethrough oo-ui-widget-enabled ${
              editor.isActive('strike') ? 'oo-ui-tool-active' : ''
            }`}
            aria-disabled="false"
            onClick={() => {
              editor.chain().focus().toggleStrike().run()
              setStyleOpened(false)
            }}
          >
            <a
              tabIndex={0}
              aria-disabled="false"
              className="oo-ui-tool-link"
              role="button"
            >
              <span
                className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                aria-disabled="false"
              />
              <span className="oo-ui-iconElement-icon oo-ui-icon-strikethrough" />
              <span className="oo-ui-tool-title">Strikethrough</span>
              <span className="oo-ui-tool-accel" dir="ltr" lang="en">
                ⌘⇧5
              </span>
            </a>
          </span>
          {/*
          <span
            className={`oo-ui-widget oo-ui-iconElement oo-ui-tool-with-icon oo-ui-tool oo-ui-tool-name-underline oo-ui-widget-enabled ${ACTIV} ? 'oo-ui-tool-active' : ''`}
            aria-disabled="false"
          >
            <a
              tabIndex={0}
              aria-disabled="false"
              className="oo-ui-tool-link"
              role="button"
            >
              <span
                className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                aria-disabled="false"
              />
              <span className="oo-ui-iconElement-icon oo-ui-icon-underline" />
              <span className="oo-ui-tool-title">Underline</span>
              <span className="oo-ui-tool-accel" dir="ltr" lang="en">
                ⌘U
              </span>
            </a>
          </span>
          */}

          <span
            className={`oo-ui-widget oo-ui-iconElement oo-ui-tool-with-icon oo-ui-tool oo-ui-tool-name-strikethrough oo-ui-widget-enabled ${
              editor.isActive('code') ? 'oo-ui-tool-active' : ''
            }`}
            aria-disabled="false"
            onClick={() => {
              editor.chain().focus().toggleCode().run()
              setStyleOpened(false)
            }}
          >
            <a
              tabIndex={0}
              aria-disabled="false"
              className="oo-ui-tool-link"
              role="button"
            >
              <span
                className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                aria-disabled="false"
              />
              <span className="oo-ui-iconElement-icon oo-ui-icon-code" />
              <span className="oo-ui-tool-title">Code</span>
              <span className="oo-ui-tool-accel" dir="ltr" lang="en">
                ⌘⇧6
              </span>
            </a>
          </span>
        </div>
        <div
          className={`oo-ui-toolGroup-tools oo-ui-clippableElement-clippable oo-ui-floatableElement-floatable oo-ui-popupToolGroup-tools oo-ui-listToolGroup-tools oo-ui-toolGroup-enabled-tools ${
            listsOpened ? 'oo-ui-popupToolGroup-active-tools' : ''
          }
            `}
          style={{ marginLeft: 335 }}
        >
          <span
            className={`oo-ui-widget oo-ui-iconElement oo-ui-tool-with-icon oo-ui-tool oo-ui-tool-name-bullet oo-ui-widget-enabled ${
              editor.isActive('bulletList') ? 'oo-ui-tool-active' : ''
            }`}
            aria-disabled="false"
            onClick={() => {
              editor.chain().focus().toggleBulletList().run()
              setListsOpened(false)
            }}
          >
            <a
              tabIndex={0}
              aria-disabled="false"
              className="oo-ui-tool-link"
              role="button"
            >
              <span
                className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                aria-disabled="false"
              />
              <span className="oo-ui-iconElement-icon oo-ui-icon-listBullet" />
              <span className="oo-ui-tool-title">Bullet list</span>
              <span className="oo-ui-tool-accel" dir="ltr" lang="en" />
            </a>
          </span>
          <span
            className={`oo-ui-widget oo-ui-iconElement oo-ui-tool-with-icon oo-ui-tool oo-ui-tool-name-number oo-ui-widget-enabled ${
              editor.isActive('orderedList') ? 'oo-ui-tool-active' : ''
            }`}
            aria-disabled="false"
            onClick={() => {
              editor.chain().focus().toggleOrderedList().run()
              setListsOpened(false)
            }}
          >
            <a
              tabIndex={0}
              aria-disabled="false"
              className="oo-ui-tool-link"
              role="button"
            >
              <span
                className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                aria-disabled="false"
              />
              <span className="oo-ui-iconElement-icon oo-ui-icon-listNumbered" />
              <span className="oo-ui-tool-title">Numbered list</span>
              <span className="oo-ui-tool-accel" dir="ltr" lang="en" />
            </a>
          </span>
        </div>
        <div
          className={`oo-ui-toolGroup-tools oo-ui-clippableElement-clippable oo-ui-floatableElement-floatable oo-ui-popupToolGroup-tools oo-ui-listToolGroup-tools oo-ui-toolGroup-enabled-tools ${
            insertOpened ? 'oo-ui-popupToolGroup-active-tools' : ''
          }`}
          style={{ marginLeft: 397 }}
        >
          <span
            className="oo-ui-widget oo-ui-iconElement oo-ui-tool-with-icon oo-ui-tool oo-ui-tool-name-insertTable oo-ui-widget-enabled"
            aria-disabled="false"
            onClick={() => {
              console.log(editor.getHTML())

              const str = editor.getHTML()
              const tableContent = `
                <table className="infobox biography vcard">
                  <tbody>
                    <tr>
                      <td colspan=2>
                        <just-image-component></just-image-component>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="infobox-label">
                        key
                      </th>
                      <td className="infobox-data role">value</td>
                    </tr>
                    <tr>
                      <th scope="row" className="infobox-label">
                        key
                      </th>
                      <td className="infobox-data role">value</td>
                    </tr>
                  </tbody>
                </table>
            `

              editor.commands.setContent(
                str.split('</h1>')[0] +
                  '</h1>' +
                  tableContent +
                  str.split('</h1>')[1],
              )
              setInsertOpened(false)
            }}
          >
            <a
              tabIndex={0}
              aria-disabled="false"
              className="oo-ui-tool-link"
              role="button"
            >
              <span
                className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                aria-disabled="false"
              />
              <span className="oo-ui-iconElement-icon oo-ui-icon-table" />
              <span className="oo-ui-tool-title">Info box</span>
              <span className="oo-ui-tool-accel" dir="ltr" lang="en" />
            </a>
          </span>
          <span
            className="oo-ui-widget oo-ui-iconElement oo-ui-tool-with-icon oo-ui-tool oo-ui-tool-name-media oo-ui-widget-enabled"
            aria-disabled="false"
          >
            <a
              tabIndex={0}
              aria-disabled="false"
              className="oo-ui-tool-link"
              role="button"
            >
              <span
                className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
                aria-disabled="false"
              />
              <span className="oo-ui-iconElement-icon oo-ui-icon-image" />
              <span
                className="oo-ui-tool-title"
                onClick={() => {
                  editor.commands.insertContent(
                    '<image-component></image-component>',
                  )
                  setInsertOpened(false)
                }}
              >
                Image
              </span>
              <span className="oo-ui-tool-accel" dir="ltr" lang="en" />
            </a>
          </span>
        </div>
      </div>
      <div className="oo-ui-windowManager ve-ui-dir-block-ltr" />
    </div>
  )
}

const History = () => {
  const { editor } = useContext(EditorContext)
  const canRedo = editor && editor.can().redo()

  return (
    <div
      className="ve-ui-toolbar-group-history oo-ui-widget oo-ui-toolGroup oo-ui-barToolGroup oo-ui-widget-enabled"
      aria-disabled="false"
    >
      <div className="oo-ui-toolGroup-tools oo-ui-barToolGroup-tools oo-ui-toolGroup-enabled-tools">
        <span
          className="oo-ui-widget oo-ui-iconElement oo-ui-tool-with-icon oo-ui-tool oo-ui-tool-name-undo oo-ui-widget-enabled"
          aria-disabled="false"
        >
          <a
            tabIndex={0}
            aria-disabled="false"
            className="oo-ui-tool-link"
            role="button"
            title="Undo ⌘Z"
            onClick={() => {
              editor.chain().focus().undo().run()
            }}
          >
            <span
              className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
              aria-disabled="false"
            />
            <span className="oo-ui-iconElement-icon oo-ui-icon-undo" />
            <span className="oo-ui-tool-title">Undo</span>
            <span className="oo-ui-tool-accel" dir="ltr" lang="en">
              ⌘Z
            </span>
          </a>
        </span>
        <span
          className={`oo-ui-widget oo-ui-iconElement oo-ui-tool-with-icon oo-ui-tool oo-ui-tool-name-redo ${
            !canRedo ? 'oo-ui-widget-disabled' : ''
          }`}
          aria-disabled={canRedo}
        >
          <a
            tabIndex={-1}
            aria-disabled="true"
            className="oo-ui-tool-link"
            role="button"
            title="Redo ⌘⇧Z, ⌘Y"
            onClick={() => {
              editor.chain().focus().redo().run()
            }}
          >
            <span
              className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
              aria-disabled="false"
            />
            <span className="oo-ui-iconElement-icon oo-ui-icon-redo" />
            <span className="oo-ui-tool-title">Redo</span>
            <span className="oo-ui-tool-accel" dir="ltr" lang="en">
              ⌘⇧Z, ⌘Y
            </span>
          </a>
        </span>
      </div>
    </div>
  )
}

const Format = ({ opened, toggle, editor }) => {
  const getActiveLabel = () => {
    if (editor) {
      if (editor.isActive('heading', { level: 1 })) return 'Title'
      if (editor.isActive('heading', { level: 2 })) return 'Heading'
      if (editor.isActive('heading', { level: 3 })) return 'Subheading'
      if (editor.isActive('paragraph')) return 'Paragraph'
      if (editor.isActive('blockquote')) return 'Blockquote'
      return 'Paragraph'
    }
  }

  return (
    <div
      className={`ve-ui-toolbar-group-format oo-ui-widget oo-ui-toolGroup oo-ui-indicatorElement oo-ui-popupToolGroup oo-ui-menuToolGroup oo-ui-labelElement oo-ui-widget-enabled ${
        opened ? 'oo-ui-popupToolGroup-active' : ''
      }`}
      onClick={toggle}
      aria-disabled="false"
      title="Format paragraph"
    >
      <span
        tabIndex={0}
        aria-disabled="false"
        className="oo-ui-popupToolGroup-handle"
        role="button"
        aria-expanded="false"
      >
        <span className="oo-ui-iconElement-icon oo-ui-iconElement-noIcon" />
        <span className="oo-ui-labelElement-label">{getActiveLabel()}</span>
        <span className="oo-ui-indicatorElement-indicator oo-ui-indicator-down" />
      </span>
    </div>
  )
}

const Style = ({ opened, toggle }) => {
  return (
    <div
      className={`ve-ui-toolbar-group-style oo-ui-widget oo-ui-toolGroup oo-ui-iconElement oo-ui-indicatorElement oo-ui-popupToolGroup oo-ui-listToolGroup oo-ui-widget-enabled ${
        opened ? 'oo-ui-popupToolGroup-active' : ''
      }`}
      aria-disabled="false"
      title="Style text"
      onClick={toggle}
    >
      <span
        tabIndex={0}
        aria-disabled="false"
        className="oo-ui-popupToolGroup-handle"
        role="button"
        aria-expanded="false"
      >
        <span className="oo-ui-iconElement-icon oo-ui-icon-textStyle" />
        <span className="oo-ui-labelElement-label oo-ui-labelElement-invisible">
          Style text
        </span>
        <span className="oo-ui-indicatorElement-indicator oo-ui-indicator-down" />
      </span>
    </div>
  )
}

const Link = () => {
  const { editor } = useContext(EditorContext)
  const addLink = () => {
    const url = window.prompt('URL')

    if (url) {
      editor.chain().focus().toggleLink({ href: url }).run()
    }
  }

  return (
    <div
      className="ve-ui-toolbar-group-link oo-ui-widget oo-ui-toolGroup oo-ui-barToolGroup oo-ui-widget-enabled"
      aria-disabled="false"
      onClick={() => addLink()}
    >
      <div className="oo-ui-toolGroup-tools oo-ui-barToolGroup-tools oo-ui-toolGroup-enabled-tools">
        <span
          className="oo-ui-widget oo-ui-iconElement oo-ui-tool-with-icon oo-ui-tool oo-ui-tool-name-link oo-ui-widget-enabled"
          aria-disabled="false"
        >
          <a
            tabIndex={0}
            aria-disabled="false"
            className="oo-ui-tool-link"
            role="button"
            title="Link ⌘K"
          >
            <span
              className="oo-ui-tool-checkIcon oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement oo-ui-iconElement-icon oo-ui-icon-check oo-ui-labelElement-invisible oo-ui-iconWidget"
              aria-disabled="false"
            />
            <span className="oo-ui-iconElement-icon oo-ui-icon-link" />
            <span className="oo-ui-tool-title">Link</span>
            <span className="oo-ui-tool-accel" dir="ltr" lang="en">
              ⌘K
            </span>
          </a>
          <div
            className="oo-ui-widget oo-ui-widget-enabled ve-ui-educationPopup"
            aria-disabled="false"
          >
            <div className="mw-pulsating-dot oo-ui-element-hidden" />
            <div
              className="oo-ui-widget oo-ui-widget-enabled oo-ui-floatableElement-floatable oo-ui-popupWidget-anchored oo-ui-popupWidget oo-ui-popupWidget-anchored-top oo-ui-element-hidden"
              aria-disabled="false"
              style={{}}
            >
              <div
                className="oo-ui-popupWidget-popup"
                style={{ width: '300px', height: 'auto' }}
              >
                <div
                  className="oo-ui-clippableElement-clippable oo-ui-popupWidget-body oo-ui-popupWidget-body-padded"
                  style={{}}
                >
                  <div>
                    <div className="ve-ui-educationPopup-image ve-ui-educationPopup-image-link" />
                    <h3>Links</h3>
                    <p>
                      Link important words to other wiki articles or even other
                      websites. It will help readers understand the context.
                    </p>
                    <span
                      className="ve-ui-educationPopup-dismiss oo-ui-widget oo-ui-widget-enabled oo-ui-buttonElement oo-ui-buttonElement-framed oo-ui-labelElement oo-ui-flaggedElement-progressive oo-ui-flaggedElement-primary oo-ui-buttonWidget"
                      aria-disabled="false"
                    >
                      <a
                        className="oo-ui-buttonElement-button"
                        role="button"
                        tabIndex={0}
                        aria-disabled="false"
                        rel="nofollow"
                      >
                        <span className="oo-ui-iconElement-icon oo-ui-iconElement-noIcon oo-ui-image-invert" />
                        <span className="oo-ui-labelElement-label">
                          Okay, got it
                        </span>
                        <span className="oo-ui-indicatorElement-indicator oo-ui-indicatorElement-noIndicator oo-ui-image-invert" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="oo-ui-popupWidget-anchor"
                style={{ left: '172px' }}
              />
            </div>
          </div>
        </span>
      </div>
    </div>
  )
}

const Lists = ({ opened, toggle }) => {
  return (
    <div
      className={`ve-ui-toolbar-group-structure oo-ui-widget oo-ui-toolGroup oo-ui-iconElement oo-ui-indicatorElement oo-ui-popupToolGroup oo-ui-listToolGroup oo-ui-widget-enabled ${
        opened ? 'oo-ui-popupToolGroup-active' : ''
      }`}
      aria-disabled="false"
      title="Structure"
      onClick={toggle}
    >
      <span
        tabIndex={0}
        aria-disabled="false"
        className="oo-ui-popupToolGroup-handle"
        role="button"
        aria-expanded="false"
      >
        <span className="oo-ui-iconElement-icon oo-ui-icon-listBullet" />
        <span className="oo-ui-labelElement-label oo-ui-labelElement-invisible">
          Structure
        </span>
        <span className="oo-ui-indicatorElement-indicator oo-ui-indicator-down" />
      </span>
    </div>
  )
}

const Insert = ({ opened, toggle }) => {
  return (
    <div
      className={`ve-ui-toolbar-group-insert oo-ui-widget oo-ui-toolGroup oo-ui-indicatorElement oo-ui-labelElement oo-ui-popupToolGroup oo-ui-listToolGroup oo-ui-widget-enabled ${
        opened ? 'oo-ui-popupToolGroup-active' : ''
      }`}
      aria-disabled="false"
      title="Insert"
      onClick={toggle}
    >
      <span
        tabIndex={0}
        aria-disabled="false"
        className="oo-ui-popupToolGroup-handle"
        role="button"
        aria-expanded="false"
      >
        <span className="oo-ui-iconElement-icon oo-ui-iconElement-noIcon" />
        <span className="oo-ui-labelElement-label">Insert</span>
        <span className="oo-ui-indicatorElement-indicator oo-ui-indicator-down" />
      </span>
    </div>
  )
}

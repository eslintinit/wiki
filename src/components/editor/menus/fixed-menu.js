export default function FixedMenuBar({ editor, addLink }) {
  if (!editor) {
    return null
  }

  if (!editor.can().addRowBefore() || !editor.can().addRowAfter()) return null

  return (
    <div style={{ background: 'white' }} className="floating-bar">
      <button
        onClick={() => editor.chain().focus().addRowBefore().run()}
        disabled={!editor.can().addRowBefore()}
      >
        addRowBefore
      </button>
      <button
        onClick={() => editor.chain().focus().addRowAfter().run()}
        disabled={!editor.can().addRowAfter()}
      >
        addRowAfter
      </button>
    </div>
  )
}

export default function FloatingMenuBar({ editor, addLink }) {
  if (!editor) {
    return null
  }

  return (
    <div style={{ background: 'white' }} className="bubble-bar">
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        H3
      </button>
      <button
        onClick={() =>
          editor.commands.insertContent('<image-component></image-component>')
        }
      >
        Image
      </button>
    </div>
  )
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react'
import { useCodeMirror } from '@uiw/react-codemirror'
import { java } from '@codemirror/lang-java'
import { darcula } from '@uiw/codemirror-theme-darcula'
import { ICodeEditor } from './types'

const CodeEditor: React.FC<ICodeEditor> = ({ code }) => {
	const editor = useRef<any>()
	const { setContainer } = useCodeMirror({
		maxHeight: '500px',
		container: editor.current,
		extensions: [java(), darcula],
		value: code,
	})

	useEffect(() => {
		if (editor.current) {
			setContainer(editor.current)
		}
	}, [editor.current])

	return <div ref={editor} />
}

export default CodeEditor

import { useEffect } from 'react';

const useAutosizeTextArea = (textAreaRef, value) => {
	useEffect(() => {
		if (textAreaRef) {
			textAreaRef.style.height = '0';
			const scrollHeight = textAreaRef.scrollHeight;
			textAreaRef.style.height = scrollHeight + 'px';
		}
	}, [textAreaRef, value]);
};

export default useAutosizeTextArea;

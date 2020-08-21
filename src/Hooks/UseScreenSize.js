import { useEffect, useState } from 'react'

export default function useScreenSize(widthCutoff = 1000) {

	const [screenSize, setScreenSize] = useState({
		width: typeof window !== 'undefined' ? window.innerWidth : null,
		height: typeof window !== 'undefined' ? window.innerHeight : null,
	})



	function testNarrow(width) {
		return width < widthCutoff ? true : false
	}

	const [narrow, setNarrow] = useState(testNarrow(typeof window !== 'undefined' ? window.innerWidth : null))

	useEffect(() => {

		function resizeHandler() {
			if (typeof window !== 'undefined') {
				setScreenSize({
					width: window.innerWidth,
					height: window.innerHeight
				})

				setNarrow(testNarrow(window.innerWidth))
			}
		}

		if (typeof window !== 'undefined') {
			window.addEventListener('resize', resizeHandler)
		}

		return (() => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('resize', resizeHandler)
			}
		})
	}, [])

	return ({ ...screenSize, narrow: narrow })
}
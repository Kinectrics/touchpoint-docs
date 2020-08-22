import React from 'react'

export default function Note(props) {
	
	return (
		<div className={'Note'} style={props.style}>
			<i>{props.children}</i>
		</div>
	)
}



import React from 'react'
import './BigButton.css'

export default function BigButton(props){
	
	return(
		<button 
			className = {'BigButton ' + props.className}
			onClick = {props.onClick}
			style={props.style}
		>
			{props.children}
		</button>
	)
}

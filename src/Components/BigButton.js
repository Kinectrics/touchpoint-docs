import React from 'react'
import './BigButton.css'

export default function BigButton(props){
	
	return(
		<button 
			className = {'BigButton ' + props.className}
			onClick = {props.onClick}
		>
			{props.children}
		</button>
	)
}

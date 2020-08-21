import React from 'react'
import './SideBar.css'

export default function SideBar(props){
	
	return(
		<div className = {props.open ? 'SideBar open' : 'SideBar closed'}>
			<div className="content">
				{props.children}
			</div>
		</div>
	)
}

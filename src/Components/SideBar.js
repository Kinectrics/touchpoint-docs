import React from 'react'
import './SideBar.css'
import useScreenSize from '../Hooks/UseScreenSize'

export default function SideBar(props){
	
	const {narrow} = useScreenSize()
	
	return(
		<div className = {props.open ? 'SideBar open' : 'SideBar closed'}>
			<div className="content" onClick = {()=>{
				if (props.setOpen && narrow){
					props.setOpen(false)
				}
			}}>
				{props.children}
			</div>
		</div>
	)
}

import React from 'react'
import backdrop from '../assets/backdrop.svg'
import './NavBar.css'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function NavBar(props) {
	return (
		<div
			className = 'NavBar'
			style={{
				backgroundImage: 'url(' + backdrop + ')',
			}}
		>
			<div className="navContainer">
				
				<div className="leftSide">
					<div className='menuContainer'>
						<button  className = 'mainButton' onClick={()=>{
							props.setSideBarOpen(!props.sideBarOpen)
						}}>
							<FontAwesomeIcon icon={faBars}/>
						</button>
					</div>	
					<span className='title'>
						<Link to='/'>
							TouchPoint {props.subTitle} 
						</Link>
						
						<span className='subTitle'>
							{props.title ? ' - ' + props.title : ''}
						</span>
						
					</span>
				</div>
				
			</div>
			
		</div>
	)
}

NavBar.propTypes={
	subTitle: propTypes.string,
}

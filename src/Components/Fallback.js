import React from 'react'
import logo from '../assets/logo-white.svg'
import backdrop from '../assets/backdrop.svg'
import './Fallback.css'

export default function Fallback() {
	return (
		<div
			className='Fallback'
			style={{
				backgroundImage: 'url(' + backdrop + ')',
			}}
		>

			<div className="logoContainer">
				<img src={logo}/>
			</div>


		</div>
	)
}

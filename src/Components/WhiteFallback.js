import React from 'react'
import logo from '../assets/logo-red.svg'
import './Fallback.css'

export default function Fallback() {
	return (
		<div
			className='Fallback small'
		>

			<div className="logoContainer">
				<img src={logo}/>
			</div>


		</div>
	)
}

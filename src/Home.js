import React from 'react'
import './Home.css'
import logo from './assets/logo-white.svg'
import backdrop from './assets/backdrop.svg'
import BigButton from './Components/BigButton'
import {Link} from 'react-router-dom'

export default function Home() {
	return (
		<div className='Home'>

			<div
				className='landing'
				style={{
					backgroundImage: 'url(' + backdrop + ')',
				}}
			>
				<div className="landingContent">
					<div className="logoContainer">
						<img src={logo} />
					</div>

					<div className='title'>TouchPoint UI</div>

					<div className="subTitle">
						Build modular applications with React
					</div>

					<div className="buttonContainer">
						
						<Link to="/Docs">
							<BigButton>
								Docs
							</BigButton>
						</Link>

						<a href="https://github.com/youssof707/touchpoint-ui">
							<BigButton>
								GitHub
							</BigButton>
						</a>
					</div>

					<div className="npmInstall">
						<span className="container">
							npm install touchpoint-ui
						</span>
					</div>

				</div>

			</div>

		</div>
	)
}

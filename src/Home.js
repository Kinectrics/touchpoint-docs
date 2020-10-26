import React from 'react'
import './Home.css'
import logo from './assets/logo-white.svg'
import backdrop from './assets/backdrop.svg'
import BigButton from './Components/BigButton'
import {Link} from 'react-router-dom'
import useScreenSize from './Hooks/UseScreenSize'

export default function Home() {
	
	const {narrow} = useScreenSize()
	
	const divStyle = { width: narrow ? '100%' : '50%' }
	
	const splitterStyle = {display: narrow ? null : 'flex'}
	
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
							<BigButton style={{padding: '10px 20px'}}>
								Docs
							</BigButton>
						</Link>

						<a href="https://github.com/youssof707/touchpoint-ui">
							<BigButton>
								GitHub
							</BigButton>
						</a>
					</div>

				</div>

			</div>
			
			<div className='news'>
				<h1>New in TouchPoint 1.5</h1>
				
				<div className='splitter' style = {splitterStyle}>
					<div style={divStyle}>
						<Link to='Docs/useShortcuts'>useShortcuts hook</Link>
						<p>Quickly add keyboard shortcuts to your app. <br/>
						Still experimental, and the API is subject to change in a future release.</p>
						
						<Link to='/Docs/Text#SearchBar'>Nested components for SearchBar components</Link>
						<p>Create autocomplete or preview dialogs as your users search</p>
						
					</div>
					{/*  */}
					<div style={divStyle}>
						<Link to='/Docs/MainTable#headers'>Dropdown menus in MainTable cells. </Link>
						<p>Editable cells that choose from a predefined list of values. </p>
						
						<Link to='/Docs/Buttons'>onExpand event for ConfirmButtons </Link>
						<p>Perform an action on the initial click of the ConfirmButton, before it expands.</p>
					</div>
					
				</div>
			</div>

		</div>
	)
}
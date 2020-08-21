import React from 'react'
import './Example.css'
import {TouchPointApp, useSystem, Module} from 'touchpoint-ui'
import Gist from 'react-gist'
import propTypes from 'prop-types'

function ExampleContent(props){
	
	const {io} = useSystem()
	
	return(
		<Module moduleName='ExampleModule'>
			{io.children}
		</Module>
	)
	
}

//...
export default function Example(props) {
	
	const modules = {
		ExampleModule: {
			name: 'ExampleModule',
			component: ExampleContent
		}
	}
	
	function saveSettings(id, token){
		if(typeof localStorage !== undefined){
			localStorage.setItem(id, token)
		}
	}
	
	function getSettings(id) {
		if (typeof localStorage !== undefined) {
			return localStorage.getItem(id)
		}
	}
	
	return (
		<div className= 'Example' style = {props.style}>
			
			<div className="exampleContainer" style={{ 
				...props.style, 
				margin: props.gist ? '0px 7px' : null,
			}}>
				<TouchPointApp
					homeModule = 'ExampleModule'
					modules = {modules}
					saveSettings = {saveSettings}
					getSettings = {getSettings}
					io={{
						children: props.children
					}}
				/>
			</div>
		
		
		{props.gist ? <div className='sourceCode'>
			<Gist id={props.gist} />
		</div> : null}

	</div>
	)
}

Example.propTypes = {
	gist: propTypes.string
}
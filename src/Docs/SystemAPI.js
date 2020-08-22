import React from 'react'
import Example from '../Components/Example'
import {useSystem, FreeButton, PopupCard} from 'touchpoint-ui'
import PropList from '../Components/PropList'

const InnerComponent = () => {
	
	const System = useSystem()
	
	return(<div style={{textAlign:'center'}}>
		
		<FreeButton onClick = {()=>{System.Theme.set('blue')}}>Light Theme</FreeButton>
		
		<FreeButton onClick={() => { System.Theme.set('dark') }}>Dark Theme</FreeButton>
		
		<FreeButton onClick = {()=>{
			System.Popup.open(<PopupCard>Hello World!</PopupCard>)
		}}>Try a Popop!</FreeButton>
	</div>)
}

export default function SystemAPI() {

	return (
		<div>
			<h1>System API</h1>
			The System API lets you interact with app-wide functionality from anywhere inside the app. 
			This is how you can change the theme, create popup dialogs, switch modules, and more. 
			
			You can access the System API from anywhere using the useSystem() hook. This will return a System object.
			
			<PropList title='System methods' items={[
				{ name: 'System.Modules.open(moduleName)', type: 'moduleName - String', desc: 'Opens a given module'},
				{ name: 'System.Modules.list( )', desc: 'Returns a list of non-hidden modules.'},
				{ name: 'System.Modules.getHomeName( )', desc: 'Returns the name of the home module set in the touchpoint app props.'},
				{},
				{ name: 'System.Theme.set(theme)', type: 'theme - String (theme name)', desc: 'Sets the app theme' },
				{},
				{ name: 'System.Popup.open(content)', type: 'content - JSX (The popup content)', desc: 'Opens a popup dialog'},
				{ name: 'System.Popup.close( )' , desc: 'Closes the active popup'},
				{},
				{ name: 'System.Input.disable(time)', type: 'time - integer (amount of time in ms)', desc: 'Disables all click input for a given time. If no time is given, it will be disabled indefinitely until you call System.Input.enable( )' },
				{ name: 'System.Input.enable( )',  desc: 'Enables click input if disabled' },
				{},
				{ name: 'System.Drawer.open( )',  desc: 'Opens the app drawer menu if there is one' },
				{ name: 'System.Drawer.close( )',  desc: 'Closes the app drawer menu if open' },
				{},
				{name: 'io', desc: 'Gives you access to any additional system methods/properties created by the app.' },
			]} />

			
			<p></p>
			<Example gist='341f9704569525e2555e73686a0301be'>
				<InnerComponent />
			</Example>
			<p></p>
			
		</div>
	)
}

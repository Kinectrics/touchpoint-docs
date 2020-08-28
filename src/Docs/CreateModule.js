import React from 'react'
import Example from '../Components/Example'
import Gist from 'react-gist'
import {InfoCard} from 'touchpoint-ui'
import { Link } from 'react-router-dom'

export default function CreateModule() {

	return (
		<div>
			<h1>Create a module</h1>
			To add a new module to an exisiting TouchPoint app.
			<br/> 
			First, you need to create the React component for yoru module. This can contain anything you like, as long as it's wrapped in a Module component.
			The example below is a very simple (and kind of useless) test module. 
			<p></p>
			
			<Example gist='b8bb059e3a34a358c530a256d2377dce'>
				<h2>Hello World Module!</h2>
				
				<InfoCard stripe style={{width: '50%'}}>
					Hello
				</InfoCard>
				
				<InfoCard stripe style={{width: '50%'}}>
					World
				</InfoCard>
			</Example>
			
			<h3 style ={{color: 'var(--mainTextColor)'}}>Adding your module to the app</h3>
			Now that you've created the component, you have to add it to the app so it can be rendered. 
			If you don't already have a TouchPoint App set up, go <Link to='/Docs/CreateApp'>here</Link>.
			<br/>
			To add your module to the app, navigate to the top level App.js file. This is where your TouchPointApp component is created. 
			Here you can add the module to the 'modules' object that's passed to your TouchPointApp. 
			<br/>
			The example	app below already has one module, called Lockscreen. We'll add the HelloWorldModule to it. 
			
			<Gist id='88e29434c7f7f17105323e1f8d6002ca'/>
			
			Now you can navigate to the url 'yourappname.com/#/HelloWorldModule' to access the new module. The routing is already set up for you inside the TouchPointApp.
			<br/>
			You can also open the module by calling <Link to='/Docs/SystemAPI'>System.Modules.open( 'HelloWorldModule' )</Link> from anywhere within the app. 
			
			<br/>
			<br/>
			
			You can also hide your module by setting hidden = true in the object above, based on the active user's permissions. This will make the module inaccessible, and will stop it from appearing anywhere inside the app. 
			
			<h3>Read-only modules</h3>
			Like any other container, you can make the module read-only by passing locked = true to the Module component. 
			This will put the module, and any compones inside (that support permissions) in read-only mode. Note that you can override this for any component in the module, by setting locked = false. 
			See the <Link to='/Docs/Permissions'>Permissions docs</Link> for more on this. 
			
			<Gist id='88e29434c7f7f17105323e1f8d6002ca' />
			
		</div>
	)
}

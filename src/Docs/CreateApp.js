import React from 'react'
import Gist from 'react-gist'
import { Link } from 'react-router-dom'
import Note from '../Components/Note'
import PropList from '../Components/PropList'

export default function CreateApp() {
	
	return (
		<div>
			<h1>Create a new TouchPoint app</h1>
			If you are creating a module for an existing app, go <Link to='/Docs/CreateModule'>here</Link>.
			<br/>
			<br/>
			Your entire app will be inside of a TouchPointApp component. This component will handle all system-level UI, including theming, popups, settings, and rendering the app's modules. 
			<br/>
			In the example below, we are creating an app with 3 modules, a lock screen, a scheduling module, and a client module. 
			You can open any of these modules by navigating to the URL '/moduleName' (where moduleName is the object key for that moduel), or by using <Link to='/Docs/SystemAPI'>System.Module.open(moduleName)</Link> anywhere inside the app.
			<br/>You can add any app components (toolbars, footers, app drawers, etc.) as children to the TouchPointApp. 
			<br/><br/>
			You can also create some global state here and make it accessible using <Link to='/Docs/SystemAPI#io'>System.io</Link>.
			<p />
			
			
			<PropList title='TouchPointApp props' items={[
				{name: 'modules (required)', type: 'object', desc: 'The list of modules for the app. See example below'},
				{name: 'homeModule (reqired)', type: 'string', desc: 'The name of the home module - the one that opens by default'},
				{name: 'onOpenModule', type: 'function( moduleName<string> )', desc: 'Callback to run when a module is opened'},
				{name: 'saveSettings', type: 'function( id<string>, token<string> )', desc: 'Function for saving a settings token (see Settings API)'},
				{name: 'getSettings', type: 'function( id<string>)', desc: 'Function for fetching a settings token (see Settings API)'},
				{name: 'locked', type: 'boolean', desc: 'Lets you put the whole app and all modules in read only mode'},
				{name: 'io', type: 'object', desc: 'Lets you pass in anything you want to be globally available within the app'},
			]}/>
			
			<Gist id='b43a6ed3f6bc8967fe63a8586fa48cc3'/>
			
			<Note>
				Note - TouchPoint Apps are designed to run using the full window, and we are using a modified version to create the examples shown.
			</Note>
			
			
		</div>
	)
}

import React from 'react'
import Example from '../Components/Example'
import Note from '../Components/Note'
import { Link } from 'react-router-dom'
import { FreeButton, useSystem, PopupCard } from 'touchpoint-ui'
import PropList from '../Components/PropList'

export default function Popups() {
	
	function InnerPopup(){
		const {Popup} = useSystem()
		
		function clickHandler(){
			Popup.open(<PopupCard title ='TouchPoint UI'>
				Hello there!
			</PopupCard>)
		}
		
		return(<FreeButton onClick={clickHandler}>Open Popup</FreeButton>)
	}

	return (
		<div>
			<h1>Popups</h1>
			Create interactive information dialogs for your users. If you open multiple popups in a row, only the latest one will be displayed on the screen, but all the components will remain mounted. 
			
			<h3>Creating a popup</h3>
			You can create popups anywhere in your TouchPoint app through the <Link to='/Docs/SystemAPI'>System API</Link>.
			<br/>To open a popup, use System.Popup.open( JSXContent )
			<br/>To close the open popup. use System.Popup.close( ) or System.Popup.closeAll( ) if there are multiple popups open.
			
			<Example gist='8d0898a7cc5467a8d4855eb7aaf33cd2'>
				<InnerPopup/>
			</Example>
			
			<h3>PopupCard Component</h3>
			The container for all your popup content. By default, clicking the background will close the popup.
			
			<PropList title='PopupCard props' items={[
				{name:'title', type:'string', desc: 'Title for the card'},
				{name:'onOpen', type:'function( )', desc: 'Callback that runs when the popup is opened'},
				{name:'onClose', type:'function( )', desc: 'Callback that runs when the popup is closed'},
				{name:'forceOpen', type:'boolean', desc: 'Removes the close button and disables clicking the background to close. Make sure you implement your own way of closing the popup'},
				{name:'stripeColor', type:'string (css color)', desc: 'Colors the stripe of the card'},
				{name:'style', type:'object (style)', desc: 'Optional custom styling'},
				{name:'locked', type:'boolean', desc: 'Locks all content in the popup'},
			]}/>
			
			<Note>Note: by default popups do not inherit a locked prop from a parent module. </Note>
			
		</div>
	)
}

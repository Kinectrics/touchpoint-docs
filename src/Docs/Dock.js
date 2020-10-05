import React from 'react'
import Example from '../Components/Example'
import Note from '../Components/Note'
import {Dock, DockIcon, ControlledTabContainer, InfoTab, ControlBar} from 'touchpoint-ui'
import './DockFix.css'
import {faCalculator, faCalendar, faBoxOpen, faBoxTissue} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import PropList from '../Components/PropList'

//
function InnerDock(props){
	const [tab, setTab] = useState('Calc')
	
	return(
		<div className='InnerDock'>
			
			<div>
				<Dock>
					<DockIcon faIcon={faCalculator} title='Calc' style={{ marginBottom: '30px' }} onClick={() => setTab('Calc')} />
					<DockIcon faIcon={faCalendar} title='Calendar' style={{ marginBottom: '30px' }} notifications={34} onClick={() => setTab('Calendar')}/>
					<DockIcon faIcon={faBoxOpen} title='Packing' style={{ marginBottom: '30px' }} onClick={() => setTab('Packing')}/>
					<DockIcon faIcon={faBoxTissue} title='Cleaning' style={{ marginBottom: '30px' }} onClick={() => setTab('Cleaning')}/>
				</Dock>
			</div>
			
			<ControlledTabContainer activeTab={tab}>
				
				<InfoTab tabID={'Calc'}>
					<h1>Calculator Time</h1>
				</InfoTab>
				
				<InfoTab tabID={'Calendar'}>
					<h1>My Calendar</h1>
				</InfoTab>
				
				<InfoTab tabID={'Packing'}>
					<h1>Packing Jobs</h1>
				</InfoTab>
				
				<InfoTab tabID={'Cleaning'}>
					<h1>Cleaning Jobs</h1>
				</InfoTab>
				
			</ControlledTabContainer>

			
		</div>
	)
}

export default function DockDocs() {

	return (
		<div className='DockFix'>
			<h1>Dock</h1>
			Dock for the side of your modules. Supports dock icons with notification badges.
			<br/>
			This works very nicely with ControlledTabContainer to split your module into sections. See example below.
			<p></p>
			<Example gist='c8a59a1fab147d688b5bdf4f3abf6e5f'>
				<InnerDock/>
			</Example>
			
			<Note>
				Note: In your module, any items that are above the dock will shrink the dock height. This is useful if you want your ControlBar to overlap the dock for example.
				If you want the dock to be on top, place it above the other component in your code.
			</Note>
			
			<PropList title='DockIcon props' items={[
				{name: 'title', type:'String', desc:'The title to display'},
				{name: 'faIcon (with a capital i not an L)', type: 'FontAwesome icon object', desc:'npm install @fortawesome/free-solid-svg-icons'},
				{name: 'notifications', type: 'integer', desc:'Number of notifications to display in the badge'},
				{name: 'onClick', type: 'function', desc:'Click even handler'},
				{name: 'style', type: 'object (style)', desc:'Optional custom style'},
				{name: 'locked', type: 'boolean', desc:"Locks the icon so it can't be clicked"},
				{name: 'hidden', type: 'boolean', desc:"Hides the icon completely"},
				{name: 'menuContent', type: 'Component or JSX', desc:"Adds a menu to the icon, similar to how MenuButtons work"},
			]}/>
			
		</div>
	)
}

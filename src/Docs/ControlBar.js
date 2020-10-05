import React from 'react'
import Example from '../Components/Example'
import {ControlBar, CoreButton} from 'touchpoint-ui'
import './ControlBarFix.css'
import PropList from '../Components/PropList'
import {Link} from 'react-router-dom'
import Note from '../Components/Note'

export default function ControlBarDocs() {

	return (
		<div className='ControlBarDocs'>
			<h1>ControlBar</h1>
			A bar for controls... also with a searchbar.
			
			If you choose to add a searchBar like in the example below, the searchBar will automatically link to any <Link to='/Docs/MainTable'>MainTable</Link> components in the module that are searchable. 
			
			<p></p>
			<Example gist='c8dac46904b901b7c8c95ce1d8afeb06'>
				<ControlBar searchBar>
					<CoreButton>Buttons</CoreButton>
					<CoreButton>More Buttons</CoreButton>
				</ControlBar>
			</Example>
			
			<Note>
				Note: If you want the buttons inside to respond to <Link to='/Docs/Permissions'>permissions</Link>, make sure you are using CoreButton components, not just html buttons.
			</Note>
			
			<PropList title='ControlBar props' items={[
				{name:'searchBar', type: 'boolean', desc: 'If true, adds a searchbar to the controlbar' },
				{name:'searchBarProps', type: 'object', desc: 'Lets you pass props to the searchbar' },
				{name:'locked', type: 'boolean', desc: "Locks the bar and all buttons inside. Doesn't lock the SearchBar" },
				{name:'style', type: 'object (style)', desc: 'Optional custom styling'},
			]}/>
			
		</div>
	)
}

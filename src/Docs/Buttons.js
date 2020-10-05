import React from 'react'
import Example from '../Components/Example'
import {FreeButton, CoreButton} from 'touchpoint-ui'
import PropList from '../Components/PropList'

export default function Buttons() {

	return (
		<div>
			<h1>Button Components</h1>
			
			<h3>FreeButton</h3>
			Just a good old button.
			
			<p></p>
			<Example gist='64207f81481cc7ec03c85a7fe4dc20c6'>
				<FreeButton purpose='positive' style={{margin:'10px'}}>Positive</FreeButton>
				<FreeButton purpose='negative' style={{ margin: '10px' }}>Negative</FreeButton>
				<FreeButton style={{ margin: '10px' }}>Default</FreeButton>
				<FreeButton locked style={{ margin: '10px' }}>Locked</FreeButton>
			</Example>
			
			<PropList title='FreeButton props' items={[
				{name:'onClick', type: 'function()', desc: 'Click event handler'},
				{name:'purpose', type: 'string', desc: 'Can be positive, negative, or none. Decides the color of the button based on your theme'},
				{name:'locked', type: 'boolean', desc: 'Locks the button to disable clicks'},
				{name:'hidden', type: 'boolean', desc: 'Hides the button completely'},
				{name:'style', type: 'object (style)', desc: 'Optional custom styling'},
			]}/>
			
			<h3 id='CoreButton'>CoreButton</h3>
			A plain button that takes its style from its surroundigs (or custom styling). 
			
			<PropList title='CoreButton props' items={[
				{ name: 'onClick', type: 'function()', desc: 'Click event handler' },
				{ name: 'locked', type: 'boolean', desc: 'Locks the button to disable clicks' },
				{ name: 'hidden', type: 'boolean', desc: 'Hides the button completely' },
				{ name: 'style', type: 'object (style)', desc: 'Optional custom styling' },
				{ name: 'className', type: 'string', desc: 'Add your own classname to the button' },
			]} />
			
			<h3 id = 'Tile'>Tile</h3>
			An app icon style button. 
			
			<PropList title='Tile props' items={[
				{ name: 'onClick', type: 'function()', desc: 'Click event handler' },
				{ name: 'title', type: 'string', desc: 'The title on the tile' },
				{ name: 'locked', type: 'boolean', desc: 'Locks the button to disable clicks' },
				{ name: 'hidden', type: 'boolean', desc: 'Hides the button completely' },
				{ name: 'style', type: 'object (style)', desc: 'Optional custom styling' },
				{ name: 'notificatons', type: 'integer', desc: 'Adds a notification badge to the button' },
			]} />
			
		</div>
	)
}

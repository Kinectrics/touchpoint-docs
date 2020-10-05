import React from 'react'
import Example from '../Components/Example'
import {ComboBox, RadioGroup, RadioButton, } from 'touchpoint-ui'
import PropList from '../Components/PropList'
import { useState } from 'react'

export default function Select() {
	
	const [chosenOne, setChosenOne] = useState(1)
	
	return (
		<div>
			
			<h1>Selection Components</h1>
			
			<h3 id='ComboBox'>ComboBox</h3>
			Select from multiple values. The choises are {'<option>'} elements as children. See example below.
			You can also pass a 'value' prop to tie the value to some React state, and control it that way.

			<Example gist='91b2812b2c9987c77022b63e6c42e494'>
				<ComboBox style={{ width: 200 }}>
					<option value='R'>Red</option>
					<option value='B'>Blue</option>
					<option value='G'>Green</option>
				</ComboBox>
			</Example>

			<PropList title='CommentBox props' items={[
				{ name: 'onChange', type: 'function( event )', desc: 'Change event handler. Works like the regular javascript onChange handler' },
				{ name: 'value', type: 'string', desc: 'Lets you control the value yourself, eg: by linking it to some React state' },
				{ name: 'defaultValue', type: 'string', desc: 'The default value of the text box' },
				{ name: 'locked', type: 'boolean', desc: 'Disables editing the textbox' },
				{ name: 'hidden', type: 'boolean', desc: 'Hides the textbox completely' },
				{ name: 'style', type: 'object (style)', desc: 'Optional custom styling' },
			]} />
			
			<h3 id='RadioGroup'>RadioGroup and RadioButton</h3>
			Radio button controller for selecting only one value. You can also pass a 'value' prop to tie the value to some React state, and control it that way.
			<br/>
			The RadioGroup will detect any RadioButton components anywhere in it's children and group them together. 
			
			<p></p>
			<Example gist='843f7ad36a0ad6b830c6d1b8e2b31914'>
				<RadioGroup value={chosenOne} onChange={setChosenOne}>
					<RadioButton value = {1}>Option 1</RadioButton>
					<RadioButton value = {2}>Option 2</RadioButton>
					<RadioButton value = {3}>Option 3</RadioButton>
					<RadioButton value = {4}>Option 4</RadioButton>
				</RadioGroup>
				
			</Example>
			
			<PropList title='RadioGroup props' items={[
				{ name: 'groupID', type: 'any', desc: 'An optional value that is passed to the onChange function whenever it fires. Can be anything.' },
				{ name: 'onChange', type: 'function( value, groupID )', desc: 'Change event handler. Recieves the value of the button clicked, and the groupID' },
				{ name: 'value', type: 'any', desc: 'Lets you control the value through some React state' },
				{ name: 'defaultValue', type: 'any', desc: 'The default value for uncontrolled groups. Does nothing if a value prop is present' },
				{ name: 'locked', type: 'boolean', desc: 'Locks the group at its current value' },
			]} />
			<p></p>
			
			<PropList title='RadioButton props' items={[
				{name: 'value', type: 'any', desc: 'The value of the button'},
			]} />
			
			<h3 id='CheckBox'>CheckBox</h3>
			A simple checkbox, identical to the HTML one, but with permissions support. 
			
		</div>
	)
}

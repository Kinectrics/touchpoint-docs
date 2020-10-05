import React from 'react'
import Example from '../Components/Example'
import {TextBox, CommentBox, SearchBar, MainTable} from 'touchpoint-ui'
import { useState } from 'react'
import PropList from '../Components/PropList'

export default function Text() {

	const [textValue, setTextValue] = useState('hello!')
	
	return (
		<div>
			<h1>Text Inputs</h1>
			
			<h3 id='TextBox'>TextBox</h3>
			
			<Example gist= 'f7d2fc1cafb7b33b15bbbd2434d2e929'>
				<h5>TextBox Says {textValue}</h5>
				<TextBox onChange={(e)=>setTextValue(e.target.value)} value = {textValue}/>
			</Example>
			
			<PropList title='TextBox props' items={[
				{name:'onChange', type:'function( event )', desc:'Change event handler. Works like the regular javascript onChange handler'},
				{name:'onEnter', type:'function( event )', desc:'Enter key event handler. Takes an even object as a parameter'},
				{name: 'onBlur', type: 'function( event )', desc: 'Blur event handler'},
				{name:'onEsc', type:'function( event )', desc:'Event handler for the escape key'},
				{name:'value', type:'string', desc:'Lets you control the value yourself, eg: by linking it to some React state'},
				{name:'defaultValue', type:'string', desc:'The default value of the text box'},
				{name:'locked', type:'boolean', desc:'Disables editing the textbox'},
				{name:'hidden', type:'boolean', desc:'Hides the textbox completely'},
				{name:'autofocus', type:'boolean', desc:'Texbox will auto focus when it mounts'},
				{name:'style', type:'object (style)', desc:'Optional custom styling'},
				{name: 'placeholder', type: 'string', desc: 'HTML placeholder text' },
				{name:'inputRef', type:'React ref object', desc:'Lets you attach a React ref to the input element'},
			]}/>
			
			<h3 id='CommentBox'>CommentBox</h3>
			A multi line text input for longer comments.

			<Example>
				<CommentBox style={{width:'100%'}} placeholder/>
			</Example>

			<PropList title='CommentBox props' items={[
				{ name: 'onChange', type: 'function( event )', desc: 'Change event handler. Works like the regular javascript onChange handler' },
				{ name: 'onEsc', type: 'function( event )', desc: 'Event handler for the escape key' },
				{ name: 'onBlur', type: 'function( event )', desc: 'Blur event handler' },
				{ name: 'value', type: 'string', desc: 'Lets you control the value yourself, eg: by linking it to some React state' },
				{ name: 'defaultValue', type: 'string', desc: 'The default value of the text box' },
				{ name: 'locked', type: 'boolean', desc: 'Disables editing the textbox' },
				{ name: 'hidden', type: 'boolean', desc: 'Hides the textbox completely' },
				{ name: 'autofocus', type: 'boolean', desc: 'CommentBox will auto focus when it mounts' },
				{ name: 'style', type: 'object (style)', desc: 'Optional custom styling' },
				{ name: 'placeholder', type: 'string', desc: 'HTML placeholder text' },
				{ name: 'inputRef', type: 'React ref object', desc: 'Lets you attach a React ref to the input element' },
			]} />
			
			<h3 id = 'SearchBar'>SearchBar</h3>
			A search bar that automatically links to any tables in the module that are searchable. 
			
			<p></p>
			<Example gist='95cc0734b76c52258f873b3c644367cf'>
				
				<SearchBar/>
				
				<MainTable
					searchable
					
					headers={[
						{headerID: 'name', displayName: 'Name', width: 250},
						{headerID: 'carMake', displayName: 'Car Make', width: 200},
						{headerID: 'carModel', displayName: 'Car Model', width: 200},
					]}
					
					data={[
						{name:'Youssof Fahmy', carMake:'Kia', carModel:'Forte'},
						{name:'Mufrad Saleh', carMake:'Honda', carModel:'Civic'},
						{name:'Nadeem Talaat', carMake:'Mazda', carModel:'Mazda 3'},
						{name:'Faiz Mithani', carMake:'Hyundai', carModel:'Elantra'},
						{name:'Peter Zhang', carMake:'VW', carModel:'Jetta'},
					]}
				/>
				
			</Example>
			
		</div>
	)
}

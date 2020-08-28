import React from 'react'
import Example from '../Components/Example'
import Gist from 'react-gist'
import {TextBox} from 'touchpoint-ui'

export default function Text() {

	return (
		<div>
			<h1>Text Input Components</h1>
			
			<h3>TextBox</h3>
			
			<Example gist= '88e29434c7f7f17105323e1f8d6002ca'>
				<TextBox/>
			</Example>
			
			<h3>CommentBox</h3>
			
			
		</div>
	)
}

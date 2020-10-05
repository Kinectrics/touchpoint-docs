import React from 'react'
import Example from '../Components/Example'
import {InfoCard} from 'touchpoint-ui'
import PropList from '../Components/PropList'

export default function InfoCardDocs() {

	return (
		<div>
			<h1>InfoCard</h1>
			A pretty container for whatever you need! 
			
			<p></p>
			
			<Example gist='1527b284877f7d1dc342f3344049a070'>
				
				<InfoCard stripe title='Hey there'> 
					Add a stripe and a title!
				</InfoCard>
				
				<div style={{display:'flex'}}>
					<InfoCard stripeColor='red' style={{width:'33%'}}>
						Customize stripe color!
					</InfoCard>
					
					<InfoCard stripeColor='Orange' style={{width:'33%'}}>
						Yellow!
					</InfoCard>
					
					<InfoCard stripeColor='Green' style={{width:'34%'}}>
						Green!
					</InfoCard>
				</div>
				

				<InfoCard 
					stripe 
					dynamicX 
					onClick={() => { console.log('Hello World!') }}
				>
					<label>Guess what? </label>Dynamic cards for clickable content!
				</InfoCard>
				
				
			</Example>
			
			<h3>Custom Styling InfoCards</h3>
			Since InfoCards are made up of a container div, and the actual card div insid of that, stying the inner card can be done using the innerStyle prop. 
			This works the same as passing a style prop to any DOM element, but will apply to the inner card. 
			<br/>
			For example, if you wanted to change teh size of the card, you would use 'style' like usual. But if you wanted to change the background color, or the border radius, you would use innerStyle.
			See the exampe below. 
					
			<p></p>
			<Example gist='ae619a098b2e9be36038dfb8b8a92dd3'>
				<InfoCard 
					style={{width: '50%', height: '200px'}}
					innerStyle={{ backgroundColor: '#001f3f', color:'#0074D9', fontWeight: 'bold' }}
				>
					My content here!
				</InfoCard>
			</Example>
			
			<h3>InfoCard props</h3>
			<PropList title=' ' items={[
				{name: 'stripe', type:'boolean', desc: 'Adds a stripe to the side of the card'},
				{name: 'stripeColor', type:'string (css color)', desc: 'Colors the card stripe'},
				{name: 'title', type:'string', desc: 'The title of the card... obviously'},
				{name: 'locked', type:'boolean', desc: 'Locks all contents of the card (see permissions API for details)'},
				{name: 'hidden', type:'boolean', desc: 'Hides the card from view. Component will not mount'},
				{name: 'onClick', type:'function', desc: 'Click event handler.'},
				{name: 'onClose', type:'function', desc: 'Adds a close button to the card with this event handler.'},
				{name: 'style', type:'object (style)', desc: 'Styling for the card container (size, position...)'},
				{name: 'innerStyle', type:'object (style)', desc: 'Styling for the card itself (color and most other things)'},
			]}/>
			
		</div>
	)
}

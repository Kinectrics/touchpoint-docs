import React, {useState} from 'react'
import Example from '../Components/Example'
import Gist from 'react-gist'
import { InfoCard, FreeButton, useSystem, PopupCard} from 'touchpoint-ui'

export default function Permissions() {
	
	
	
	const InnerComponent=()=>{
		
		const {Popup} = useSystem()
		function clickHandler() {
			Popup.open(<PopupCard>Hello World</PopupCard>)
		}
		
		const [lockedState, setLockedState] = useState(true)
		
		return (<div>
			<FreeButton onClick={() => setLockedState(!lockedState)} purpose={lockedState ? 'negative' : 'positive'}>
				Toggle Locked
			</FreeButton>
			
			<InfoCard stripe title={lockedState ? 'Locked Card' : 'Unlocked Card'} locked={lockedState}>
				<FreeButton onClick={clickHandler}>Inherits Locked</FreeButton>
				<FreeButton onClick={clickHandler}>Inherits Locked</FreeButton>
				<FreeButton onClick={clickHandler}>Inherits Locked</FreeButton>
				<FreeButton locked={false} onClick={clickHandler}>Unlocked No Matter what</FreeButton>
			</InfoCard>
		</div>)
	}

	return (
		<div>
			<h1>Permissions</h1>
			You can change weather a component is hidden or visible, or put it in read only mode, based on any input you like (typically the signed in user and their access rights).
			Almost all TouchPoint components will accept a 'locked' and 'hidden' prop. 
			
			<h3>Inherited Permissions</h3>
			Any locked container will also lock all it's children. This is the case no matter how deeply nested the children are.
			If a component is locked by it's parent container, you can override it by setting locked = false. 
			<br/>
			In the example below, the container is locked, aso all content will be locked, except the one button where we intentionally set locked = false. 
			<p></p>
			<Example gist='1b1b190bf3b020c59ca1403aa24c8228'>
				<InnerComponent/>
			</Example>
			
		</div>
	)
}

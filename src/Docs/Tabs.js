import React from 'react'
import Example from '../Components/Example'
import {InfoTabContainer, InfoTab, ControlledTabContainer, InfoCard, FreeButton} from 'touchpoint-ui'
import './TabFix.css'
import { useState } from 'react'
import PropList from '../Components/PropList'


function InnerTabs(props){
	
	const [tabState, setTabState] = useState('tab1')

	function changeTabs() {
		if (tabState === 'tab1') {
			setTabState('tab2')
		} else {
			setTabState('tab1')
		}
	}
	
	return (<ControlledTabContainer defaultTab='tab1' activeTab={tabState}>

		<InfoTab tabID='tab1'>
			<InfoCard stripe>
				Hello from Tab 1
								<FreeButton style={{ marginLeft: '20px' }} onClick={changeTabs}>Switch Tabs</FreeButton>
			</InfoCard>
		</InfoTab>

		<InfoTab tabID='tab2'>
			<InfoCard stripeColor='red'>
				Hello from tab 2
								<FreeButton style={{ marginLeft: '20px' }} purpose='negative' onClick={changeTabs}>Switch Tabs</FreeButton>
			</InfoCard>

		</InfoTab>

	</ControlledTabContainer>)
}

export default function Tabs() {

	return (
		<div>
			<div id="InfoTabContainer">
				<h1>InfoTabContainer</h1>
				A traditional tabbed view. Create an InfoTabContainer and put InfoTabs inside to create tabs. Then put your content in the InfoTabs.
				
				<p></p>
				<Example gist='25480c1689ceec6f00e86f0f632ae157'>
					<InfoTabContainer defaultTab='tab1'>
						
						<InfoTab tabTitle='My Tab 1' tabID='tab1'>
							<InfoCard stripe>
								Hello from Tab 1
							</InfoCard>
							
							<InfoCard stripeColor='red'>
								Tabs are useful
							</InfoCard>
						</InfoTab>
						
						<InfoTab tabTitle='My Second Tab' tabID='tab2'>
							<InfoCard stripe>
								Hello from tab 2!
							</InfoCard>
							
							<InfoCard stripeColor='Green'>
								Look!
							</InfoCard>
						</InfoTab>
						
					</InfoTabContainer>
				</Example>
				
				<PropList title='InfoTabContainer props' items={[
					{ name: 'defaultTab', type: 'string', desc: "Default tabe when the component first renders" },
					{ name: 'locked', type: 'boolean', desc: 'Locks all tabs and their content. You can still open the tabs themselves.' },
					{ name: 'hidden', type: 'boolean', desc: 'Hides the whole tab group completely' },
				]} />
							
			</div>
			
			<div id="ControlledTabContainer">
				<h1>ControlledTabContainer</h1>
				Tab container without any tab header or buttons and minimal style features. Lets you control the open tab yourself through the ActiveTab prop.
				
				<Example gist='19ae5ef59a7f56b698a12b1388767612'>
					<InnerTabs/>
				</Example>
				
				<PropList title='ControlledTabContainer props' items={[
					{ name: 'activeTab', type: 'string', desc: "Name of the tab to display. Usually liked to some state, but I can't tell you what to do! " },
					{ name: 'defaultTab', type: 'string', desc: "Default tabe when the component first renders" },
					{ name: 'locked', type: 'boolean', desc: 'Locks all tabs and their content. You can still open the tabs themselves.' },
					{ name: 'hidden', type: 'boolean', desc: 'Hides the whole tab group completely' },
				]} />
				
			</div>
			
			<div id="InfoTab">
				<h1>InfoTab</h1>
				Use this component to define a tab inside an InfoTabContainer or ControlledTabContainer. Components will stay mounted even when you switch tabs, so they will persist their state as you switch back and forth between them.
				See examples above.
				
				<PropList title = 'InfoTab props' items={[
					{name:'tabID', type:'string', desc: 'Unique identifier for the tab'},
					{name:'tabTitle', type:'string', desc: 'Tab title to be displayed'},
					{name:'locked', type:'boolean', desc: 'Locks the tab contents. You can still open the tab itself'},
					{name:'hidden', type:'boolean', desc: 'Hides the tab completely'},
					{name:'style', type:'object (style)', desc: 'Optional custom styling'},
				]}/>
			</div>
		</div>
	)
}

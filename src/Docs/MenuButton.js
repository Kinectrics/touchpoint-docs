import React from 'react'
import Example from '../Components/Example'
import {MenuButton, InfoCard} from 'touchpoint-ui'
import { useState } from 'react'


function MyCustomMenu(){
	const [value, setValue] = useState(0)
	
	return(
		<div>
			<button onClick={()=>setValue(value+1)}>Increase</button>
			<button onClick={() => setValue(value - 1)}>Decrease</button>
			
			<InfoCard stripe>
				<label>Value =</label>{value}
			</InfoCard>
			
		</div>
	)
}

export default function MenuButtonDocs() {

	return (
		<div>
			<h1>MenuButton</h1>
			Create customizable dropdown menus, with support for nested menus. 
			<br/>
			MenuButtons are similar regular buttons, except they take a menuContent prop (either a component, or some JSX) which becomes a dropdown menu. 
			By default, MenuButtons will blend into their surroundings, but you can pass a 'style' prop to customize them. 
			<br/>
			<br/>
			Menus will break out of any container, even if overflow is hidden.
			<p></p>
			
			<Example gist= '62ea80fac1e40edd1e53ac9127344e14'>
					
				<MenuButton 
					style ={{backgroundColor: 'white', borderRadius: '10px'}}
					menuContent={
						<div>
							<button>Option 1</button>
							<button>Option 2</button>
							<button>Option 3</button>
							<button>Option 4</button>
							
							<MenuButton menuContent={<div>
								<button>More Options</button>
								<button>More Options</button>
								<button>More Options</button>
								<button>More Options</button>
							</div>}>Submenu Time!</MenuButton>
						</div>
					}
				>Open</MenuButton>
			</Example>
			
			Like the example above, putting a menuButton inside the menuContent creates a sub menu.

			<h3>Complex Menu Content</h3>
			You can put anything inside the menu, not just buttons. If you want to use hooks/state in the menuContent, define a component like normal, and pass it to the menuContent like below.
			
			<Example gist='051628434e5ccaee492cc6fa63221963'>
				<MenuButton
					style={{ backgroundColor: 'white', borderRadius: '10px' }}
					menuContent={MyCustomMenu}
				>Complex Menus</MenuButton>
			</Example>
			
		</div>
	)
}

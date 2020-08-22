import React from 'react'
import Example from '../Components/Example'
import Gist from 'react-gist'
import { AppToolbar, MenuButton } from 'touchpoint-ui'
import { Link } from 'react-router-dom'
import PropList from '../Components/PropList'

export default function Core() {

	return (
		<div>
			<h1>Core Components</h1>
			Building blocks for the app. Core components are usually present app-wide and remain on screen for all modules.
			<br/>
			
			<h3 id='AppToolbar'>AppToolbar</h3>
			Remains at the top of the screen, above all modules. Can be used for app-wide settings, user management, or anything else that isn't module-specific. 
			<br/>
			When used with the system API, you can add menus to change themes or open popup dialogs.
			<br/>
			Add this component as a direct Child of your <Link to='/Docs/CreateApp'>TouchPointApp</Link> component.
			<div style={{height:'20px'}}/>
			
			<PropList
				items={[
					{name: 'Label', type: 'String', desc: 'Label for the screen'},
				]}
			/>
			
			<Example gist='2b6c8d17a80500f162a97c12d4d23d32'>
				<AppToolbar label='TouchPoint Toolbar'>
					<MenuButton menuContent={<div>
						<button>Sign In</button>
						<button>Sign Out</button>
						<button>About</button>
					</div>}>User</MenuButton>
					
					<MenuButton menuContent={<div>
						<button>Theme</button>
						<button>Account</button>
						<button>View</button>
					</div>}>Settings</MenuButton>
					
					<MenuButton menuContent={<div>
						<button>Option</button>
						<button>More</button>
						<button>View</button>
					</div>}>Example</MenuButton>
				</AppToolbar>
			</Example>
			
			
			<h3>AppFooter</h3>
			Similar to AppToolbar but remains at the bottom of the screen instead of the top. 
			
		</div>
	)
}

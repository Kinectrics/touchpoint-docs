import React from 'react'
import Example from '../Components/Example'
import Gist from 'react-gist'

export default function SettingsAPI() {
	return (
		<div>
			<h3>Settings API</h3>
			<p>
				The settings API allows you to save and retrieve user settings parts of your app, like their preffered table column layout. 
				You can save settings using your method of choice (localstorage, SQL, or anything else).
			</p>
			
			<h3>Saving settings for a component</h3>
			<p>
				As long as your app has settings configured, all you have to do is assign a 'settingsID' prop to a supported component, and it will start saving and applying user's settings.
				<br/>
				Every time a user changes their settings (eg. they show or hide a table column) their new settings will be saved, and applied next time they launch the app. 
			</p>
			
			<p>Try out the example below. Change the column settings and reload the page.</p>
			
			<Example gist=''>
				Table Example Here
			</Example>
			
			<h3>Adding settings support to your app</h3>
			<p><small> If you are developing a module for an app that already has settings support, you can skip this section.</small><br/>
			</p>
			
			<p>
				Settings are saved as Settings Tokens, which are JSON strings that define the settings for a given component. 
					
				You have to define a function to save and a function to retrieve settings. This will enable settings in all modules within your app. 
					
			</p>
			<p>
			<b>The functions you need to provide are: </b>
			
			</p>
			
			<ul>
				<li>saveSettings( settingsID, settingsToken ) -  Takes a key value pair and stores them, to be retrieved later.</li>
				<br />
				<li>getSettings( settingsID ) - Takes a settingsID key and retrieves the settingsToken from your database. Returns that token.</li>
			</ul>
			
			<br/>
			<p>
				You pass these to the TouchPointApp component as saveSettings and getSettings props. In the example below we are using localstorage to store the data. 
			</p>
			
			<Gist id='5b5b61642814cbe290967d02972ab60f'/>
			
			<h3>Saving settings for different users</h3>
			<p>
				If your app has multiple useres, you can save the username along with the settings token, and retrieve settings for the active user when requested. 
			</p>
			
			<Gist id = 'c88e613012c566772c9678f42d95ec5c'/>
		
		</div>
	)
}

import React, {useState} from 'react'
import useScreenSize from '../Hooks/UseScreenSize'
import './DocsLayout.css'
import NavBar from '../Components/NavBar'
import SideBar from '../Components/SideBar'
import {Switch, Route} from 'react-router-dom'
import WhiteFallback from '../Components/WhiteFallback'
import {HashLink as Link} from 'react-router-hash-link'
	
export default function Layout_Docs(props){
	
	const { narrow } = useScreenSize()
	const [sideBarOpen, setSidebBarOpen] = useState(!narrow)
	
	return (
		<div className = 'Docs'>
			<NavBar
				subTitle='Docs'
				setSideBarOpen={setSidebBarOpen}
				sideBarOpen={sideBarOpen}
				title = {props.title}
			/>
			
			<div className="docsContainer">
				
				<SideBar open={sideBarOpen}>
					
					<h3>Getting Started</h3>
					<Link to='/Docs/CreateApp' className='shiftLeft'>Create a new app</Link>
					<Link to='/Docs/CreateModule' className='shiftLeft'>Create a module</Link>
					<Link to='/Docs/Permissions' className='shiftLeft'>User Permissions</Link>
					<Link to='/Docs/SystemAPI' className='shiftLeft'>System API</Link>
					<Link to='/Docs/SettingsAPI' className='shiftLeft'>Settings API</Link>
					
					<h3>Components</h3>
					
					<h4>Core</h4>
					<Link to='Docs/Core#AppToolbar'>AppToolbar</Link>
					<Link to='Docs/Core#AppFooter'>AppFooter</Link>
					<Link to='Docs/Core#AppDrawer'>AppDrawer</Link>
					
					<h4>Containers</h4>
					<Link to='/Docs/SplitScreen'>SplitScreen</Link>
					<Link to='/Docs/InfoCard'>InfoCard</Link>
					<Link to='/Docs/Tabs#InfoTab'>InfoTab</Link>
					<Link to='/Docs/Tabs#InfoTabContainer'>InfoTabContainer</Link>
					<Link to='/Docs/Tabs#ControlledTabContainer'>ControlledTabContainer</Link>
					<Link to='/Docs/Dock'>Dock</Link>
					<Link to='/Docs/ControlBar'>ControlBar</Link>
					
					<h4>Inputs</h4>
					<Link to='/Docs/Text#TextBox'>TextBox</Link>
					<Link to='/Docs/Text#CommentBox'>CommentBox</Link>
					<Link to='/Docs/Text#RadioGroup'>SearchBar</Link>
					<Link to='/Docs/Select#ComboBox'>ComboBox</Link>
					<Link to='/Docs/Select#CheckBox'>CheckBox</Link>
					<Link to='/Docs/Select#CheckButton'>CheckButton</Link>
					<Link to='/Docs/Radio#RadioGroup'>RadioGroup</Link>
					<Link to='/Docs/Buttons#FreeButton'>FreeButton</Link>
					<Link to='/Docs/Buttons#ConfirmButton'>ConfirmButton</Link>
					<Link to='/Docs/Buttons#CoreButton'>CoreButton</Link>
					
					<h4>Display</h4>
					<Link to='/Docs/MainTable'>MainTable</Link>
					<Link to='/Docs/MenuButton'>MenuButton</Link>
					<Link to='/Docs/Popups'>PopupCard</Link>
					
					<h4>Hooks</h4>
					<Link to='/Docs/useDataset'>useDataset</Link>
					<Link to='/Docs/SystemAPI'>useSystem</Link>
					
				</SideBar>

				<div 
					className="docsContent"
					style={{
						width: sideBarOpen ? 'calc(100% - 300px)' : '100%'
					}}				
				>
					<React.Suspense fallback={WhiteFallback}>
						
						<Switch>
							
							<Route path='/Docs/CreateApp' render={() => {
								const Comp = React.lazy(() => import('../Docs/CreateApp'))
								return <Comp />
							}} />

							<Route path='/Docs/CreateModule' render={() => {
								const Comp = React.lazy(() => import('../Docs/CreateModule'))
								return <Comp />
							}} />

							<Route path='/Docs/Permissions' render={() => {
								const Comp = React.lazy(() => import('../Docs/Permissions'))
								return <Comp />
							}} />

							<Route path='/Docs/SystemAPI' render={() => {
								const Comp = React.lazy(() => import('../Docs/SystemAPI'))
								return <Comp />
							}} />

							<Route path='/Docs/SettingsAPI' render={() => {
								const Comp = React.lazy(() => import('../Docs/SettingsAPI'))
								return <Comp />
							}} />

							<Route path='Docs/Core' render={() => {
								const Comp = React.lazy(() => import('../Docs/Core'))
								return <Comp />
							}} />

							<Route path='/Docs/SplitScreen' render={() => {
								const Comp = React.lazy(() => import('../Docs/SplitScreen'))
								return <Comp />
							}} />

							<Route path='/Docs/InfoCard' render={() => {
								const Comp = React.lazy(() => import('../Docs/InfoCard'))
								return <Comp />
							}} />

							<Route path='/Docs/Tabs' render={() => {
								const Comp = React.lazy(() => import('../Docs/Tabs'))
								return <Comp />
							}} />

							<Route path='/Docs/Dock' render={() => {
								const Comp = React.lazy(() => import('../Docs/Dock'))
								return <Comp />
							}} />

							<Route path='/Docs/ControlBar' render={() => {
								const Comp = React.lazy(() => import('../Docs/ControlBar'))
								return <Comp />
							}} />

							<Route path='/Docs/Text' render={() => {
								const Comp = React.lazy(() => import('../Docs/Text'))
								return <Comp />
							}} />

							<Route path='/Docs/Select' render={() => {
								const Comp = React.lazy(() => import('../Docs/Select'))
								return <Comp />
							}} />

							<Route path='/Docs/Buttons' render={() => {
								const Comp = React.lazy(() => import('../Docs/Buttons'))
								return <Comp />
							}} />

							<Route path='/Docs/MainTable' render={() => {
								const Comp = React.lazy(() => import('../Docs/MainTable'))
								return <Comp />
							}} />

							<Route path='/Docs/MenuButton' render={() => {
								const Comp = React.lazy(() => import('../Docs/MenuButton'))
								return <Comp />
							}} />

							<Route path='/Docs/Popups' render={() => {
								const Comp = React.lazy(() => import('../Docs/Popups'))
								return <Comp />
							}} />

							<Route path='/Docs/useDataset' render={() => {
								const Comp = React.lazy(() => import('../Docs/useDataset'))
								return <Comp />
							}} />

							<Route path='/Docs/SystemAPI' render={() => {
								const Comp = React.lazy(() => import('../Docs/SystemAPI'))
								return <Comp />
							}} />
							
							
							
						</Switch>
					</React.Suspense>
					
					<div className="gap" style={{ height: '100px' }}></div>
				</div>
				
			</div>
			
			
			
			
		</div>
	)
}

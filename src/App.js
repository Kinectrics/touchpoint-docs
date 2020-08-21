import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Fallback from './Components/Fallback'

const Home = React.lazy(()=>import('./Home'))
const Docs = React.lazy(()=>import('./Layouts/DocsLayout'))

export default function App() {
	
	return (
		<React.Suspense fallback = {Fallback}>
			<Router>
				
				<Switch>
					<Route path='/Docs' render={() => <Docs/>}/>
					<Route path='/' render={()=><Home/>}/>
				</Switch>
				
			</Router>
		</React.Suspense>
	)
}


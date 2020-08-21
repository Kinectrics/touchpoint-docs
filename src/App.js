import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Fallback from './Components/Fallback'

const Home = React.lazy(()=>import('./Home'))
const Docs = React.lazy(()=>import('./Layouts/DocsLayout'))

export default function App() {
	
	return (
		<React.Suspense fallback = {Fallback}>
			<BrowserRouter>
				
				<Switch>
					<Route path='/Docs' render={() => <Docs/>}/>
					<Route path='/' render={()=><Home/>}/>
				</Switch>
				
			</BrowserRouter>
		</React.Suspense>
	)
}


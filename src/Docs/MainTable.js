import React from 'react'
import Example from '../Components/Example'
import Gist from 'react-gist'
import {MainTable, useDataset, FreeButton, InfoCard} from 'touchpoint-ui'
import PropList from '../Components/PropList'
import Note from '../Components/Note'


function Inner(){
	
	const headers = [
		{ headerID: 'id', displayName: 'ID' },
		{ headerID: 'firstName', displayName: 'First Name', width: 300, required: true },
		{ headerID: 'lastName', displayName: 'Last Name', width: 300 },
	]

	const data = [
		{ id: 1, firstName: 'Youssof', lastName: 'Fahmy' },
		{ id: 2, firstName: 'Javaagar', lastName: 'Srithar' },
		{ id: 3, firstName: 'Sid', lastName: 'Das' },
		{ id: 4, firstName: 'Jeff', lastName: 'Heighet' },
		{ id: 5, firstName: 'Olivia', lastName: 'Krucko Gorski' },
	]

	return (
		<MainTable
			headers={headers}
			data={data}
		/>
	)
}

function statusStyle(cellValue) {
	if (cellValue === 'Away') {
		return { backgroundColor: 'red', color: 'white' }

	} else if (cellValue === 'Online') {
		return { backgroundColor: '#00cc00', color: 'white' }

	} else {
		return { backgroundColor: 'grey', color: 'white' }
	}

}

//
function StyleInner() {

	const headers = [
		{ headerID: 'firstName', displayName: 'Name', width: 300},
		{ headerID: 'status', displayName: 'Status', styling: statusStyle, width: 150},
	]

	const data = [
		{ status: 'Away', firstName: 'Youssof', lastName: 'Fahmy' },
		{ status: 'Online', firstName: 'Javaagar', lastName: 'Srithar' },
		{ status: 'Away', firstName: 'Sid', lastName: 'Das' },
		{ status: 'Online', firstName: 'Jeff', lastName: 'Heighet' },
		{ status: 'Offline', firstName: 'Olivia', lastName: 'Krucko Gorski' },
	]

	return (
		<MainTable
			headers={headers}
			data={data}
		/>
	)
}

//
function InnerDataset(){
	
	const headers = [
		{ headerID: 'firstName', displayName: 'Name', width: 300 },
		{ headerID: 'status', displayName: 'Status', styling: statusStyle, width: 150 },
		{ headerID: 'score', displayName: 'Score', width: 100, styling:()=>{
			return{textAlign: 'center', fontWeight:'300'}
		}},
	]
	
	const myDataset = useDataset( ()=>[
		{ status: 'Away', firstName: 'Youssof', score: Math.round(Math.random() * 10), team: 'Blue Team' },
		{ status: 'Online', firstName: 'Javaagar', score: Math.round(Math.random() * 10), team: 'Red Team' },
		{ status: 'Away', firstName: 'Sid', score: Math.round(Math.random() * 10), team: 'Blue Team' },
		{ status: 'Online', firstName: 'Jeff', score: Math.round(Math.random() * 10), team: 'Green Team' },
		{ status: 'Offline', firstName: 'Olivia', score: Math.round(Math.random() * 10), team: 'Green Team' },
		
	], {primaryKey: 'firstName'})
	
	return (<div>
		
		<FreeButton style={{marginLeft: '20px'}} onClick={myDataset.refresh}>Refresh</FreeButton>
		<FreeButton style={{marginLeft: '20px'}} onClick={()=>{myDataset.selectRecord('Olivia')}}>Select Olivia</FreeButton>
		
		<InfoCard stripe title = 'ScoreBoard'>
			<label>Name: </label> {myDataset.getActiveRecord().firstName} <br />
			<label>Score: </label> {myDataset.getActiveRecord().score} <br />
			<label>Team: </label> {myDataset.getActiveRecord().team} 
		</InfoCard>
		
		<MainTable
		headers={headers}
		data={myDataset}
		/>
		
	</div>)
}

//
function InnerEdit() {

	const headers = [
		{ headerID: 'firstName', displayName: 'Name', width: 300 },
		{ headerID: 'status', displayName: 'Status', styling: statusStyle, width: 150 },
		{ headerID: 'score', displayName: 'Score', width: 150, type: 'number', onEdit: (meta)=>{
			if(meta.cellValue == 1){throw new Error()}
			return meta.cellValue >= 3
		}},
	]

	const myDataset = useDataset(() => [
		{ status: 'Away', firstName: 'Youssof', score: Math.round(Math.random() * 10)},
		{ status: 'Online', firstName: 'Javaagar', score: Math.round(Math.random() * 10)},
		{ status: 'Away', firstName: 'Sid', score: Math.round(Math.random() * 10)},
		{ status: 'Online', firstName: 'Jeff', score: Math.round(Math.random() * 10)},
		{ status: 'Offline', firstName: 'Olivia', score: Math.round(Math.random() * 10)},

	], { primaryKey: 'firstName' })

	return (<div>


		<MainTable
			headers={headers}
			data={myDataset}
		/>

	</div>)
}

function NestMe(props) {
	return(<div>
		<FreeButton>{props.dataRow.firstName}</FreeButton>
	</div>)
}


//
function InnerNested() {

	const headers = [
		{ headerID: 'id', displayName: 'ID' },
		{ headerID: 'firstName', displayName: 'First Name', width: 300, required: true },
		{ headerID: 'lastName', displayName: 'Last Name', width: 300 },
	]

	const myData = useDataset(()=>[
		{id: 1, firstName: 'Youssof', lastName: 'Fahmy'},
		{id: 2, firstName: 'Javaagar', lastName: 'Srithar'},
		{id: 3, firstName: 'Sid', lastName: 'Das'},

	], {primaryKey: 'id'})
	
	return (
		<MainTable
			headers={headers}
			data={myData}
			nestedComponent={NestMe}
		/>
	)
}

//
export default function MainTableDocs() {
	
	return (
		<div>
			<h1>MainTable</h1>
			Interactive table component for displaying data. Supports search, sort and filter.
			<br/>
			To create a table, you need to define table headers, and provide the table data (array of row objects). 
			
			<h3>Table Headers</h3>
			An array of of header options like the example below. You can pass these to the MainTable components as a 'headers' prop.
			<p></p>
			
			<Example gist='bbf3255427ad8ad7fcfe6eb6b7600989'>
				<Inner/>
			</Example>
			<p></p>
			
			<PropList title='Available options for headers' items={[
				{name:'headerID (required)', type:'string', desc:'The name of the field to display in that column'},
				{name:'displayName (required)', type:'string', desc:'The title to show at the top of the column'},
				{name:'width', type:'integer', desc:'Width of the column in pixels. 100 by default'},
				{name:'type', type:'string', desc:'The type of data in the colum. String, Number, Date, or Boolean. String by default'},
				{name:'required', type:'boolean', desc:'If true, the column cannot be hidden. False by default'},
				{name:'styling', type:'function( cellValue, rowValue ) returning object', desc:'Conditional formatting. See example below'},
				{name:'onEdit', type:'function( metaData ) returning boolean', desc:'Callback when cell value is edited. See example below'},
				{name:'onClick', type:'function( metaData )', desc:'Callback when cell is clicked'},
				{name:'icon', type:'function( cellValue, rowValue ) returning FontAwesome icon', desc:'COMING SOON!'},
			]}/>
			
			<Note>
				Note: onEdit functions are only available when using datasets. See dataset section below for more.
			</Note>
			
			<h3>Styling (Conditional Formatting)</h3>
			Apply styles to a column based on the contents of a cell (or the entire row). <br/>
			A styling function can be set as a header property. This function will take in 2 values, the cell content, and the row value. 
			It returns an inline style object to apply to the cell. <br/>
			In the example below, we are styling the status based on the cell content.
			
			<Example gist='841dc175f4860022b63a51348bb79ac0'>
				<StyleInner />
			</Example>
			
			<h3>Using dynamic data - useDataset hook</h3>
			If you are using data from a dynamic source, you can use this hook to make fetching and refreshing the data easier. 
			This will also let you create editable table cells that validate and update the data. 
			<p></p>
			
			<PropList title='useDataset parameters' items={[
				{name:'fetchFunction (required)', type: 'async function() returning an array of row objects', 
				desc: 'The function that fetches your data from its source. Runs when the dataset is created, and when refershed'},
				
				{name:'options', type: 'object', desc: 'A list of options for the dataset'},
				
				{type: 'primaryKey (string)', desc: 'Field name that will be unique for every row. Used when editing data and selcting rows'},
				{type: 'defaultValue (Array)', desc: 'By default, the dataset contains an empty array until it fetches. You can change this default value'},
				
			]}/>
			
			<p id='useDataset'></p>
			
			useDataset returns a dataset object with the following properties. You can pass this object to a MainTable in plave of a data array. 
			
			<PropList title=' ' items={[
				{name: 'read( )', type: 'function', desc: 'Returns a state variable with the data in the dataset. Updates when you refresh.' },
				{name: 'refresh( )', type: 'function', desc: 'Runs the fetchfunction again, and uopdates the data if successful. Any components reading from the dataset will update also.' },
				{name: 'getActiveRecord( )', type: 'function', desc: 'Returns a state variable containing the dataset active record. Updates on refresh, or when a record is selected.' },
				{name: 'selectRecord( key )', type: 'function', desc: 'Sets the active record by matching the key provided to the primaryKey field' },
				{name: 'status', type: 'string', desc: 'State variable containing the status of the dataset (Pending, Resolved, or Rejected)' },
			]} />
			
			Normally you would make some kind of API call to fetch the data, but in the example below, the fetch function just generates some random scores that change every time you refresh.
			<br/>
			You can use getActiveRecord to display data about the selected row that isn't part of the table, like 'team' below. 
			<p></p>
			
			<Example gist= 'e107f9c27a8c916261029a789670c826'>
				<InnerDataset />
			</Example>
			
			<h3>Editable Data</h3>
			Using the header's onEdit event, you let users type values directly into the table. The onEdit callback function is a metadata object with the properties below. 
			This function will return true if the new value entered is acceptable, and false if not. If it's not acceptable, the cell value will be reverted to what it was before. 
			The function can be asynchronous, the table will await it before applying any changes. 
			If the function returns nothing, the value is accepted. If the function throws an error, the value is rejected and the changes reversed.  
			
			<PropList title = 'Metadata object properties' items={[
				{ name: 'cellValue', desc: 'the cellvalue that the user entered', type:'object' },
				{ name: 'row', desc: 'the old cell value before the user edited it', type:'object' },
				{ name: 'oldCellValue', desc: '', type:'object' },
				{name:'oldRow', desc:'The old value of the row, before it was edited', type:'object' },
				{name:'setRow( newRow )', desc:'A function you can use to edit the entire row. Worke like a set function from useState hooks', type:'function( object )' },
			]}/>
			
			<p></p>
			In the example below, the score field will not accept any value less than 3, and will throw an error if you enter 1. 
			Note that this check is only applied when the user enters a value, not when the data is fetched for the first time or refreshed. 
			Also, since the field has a type of 'number', any value that isn't a number is automatically rejected.
			
			<p></p>
			<Example gist= 'c53c57e220a0581655514023cc712a0c'>
				<InnerEdit/>
			</Example>
			
			<h3>Nested Components</h3>
			You can embed components inside each row of the table by passing a component to the nestedComponent prop. This component will receive the props:
			<PropList title = ' ' items={[
				{name:'row', desc:'The row object', type:'object'},
				{name:'setRow', desc:'function that lets you modify the parent row. Works like the set function from useState', type:'function( newRow )'},
				{name:'...nestedProps', desc:'You can pass an object to the MainTable prop called nestedProps, these will all be passed to the nested component', },
			]}/>
			
			<Example gist='6fdb92a3952349a34a6fdcaeafdceee3'>
				<InnerNested/>
			</Example>
			
			<h3>MainTable props</h3>
			<PropList title =' ' items={[
				{name:'headers', type:'array[ objects ]', desc:'Header objects - see table above for available options'},
				{name:'data', type:'array[ objects ] or dataset object', desc:'Array of row object'},
				{name:'locked', type:'boolean', desc:'Disable edits for all columns'},
				{name:'pageSize', type:'integer', desc:'Number of rows per page. 100 by default'},
				{name:'searchable', type:'boolean', desc:'If true, the table will respond to searchbars in the module'},
				{name:'noSort', type:'boolean', desc:'If true, sort will be disabled'},
				{name:'noFilter', type:'boolean', desc:'If true, filtering will be disabled'},
				{name:'noActive', type:'boolean', desc:'If true, disables clicking to select a record'},
				{name: 'settingsID', type: 'string', desc: 'Unique identifier for the table to save settings (see settings API for more)'},
				{name: 'nestedComponent', type: 'component object', desc: 'A component to be nested inside each row'},
				{name: 'nestedProps', type: 'object', desc: 'Props to pass to the nested components'},
			]}/>
			
		</div>
	)
	
}

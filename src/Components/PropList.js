import React from 'react'
import propTypes from 'prop-types'
import './PropList.css'

export default function PropList(props) {
	return (
		<div className='PropList'>
			<h5>{props.title ? props.title : 'Props'}</h5>
			
			<table>
				<tbody>
					{props.items.map((p, i)=>{
						return <tr key = {i}>
							<td className='name'>{p.name}</td>
							<td className='type'>{p.type}</td>
							<td className='desc'>{p.desc}</td>
						</tr>
					})}
				</tbody>
			</table>
		</div>
	)
}

//
PropList.propTypes={
	items: propTypes.arrayOf(propTypes.shape({
		name: propTypes.string,
		type: propTypes.string,
		desc: propTypes.string,
	})).isRequired,
	title: propTypes.string,
}
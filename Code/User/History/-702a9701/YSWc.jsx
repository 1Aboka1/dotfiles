import React, { useState } from 'react'
import { SearchWindow } from '../components/SearchWindow'
import { NavBar } from '../components/NavBar'

export const Search = () => {
	const [signWindowShown, setSignWindowShown] = useState(false)
		const [signType, setSignType] = useState('');
		
		const handleSignClick = (type) => () => {
			setSignType(type)
			setSignWindowShown(!signWindowShown)
		}

  
	return (
		<div>
			<NavBar handleSignClick={handleSignClick}/>
			<SearchWindow/>
		</div>
	)
}

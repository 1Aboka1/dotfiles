import React, { useState } from 'react'
import { SearchWindow } from '../components/SearchWindow'
import { NavBar } from '../components/NavBar'
import { SignInUp } from '../components/SignInUp'

export const Search = () => {
	const [signWindowShown, setSignWindowShown] = useState(false)
		const [signType, setSignType] = useState('');
		
		const handleSignClick = (type) => () => {
			setSignType(type)
			setSignWindowShown(!signWindowShown)
		}

  
	return (
		<div>
			<div className=''>
					{signWindowShown ? <SignInUp type={signType}/> : (null)}
			</div>
			<div>
				<NavBar handleSignClick={handleSignClick}/>
				<SearchWindow/>
			</div>
		</div>
	)
}

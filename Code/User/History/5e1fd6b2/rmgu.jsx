import React, { useState } from 'react'
import { SingleProductGeneral } from '../components/SingleProduct/SingleProductGeneral'
import { SignInUp } from '../components/SignInUp'
import { NavBar } from '../components/NavBar'

export const SingleProduct = () => {
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
                <SingleProductGeneral/>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import { SingleProductGeneral } from '../components/SingleProduct/SingleProductGeneral'
import { SignInUp } from '../components/SignInUp'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'

export const SingleProduct = () => {
    const [signWindowShown, setSignWindowShown] = useState(false)
	const [signType, setSignType] = useState('')
	
	const handleSignClick = (type) => () => {
		setSignType(type)
		setSignWindowShown(!signWindowShown)
	}

    return (
        <div>
            <div className=''>
                {signWindowShown ? <SignInUp type={signType}/> : (null)}
            </div>
            <div className={'transition ease-in-out duration-300' + (signWindowShown ? ' brightness-75 pointer-events-none' : '')}>
                <NavBar handleSignClick={handleSignClick}/>
                <SingleProductGeneral/>
                <Footer/>
            </div>
        </div>
    )
}

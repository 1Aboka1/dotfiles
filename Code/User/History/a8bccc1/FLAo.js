import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { Home } from './pages/Home'
import { SingleProduct } from './pages/SingleProduct'
import { Search } from './pages/Search'
import { signWindowShownContext, signTypeContext } from './SignInUpWindowContext'
import { useState } from 'react'

function App() {	
	const [signWindowShownState, setSignWindowShownState] = useState(false)
	const [signTypeState, setSignTypeState] = useState('n')
	
    return (
		<signTypeContext.Provider value={[ signTypeState, setSignTypeState ]}>
		<signWindowShownContext.Provider value={[ signWindowShownState, setSignWindowShownState ]}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home/>}>
						<Route index element={<Home/>}/>
					</Route>
					<Route path="product_item">
						<Route path=":productID" element={<SingleProduct/>}/>
					</Route>
					<Route path="search" element={<Search/>}/>
				</Routes>
			</BrowserRouter>
		</signWindowShownContext.Provider>
		</signTypeContext.Provider>
    )
}

export default App

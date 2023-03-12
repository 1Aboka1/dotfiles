import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { Home } from './pages/Home'
import { SingleProduct } from './pages/SingleProduct'
import { Search } from './pages/Search'
import { signWindowShown, signType } from './SignInUpWindowContext'

function App() {	
    return (
		<signWindowShown.Provider value='Sign window shown state'>
		<signType.Provider value='Sign type state'>
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
		</signType.Provider>
		</signWindowShown.Provider>
    )
}

export default App

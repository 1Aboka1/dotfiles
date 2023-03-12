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
		<BrowserRouter>
			<Routes>
					<Route path="/" element={<Home/>}>
					<signWindowShown.Provider value='signWindowShown context'>
						<Route index element={<Home/>}/>
					</signWindowShown.Provider>
					</Route>
					<Route path="product_item">
						<Route path=":productID" element={<SingleProduct/>}/>
					</Route>
					<Route path="search" element={<Search/>}/>
			</Routes>
		</BrowserRouter>
    )
}

export default App

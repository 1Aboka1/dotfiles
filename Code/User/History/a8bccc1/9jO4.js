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
				<signWindowShown.Provider>
					<Route path="/" element={<Home/>}>
						<Route index element={<Home/>}/>
					</Route>
					<Route path="product_item">
						<Route path=":productID" element={<SingleProduct/>}/>
					</Route>
					<Route path="search" element={<Search/>}/>
				</signWindowShown.Provider>
			</Routes>
		</BrowserRouter>
    )
}

export default App

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
		<signWindowShown.Provider>
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
		</signWindowShown.Provider>
    )
}

export default App

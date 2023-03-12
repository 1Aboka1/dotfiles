import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { Home, SingleProduct, Search } from './pages/Home'

function App() {	
    return (
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
    )
}

export default App

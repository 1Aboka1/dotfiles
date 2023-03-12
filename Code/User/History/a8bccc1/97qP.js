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
					<Route path="/" element={<signWindowShown.Provider><Home/></signWindowShown.Provider>}>
						<Route index element={<signWindowShown.Provider value='signWindowShown context'><Home/></signWindowShown.Provider>}/>
					</Route>
					<Route path="product_item">
						<Route path=":productID" element={<signWindowShown.Provider><SingleProduct/></signWindowShown.Provider>}/>
					</Route>
					<Route path="search" element={<signWindowShown.Provider><Search/></signWindowShown.Provider>}/>
			</Routes>
		</BrowserRouter>
    )
}

export default App

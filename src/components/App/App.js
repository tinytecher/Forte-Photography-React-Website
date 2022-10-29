import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import MaternityPage from "../MaternityPage/MaternityPage";
import WeddingPage from "../WeddingPage/WeddingPage";

function App() {
	return (
		<Router className='App'>
			<Routes>
				<Route path='/' element={<HomePage />}></Route>
				<Route
					path='/maternity'
					element={<MaternityPage />}
				></Route>
				<Route
					path='/wedding'
					element={<WeddingPage />}
				></Route>
			</Routes>
		</Router>
	);
}

export default App;

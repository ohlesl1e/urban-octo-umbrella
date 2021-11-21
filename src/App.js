import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Result from './Result'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path='/urban-octo-umbrella' element={<Home />} />
                <Route path='/urban-octo-umbrella/result' element={<Result />} />
            </Routes>
        </div>
    );
}

export default App;

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import Homepage from "./pages/Homepage.tsx"
import DrinksPage from "./pages/DrinksPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import Loginpage from "./pages/Loginpage.tsx";

function App() {

    return (
        <>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<Loginpage />} />
                        <Route path='/home' element={<Homepage />}/>
                        <Route path='/drinks' element={<DrinksPage />}/>
                        <Route path='/*' element={<NotFoundPage />}/>

                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App

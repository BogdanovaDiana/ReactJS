import "./App.css"
import "./components/header/elements/search/search.css"
import {Header} from "./components/header/header";
import {Footer} from "./components/footer/footer";
import {Main} from "./components/main/main";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import {useCallback, useState} from "react";
import {Provider} from "react-redux";
import {store} from "./store"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {AddEditMovie} from "./components/form/add-edit-movie/add-edit-movie";
import {NotFound} from "./components/main/not-found/not-found";

export const App = () => {
    const [cardId, setCardId] = useState();
    const useToggle = (initialValue = false) => {
        const [flag, setFlag] = useState(initialValue);
        const toggle = useCallback(() => setFlag(!flag), [flag])

        return [flag, toggle];
    }
    const [showDetails, setShowDetails] = useToggle();
    const MoviesApp = () => (
        <div className="App">
            <ErrorBoundary>
                <Header showDetails={showDetails} setShowDetails={setShowDetails} cardId={cardId}/>
                <br/>
                <Main showDetails={setShowDetails} updateCardId={setCardId}/>
                <Footer/>
            </ErrorBoundary>
        </div>
    )

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Navigate to="/search"/>}/>
                    <Route exact path='/search' element={<MoviesApp/>}/>
                    <Route path={`/search/:searchQuery`} element={<MoviesApp/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

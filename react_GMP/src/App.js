import "./App.css"
import "./components/header/elements/search/search.css"
import {Header} from "./components/header/header";
import {Footer} from "./components/footer/footer";
import {Main} from "./components/main/main";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import {useCallback, useState} from "react";
import {Provider} from "react-redux";
import {store} from "./store"

export const App = () => {
    const [cardId, setCardId] = useState();
    const useToggle = (initialValue = false) => {
        const [flag, setFlag] = useState(initialValue);
        const toggle = useCallback(() => setFlag(!flag), [flag])

        return [flag, toggle];
    }
    const [showDetails, setShowDetails] = useToggle();

    return (
        <Provider store={store}>
            <div className="App">
                <ErrorBoundary>
                    <p>Hello world</p>
                    <Header showDetails={showDetails} setShowDetails={setShowDetails} cardId={cardId}/>
                    <br/>
                    <Main showDetails={setShowDetails} updateCardId={setCardId}/>
                    <Footer/>
                </ErrorBoundary>
            </div>
        </Provider>
    );
}

import "./App.css"
import "./components/header/elements/search/search.css"
import {Header} from "./components/header/header";
import {Footer} from "./components/footer/footer";
import {Main} from "./components/main/main";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import {AddMovie} from "./components/form/add-movie/add-movie";
import {EditMovie} from "./components/form/edit-movie/edit-movie";

export const App = () => {
    return (
        <div className="App">
            <ErrorBoundary>
                <Header/>
                <br/>
                <Main/>
                <Footer/>
            </ErrorBoundary>
        </div>
    );
}

import {Logo} from "../logo/logo";
import {Search} from "./elements/search/search";
import '../../App.css'
import './header.css'

export const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="row">
                <div className="col-9">
                    <div className="logo">
                        <Logo/>
                    </div>
                </div>
                <div className="col-sm">
                    <button className="btn btn-secondary add-btn">+ ADD MOVIE</button>
                </div>
            </div>
            <Search/>
        </div>
    )
}


import "./Header.css";
import logo from "../../assets/favicon.ico";


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light bg-primary">
            <div className="container-fluid">
                <a href="/" className="navbar-brand me-5 pl-3">
                    <img src={logo} alt="" />
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
                        <li className="me-5 pl-3">
                            <a href="/" className="btn btn-info h-100" >Orders</a>
                        </li>
                        <li className="me-5 pl-3">
                            <a href="/types" className="btn btn-info h-100" to={"/types"}>Types</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
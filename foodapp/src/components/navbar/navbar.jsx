import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";
import Cart from "../cart/cart.jsx";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
    function openSideBar() {
        const event = new CustomEvent("openSideBar");
        window.dispatchEvent(event);
    }

    return (
        <div className="navbar">
            <div>
                <picture>
                    <Link to="/">
                        <img src={logo} alt="logo" className="logo" />
                    </Link>
                </picture>
            </div>

            {props.showMenu ? (
                <div className="menu">
                    <Link to="/historic">Histórico</Link>
                    <button className="btn btn-red" onClick={openSideBar}>
                        <FontAwesomeIcon
                            className="icon icon-white"
                            icon={faBagShopping}
                        />
                        Sacola
                    </button>
                    <Cart />
                </div>
            ) : null}
        </div>
    );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (

            <nav className="navbar navbar-light bg-success">
                <form className="container-fluid justify-content-start">
                    <Link to="/">
                        <button className=" m-3 btn btn-dark me-2" type="button">
                            <i class="bi bi-house"></i> Home
                        </button>
                    </Link>
                    <Link to="/tasks">
                        <button className=" m-3 btn btn-sm btn-outline-dark" type="button">
                            <i class="bi bi-card-checklist"></i> Lista zadań
                        </button>
                    </Link>
                    <Link to="/tictac">
                        <button className=" m-3 btn btn-sm btn-outline-dark" type="button">
                            <i class="bi bi-x-circle"></i> Kółko krzyżyk
                        </button>
                    </Link>
                    <Link to="/gallery">
                        <button className=" m-3 btn btn-sm btn-outline-dark" type="button">
                            <i class="bi bi-grid-3x3-gap"></i> Galeria
                        </button>
                    </Link>

                </form>
            </nav>

        )

    }
}

export default NavBar;
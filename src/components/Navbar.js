import React from 'react'
import {Link} from 'react-router-dom'
 const Navbar=(props)=>  {

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
                    <Link className="navbar-brand" to="/">
                        <img src="newspaper.png" width="30" height="30" className="d-inline-block align-top" alt="News-monkey-logo" />
                     <strong> NewsMonkey</strong>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">

                        
                                <Link className="nav-link" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/"> General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health">  Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </li>

                        </ul>
                    </div>
                </nav>



            </div>
        )
    }
    export default Navbar;



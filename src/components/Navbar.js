import React from 'react'


const Navbar = () => {
    return (
        <div>
            <header>

                <nav class="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
                    <div class="container">
                        <a class="navbar-brand" href="#!"><img src='images/logo.png' /></a>
                        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
                            data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <i class="fas fa-bars"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto" >
                                <li class="nav-item">
                                    <a class="nav-link" href="#!">COMPNAY</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#!">SERVICES</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#!">BLOG</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#!">CAREER</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#!">CONTACT US</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
                <section>

                </section>

            </header>
        </div>
    )
}
export default Navbar

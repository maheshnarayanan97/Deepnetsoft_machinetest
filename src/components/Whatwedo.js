import React from 'react'

const Whatwedo = () => {
    return (
        <div style={{ backgroundColor: "#ff3300", height: "906px" }}>
            <h1 class="mb-3 mr-2 h2 text-uppercase" style={{ marginLeft: "38rem", color: "white", }}><b>What We Do</b></h1>
            <div class="container">
                <section class="mx-auto my-5" style={{ maxWidth: "23rem" }}>

                    <div class="card">
                        <div class="card-body">
                            <blockquote class="blockquote blockquote-custom bg-white px-3 pt-4">
                                <div class="">
                                    <img src='images/logo1.png' style={{ maxWidth: "15rem", marginTop: "-8rem" }} />
                                </div>
                                <footer class="blockquote-footer pt-4 mt-4 ">
                                    <h4>Mobile Application Development</h4><b></b>

                                </footer>
                                <p class="mb-0 mt-2 font-italic">
                                    DevOps is the practice of operations and development engineers participating together in the entire service lifecycle, from design through the development process to production support. DevOps is not a new concept, but it is still maturing.

                                </p>

                            </blockquote>
                        </div>
                    </div>

                </section>
            </div>

        </div>
    )
}
export default Whatwedo

import React from 'react'
import BottomTab from './BottomTab'

const Home = () => {
    return (
        <div>
            <section>

                <div id="intro" class="bg-image vh-100" style={{
                    backgroundImage: "url('images/cover.jpg')"
                }}>
                    <div class="mask" >
                        <div class="container d-flex align-items-center justify-content-center text-center h-100">
                            <div class="text-white">
                                <h1 class="mb-3">Kubernetes Consulting Services</h1>
                                <h5 class="mb-4">Industrial Grade Cotainerization Solution Which is An-Open Source tool Which Helps in Automating Deployment,Scaling,And Management Of containerized Application</h5>
                                <a class="btn btn-outline-light btn-lg m-2" href="/" role="button"
                                    rel="nofollow" target="_blank">Know more</a>

                            </div>
                        </div>
                    </div>
                    <div class="container ">
                        <div class="row">
                            <div class="col-md" >
                                <img
                                    src='images/vector.png'
                                    style={{
                                        fontSize: "2rem", marginTop: "39rem"
                                    }}
                                ></img>
                                <div className="help" style={{ color: "#FFA115" }}>KUBERNETES</div>
                                <span className="helptext" style={{ color: "#FFA115" }}>CONSULTING SERVICES</span>
                            </div>
                            <div class="col-md">
                                <img
                                    src='images/aws.png'
                                    style={{ fontSize: "2rem", marginTop: "39rem" }}
                                ></img>
                                <div className="helpnoshadow">AWS</div>
                                <span className="helptext">CONSULTING SERVICES</span>
                            </div>
                            <div class="col-md">
                                <img
                                    src='images/settings.png'
                                    style={{ fontSize: "2rem", marginTop: "39rem" }}
                                ></img>
                                <div className="helpnoshadow">DEDICATED IT</div>
                                <span className="helptext">TEAM</span>
                            </div>
                            <div class="col-md">
                                <img
                                    src='images/managed.png'
                                    style={{ fontSize: "2rem", marginTop: "39rem" }}
                                ></img>
                                <div className="helpnoshadow">MANAGED</div>
                                <span className="helptext">SERVICES PROVIDER</span>
                            </div>
                        </div>
                    </div>

                </div>


            </section>
            <BottomTab />
        </div>
    )
}

export default Home
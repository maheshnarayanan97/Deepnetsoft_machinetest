import React from 'react'
import Whatwedo from './Whatwedo'

const BottomTab = () => {
    return (
        <div>
            <div style={{ backgroundColor: "black" }}>
                <div class="container" >
                    <div class="row ">

                        <div class="col-lg-2 col-md-12">
                            <i
                                class="fas fa-building"
                                style={{ fontSize: "2rem", marginTop: "1rem" }}
                            ></i>
                            <div className="bottomtab">Established In</div>
                            <span className="bottomtabtext"><b>2011</b></span>
                        </div>

                        <div class="col-lg-2 col-md-6">
                            <i
                                class="fas fa-chart-line"
                                style={{ fontSize: "2rem", marginTop: "1rem" }}
                            ></i>
                            <div className="bottomtab">Success full<br /> Projects</div>
                            <span className="bottomtabtext">300+</span>
                        </div>

                        <div class="col-lg-2 col-md-6">
                            <i
                                class="fab fa-aws"
                                style={{ fontSize: "2rem", marginTop: "1rem" }}
                            ></i>
                            <div className="bottomtab">Patner Network</div>

                        </div>

                        <div class="col-lg-2 col-md-6">
                            <i
                                class="fas fa-headset"
                                style={{ fontSize: "2rem", marginTop: "1rem" }}
                            ></i>
                            <div className="bottomtab">on Call support</div>
                            <span className="bottomtabtext">24/7</span>
                        </div>

                        <div class="col-lg-2 col-md-6">
                            <i
                                class="fas fa-truck"
                                style={{ fontSize: "2rem", marginTop: "1rem" }}
                            ></i>
                            <div className="bottomtab">Free delivery</div>
                            <span className="bottomtabtext">One of three columns</span>
                        </div>

                    </div>
                </div>
            </div>
            <Whatwedo />
        </div>


    )
}
export default BottomTab

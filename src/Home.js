import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import img from './assets/quizzy-1s-286px.gif';
import background from './assets/background.jpg';
import mickey from './assets/1.gif';

export class Home extends Component {

    render() {
        return (
            <>
                <section className="vh-100  bg-dark" style={{ backgroundImage: `url(${background})` }}>
                    <div className="mask d-flex align-items-center h-100">
                        <div className="container h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                    <div className="card" style={{ borderRadius: "15px" }}>
                                        <div className="card-body p-5">
                                            <div className="d-flex justify-content-center mb-3">
                                                <img src={img} alt='appName' className='img1 mt-0' />
                                            </div>

                                            <div className="d-flex justify-content-center  mb-3">
                                                <img src={mickey} className="img" alt='logo' />
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <Link to="/Registration"><button type="button"
                                                    className="btn btn-dark btn-block m-2">Register</button></Link>
                                                <Link to="/SignIn"><button type="button"
                                                    className="btn btn-dark btn-block m-2">Sign In</button></Link>
                                            </div>

                                            {/* <p className="text-center text-muted mt-5 mb-0">Forgot Password? <a href="#!"
                                                    className="fw-bold text-body"><u>Login here</u></a></p> */}



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        )
    }
}

export default Home
           // <>
            //     <section className="vh-100  bg-dark" style={{ backgroundImage: `url(${background})` }}>
            //         <div className="mask d-flex align-items-center h-100">
            //             <div className="container h-100">
            //                 <div className="row d-flex justify-content-center align-items-center h-100">
            //                     <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            //                         <div className="card" style={{ borderRadius: "15px" }}>
            //                             <div className="card-body">
            //                                 {/* <div className='vh-100 p-4' > */}
            //                                 {/* <div> */}
            //                                 {/* <h1 style={{ fontSize: '80px' }}>Quizzy</h1> */}
            //                                 {/* <img src={img} alt='appName' className='mb-2 mt-0' />
            //                             <br />
            //                             <img src={mickey} className="img mb-2" alt='logo' />

            //                             <div className='mt-3'>
            //                                 <Link className='btn btn-dark mx-4' to="/Registration">Register</Link>

            //                                 <Link className='btn btn-dark mx-4' to="/SignIn">SignIn</Link>

            //                             </div> */}
            //                                 {/* </div> */}
            //                                 {/* </div> */}
            //                             </div>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </section>
            // </>
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import img from './assets/quizzy-1s-286px.gif';
import background from './assets/background.jpg';
import mickey from './assets/1.gif';

export class Home extends Component {

    render() {
        return (
            <> <section className="vh-100  bg-dark" style={{ backgroundImage: `url(${background})` }}>
                <div className="mask d-flex align-items-center h-50 p-4">
                    <div className="container h-50  mt-5">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: "15px" }}>
                                    <div className="card-body p-4 text-center">
                                        {/* <div className='vh-100 p-4' > */}
                                        {/* <div> */}
                                        {/* <h1 style={{ fontSize: '80px' }}>Quizzy</h1> */}
                                        <img src={img} alt='appName' className='mb-2 mt-0 name-gif' />
                                        <br />
                                        <img src={mickey} className="img mb-2" alt='logo' />

                                        <div className='mt-3'>
                                            <Link className='btn btn-dark mx-4' to="/Registration">Register</Link>

                                            <Link className='btn btn-dark mx-4' to="/SignIn">SignIn</Link>

                                        </div>
                                        {/* </div> */}
                                        {/* </div> */}
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

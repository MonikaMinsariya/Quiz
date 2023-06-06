import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer, Bounce } from 'react-toastify';

import { Link, Navigate } from 'react-router-dom';
export class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            Email: '',
            Pwd: '',
            loginDetails: [],
            redirect: false,
        }
    }
    loginSuccess = () => toast.success('Login Successfully !', {
        position: toast.POSITION.BOTTOM_RIGHT
    });
    loginFailed = () => toast.error('Login Failed !', {
        position: toast.POSITION.BOTTOM_RIGHT
    });
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,

        })
        // console.log(this.state.Email,this.state.Pwd)
    }
    authorizeUser = () => {
        let { Email, Pwd } = this.state;
    
        let filteredUser = this.state.loginDetails.find(item => (item.email === Email && item.password === Pwd))

        if (filteredUser) {
            alert('Login Successfully')
            this.loginSuccess()
            this.setState({ redirect: true })
        }
        else {

            this.loginFailed();
        }

    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.loginDetails);
        this.authorizeUser();
    }

    componentDidMount() {
        let datafromLocal = JSON.parse(localStorage.getItem('Register'))
        // console.log(datafromLocal)
        this.setState({
            loginDetails: datafromLocal,
        });
    }
    render() {
        return (
            <>
                <ToastContainer
                    position="bottom-right"
                    autoClose={4000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable={false}
                    pauseOnHover={false}
                    theme="dark"
                    transition={Bounce}
                />
                {this.state.redirect && <Navigate to='/Welcome' />}
                <section className="vh-100  bg-dark">
                    <div className="mask d-flex align-items-center h-100">
                        <div className="container h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                    <div className="card" style={{ borderRadius: "15px" }}>
                                        <div className="card-body p-5">
                                            <h2 className="text-uppercase text-center mb-5">Sign In your account</h2>

                                            <form>
                                                <div className="form-outline mb-4">
                                                    <input type="email" id="email" className="form-control form-control-lg" value={this.state.Email} name='Email' onChange={this.handleChange} />
                                                    <label className="form-label" htmlFor="email">Your Email</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="pwd" className="form-control form-control-lg" value={this.state.Pwd} name='Pwd' onChange={this.handleChange} />
                                                    <label className="form-label" htmlFor="pwd">Password</label>
                                                </div>


                                                <div className="d-flex justify-content-center">
                                                    <Link to='/Welcome'><button type="button"
                                                        className="btn btn-dark btn-block btn-lg" onClick={this.handleSubmit}>Sign In</button></Link>
                                                </div>

                                                {/* <p className="text-center text-muted mt-5 mb-0">Forgot Password? <a href="#!"
                                                    className="fw-bold text-body"><u>Login here</u></a></p> */}

                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
            // <>
            //     <div className='container bg-secondary'>
            //         <div className='container p-3 bg-dark text-white w-25'>
            //             <form>
            //                 <div className="form-group row d-flex justify-content-center align-items-center h-100">
            //                     <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
            //                     <div className="col-sm-10">
            //                         <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
            //                     </div>
            //                 </div>

            //                 <div className="form-group row d-flex justify-content-center align-items-center h-100">
            //                     <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
            //                     <div className="col-sm-10">
            //                         <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
            //                     </div>
            //                 </div>


            //                 <div className="form-group row d-flex justify-content-center align-items-center h-100">
            //                     <div className="col-sm-10">
            //                         <button type="submit" className="btn btn-primary mt-4">Sign in</button>
            //                     </div>
            //                 </div>
            //             </form>
            //         </div>
            //     </div>
            // </>
        )
    }
}

export default SignIn

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Registration extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        Name: "",
        Email: "",
        Pwd: '',
        Rpwd: '',
      }
    }

  }

  handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      }
      // [name]:value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // this.setState({
    //   // allData: [...this.state.allData, this.state.allData.push(this.state.user)],
    //   // allData: [...this.state.allData, this.state.user],
    // })
    // console.log(this.state.allData);
    const { user } = this.state;
    // const {Name,Email,Pwd,Rpwd} = this.state;
    let setDataLocal = JSON.stringify({ user });
    localStorage.setItem("Data", setDataLocal);
    console.log('Registration Done');
    this.setState({
      user: {
        Name: "",
        Email: "",
        Pwd: '',
        Rpwd: '',
      }
    })
    console.log(this.state.user)
  }


  render() {
    return (
      <>
        <section className="vh-100 bg-dark">
          <div className="mask d-flex align-items-center h-100 ">
            <div className="container h-80">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card" style={{ borderRadius: "15px" }}>
                    <div className="card-body p-4">
                      <h2 className="text-uppercase text-center mb-3">Create an account</h2>

                      <form>

                        <div className="form-outline mb-2">
                          <input type="text" id="Name" className="form-control form-control-lg" name='Name' value={this.state.user.Name} onChange={this.handleChange} />
                          <label className="form-label" htmlFor="Name">Your Name</label>
                        </div>

                        <div className="form-outline mb-2">
                          <input type="email" id="Email" className="form-control form-control-lg" name='Email' value={this.state.user.Email} onChange={this.handleChange} />
                          <label className="form-label" htmlFor="Email">Your Email</label>
                        </div>

                        <div className="form-outline mb-2">
                          <input type="password" id="Pwd" className="form-control form-control-lg" name='Pwd' value={this.state.user.Pwd} onChange={this.handleChange} />
                          <label className="form-label" htmlFor="Pwd">Password</label>
                        </div>

                        <div className="form-outline mb-2">
                          <input type="password" id="Rpwd" className="form-control form-control-lg" name='Rpwd' value={this.state.user.Rpwd} onChange={this.handleChange} />
                          <label className="form-label" htmlFor="Rpwd">Repeat your password</label>
                        </div>


                        <div className="d-flex justify-content-center">
                          <Link to='/SignIn' className="btn btn-dark btn-block btn-lg" onClick={this.handleSubmit}>Register</Link>
                        </div>

                        <p className="text-center text-muted mt-5 mb-0">Have already an account?
                          <Link className="fw-bold text-body" to='/SignIn'><u>Login here</u></Link></p>

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
      //   <div className="container h-100">
      //     <div className="row d-flex justify-content-center align-items-center h-100">
      //       <div className="col-lg-12 col-xl-11">
      //         <div className="card text-black" style={{ borderRadius: '25px' }}>
      //           <div className="card-body p-md-5">
      //             <div className="row justify-content-center">
      //               <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

      //                 <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

      //                 <form className="mx-1 mx-md-4">

      //                   <div className="d-flex flex-row align-items-center mb-4">
      //                     <i className="fas fa-user fa-lg me-3 fa-fw"></i>
      //                     <div className="form-outline flex-fill mb-0">
      //                       <input type="text" id="form3Example1c" className="form-control" />
      //                       <label className="form-label" htmlFor="form3Example1c">Your Name</label>
      //                     </div>
      //                   </div>

      //                   <div className="d-flex flex-row align-items-center mb-4">
      //                     <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
      //                     <div className="form-outline flex-fill mb-0">
      //                       <input type="email" id="form3Example3c" className="form-control" />
      //                       <label className="form-label" htmlFor="form3Example3c">Your Email</label>
      //                     </div>
      //                   </div>

      //                   <div className="d-flex flex-row align-items-center mb-4">
      //                     <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
      //                     <div className="form-outline flex-fill mb-0">
      //                       <input type="password" id="form3Example4c" className="form-control" />
      //                       <label className="form-label" htmlFor="form3Example4c">Password</label>
      //                     </div>
      //                   </div>

      //                   <div className="d-flex flex-row align-items-center mb-4">
      //                     <i className="fas fa-key fa-lg me-3 fa-fw"></i>
      //                     <div className="form-outline flex-fill mb-0">
      //                       <input type="password" id="form3Example4cd" className="form-control" />
      //                       <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
      //                     </div>
      //                   </div>

      //                   <div className="form-check d-flex justify-content-center mb-5">
      //                     <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
      //                     <label className="form-check-label" htmlFor="form2Example3">
      //                       I agree all statements in <a href="#!">Terms of service</a>
      //                     </label>
      //                   </div>

      //                   <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
      //                     <button type="button" className="btn btn-primary btn-lg">Register</button>
      //                   </div>

      //                 </form>

      //               </div>
      //               <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

      //                 <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
      //                   className="img-fluid" alt="Sample1" />

      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </>
    )
  }
}

export default Registration


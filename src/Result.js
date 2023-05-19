import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Confetti from 'react-confetti'
import win from './assets/mickey-mouse-celebration.gif'
import lose from './assets/mickey-cry.gif'

export class Result extends Component {

    render() {
        const { score } = this.props;
        return (
            <>
                {score > 6 && <Confetti
                // angle='90'
                // spread='360'
                // startVelocity='40'
                // elementCount='70'
                // dragFriction='0.12'
                // duration='3000'
                // stagger='3'
                // width="1300rem"
                // height="1000rem"
                // perspective="500px"
                // colors='["#000", "#333", "#666"]' 
                />}
                <section className="vh-100  bg-dark">
                    <div className="mask d-flex align-items-center h-50">
                        <div className="container h-50">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                    <div className="card" style={{ borderRadius: "15px" }}>
                                        <div className="card-body p-3 text-center">
                                            <h1 style={{ fontSize: '5rem' }}>{score > 6 ? 'Well Played' : 'Try Again'}</h1>
                                            <img src={score > 6 ? win : lose} className="img mt-4" alt='logo' />
                                            <center className='mt-3'>
                                                <h3>Your Score Is {score}/10</h3>
                                                <Link className='btn btn-dark mx-2' to="/Bye">Done</Link>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* <div className='vh-100 p-5' style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/008/889/844/small/quiz-set-in-doodle-style-illustration-icon-question-symbol-for-print-and-design-quiz-and-exam-concept-isolated-element-on-black-background-collection-of-sign-for-school-and-event-vector.jpg')" }}>
                    <div className='bg-light h-80 p-3 w-25 container text-center card card-body' style={{ marginTop: '80px' }}>
                        
                            <h1>Result</h1>
                            <img src="https://purepng.com/public/uploads/large/purepng.com-mickey-mousemickey-mousemickeymouseanimal-cartooncharacterwalt-disneyub-iwerksstudioslarge-yellow-shoered-shortswhite-glovesnetflix-17015286497415d5wn.png" className="img mt-4" alt='logo' />
                            <center className='mt-5'>
                                <Link className='btn btn-dark mx-2' to="/Quiz">Let's play</Link>
                            </center>
                        
                    
                </div> */}

            </>
        )

    }
}

export default Result;

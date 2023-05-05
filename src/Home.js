import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export class Home extends Component {

    render() {
        return (
            <>
                <div className='vh-100 p-5' style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/008/889/844/small/quiz-set-in-doodle-style-illustration-icon-question-symbol-for-print-and-design-quiz-and-exam-concept-isolated-element-on-black-background-collection-of-sign-for-school-and-event-vector.jpg')" }}>
                    <div className='bg-light h-80 p-3 w-25 container text-center' style={{ marginTop: '80px' }}>
                        <h1>Quiz App</h1>
                        <img src="https://cdn-icons-png.flaticon.com/512/3409/3409542.png" className="App-logo mt-4" alt='logo' />

                        <center className='mt-5'>
                            <Link className='btn btn-dark mx-2' to="/Registration">Register</Link>

                            <Link className='btn btn-dark mx-2' to="/SignIn">SignIn</Link>

                        </center>
                    </div>
                </div>

            </>
        )
    }
}

export default Home

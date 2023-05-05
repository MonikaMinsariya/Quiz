import React, { Component } from 'react'
//import { Link } from 'react-router-dom'

export class Quiz extends Component {
    render() {
        return (
            <>
                <div className='vh-100 p-5' style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/008/889/844/small/quiz-set-in-doodle-style-illustration-icon-question-symbol-for-print-and-design-quiz-and-exam-concept-isolated-element-on-black-background-collection-of-sign-for-school-and-event-vector.jpg')" }}>


                    <div class="modal d-block mt-5" tabindex="-1" role="dialog">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Quiz</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <p>Modal body text goes here.</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-dark mx-2">&larr; prev</button>
                                    <button type="button" class="btn btn-dark mx-2" data-dismiss="modal">Next &rarr;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Quiz

//import Modal from './Modal'
import React, { Component } from 'react'


export class Quiz extends Component {
    data = [

        {
            "id": "01",
            "question": "Which of the following is the correct name of React.js?",
            "options": [
                "React",
                "React.js",
                "ReactJS",
                "All of the above"
            ],
            "answer": "All of the above"
        },
        {
            "id": "02",
            "question": "Which of the following are the advantages of React.js?",
            "options": [
                "React.js can increase the application's performance with Virtual DOM.",
                "React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.",
                "React.js can render both on client and server side.",
                "All of the above"
            ],
            "answer": "All of the above"
        },
        {
            "id": "03",
            "question": "Which of the following is not a disadvantage of React.js?",
            "options": [
                "React.js has only a view layer. We have put your code for Ajax requests, events and so on.",
                "The library of React.js is pretty large.",
                "The JSX in React.js makes code easy to read and write.",
                "The learning curve can be steep in React.js."
            ],
            "answer": "The JSX in React.js makes code easy to read and write."
        },
        {
            "id": "04",
            "question": "Which of the following command is used to install create-react-app?",
            "options": [
                "npm install -g create-react-app",
                "npx create-react-app my-app",
                "npm install create-react-app",
                "npm install -f create-react-app"
            ],
            "answer": "npx create-react-app my-app"
        },
        {
            "id": "05",
            "question": "What of the following is used in React.js to increase performance?",
            "options": [
                "Original DOM",
                "Virtual DOM",
                "Both A and B.",
                "None of the above."
            ],
            "answer": "Virtual DOM"
        },
        {
            "id": "06",
            "question": "What is the default port where webpack-server runs?",
            "options": [
                "3000",
                "8080",
                "3030",
                "6060"
            ],
            "answer": "3000"
        },
        {
            "id": "07",
            "question": "How many numbers of elements a valid react component can return?",
            "options": [
                "1",
                "2",
                "3",
                "Unlimited"
            ],
            "answer": "1"
        },
        {
            "id": "08",
            "question": "What is the declarative way to render a dynamic list of components based on values in an array?",
            "options": [
                "Using the reduce array method",
                "Using the <Each /> component",
                "Using the Array.map() method",
                "With a for/while loop"
            ],
            "answer": "Using the Array.map() method"
        },
        {
            "id": "09",
            "question": "What is a state in React?",
            "options": [
                "A permanent storage.",
                "Internal storage of the component.",
                "External storage of the component.",
                "None of the above."
            ],
            "answer": "Internal storage of the component."
        },
        {
            "id": "10",
            "question": "What are the two ways to handle data in React?",
            "options": [
                "State & Props",
                "Services & Components",
                "State & Services",
                "State & Component"
            ],
            "answer": "State & Props"
        }
    ]
    answerArray = []
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            questionsPerPage: 1,
            score: 0,
            selectedAnswer: '',

        };
    }
    handleNextPage = () => {
        const { currentPage } = this.state;
        const totalPages = Math.ceil(this.data.length / this.state.questionsPerPage);
        if (currentPage < totalPages) {
            this.setState({ currentPage: currentPage + 1 });
        }
    };
    handlePreviousPage = () => {
        const { currentPage } = this.state;
        if (currentPage > 1) {
            this.setState({ currentPage: currentPage - 1 });
        }
    };
    radioClick = (i) => {

        console.log(i)
        this.setState({
            selectedAnswer: i,
        })


    }
    handleSubmit = () => {
        console.log(this.state.selectedAnswer)
        if (this.state.selectedAnswer === answerArray) {
            console.log('right answer')
        } else {
            console.log('wrong answer')
        }
    }
    render() {
        const { currentPage, questionsPerPage } = this.state;
        const indexOfLastQuestion = currentPage * questionsPerPage;
        const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
        const currentQuestion = this.data.slice(indexOfFirstQuestion, indexOfLastQuestion);
        return (
            <>
                <div className='vh-100 p-5' style={{ backgroundImage: "url('https://us.123rf.com/450wm/maevskaya/maevskaya2206/maevskaya220600014/187173909-quiz-set-in-doodle-style-vector-illustration-icon-question-symbol-for-print-and-design-quiz-and.jpg?ver=6')" }}>
                    <div>
                        <div className="modal d-block mt-5" tabIndex="-1" role="dialog">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Quiz</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        {currentQuestion.map((val) => {
                                            return (
                                                <div key={val.id}>
                                                    <p >{val.id}</p>
                                                    <p>{val.question}</p><br />
                                                    {val.options.map((i, index) => {
                                                        return (
                                                            <>
                                                                <div className='form-check'>
                                                                    <input key={index} className='form-check-input' type='radio' onChange={() => this.radioClick(i)} name='i' value={i} checked={this.state.selectedAnswer === i} />{i}
                                                                    <br />
                                                                </div>
                                                            </>
                                                        )
                                                    })}
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                    <div className="modal-footer d-flex justify-content-between">
                                        <button type="button" onClick={this.handlePreviousPage} className="btn btn-dark mx-2">&larr; prev</button>
                                        <button type='button' onClick={this.handleSubmit} className='btn btn-secondary'>submit</button>
                                        <button type="button" onClick={this.handleNextPage} className="btn btn-dark mx-2" data-dismiss="modal">Next &rarr;</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* {Data.map((val) => {
                        return (
                            <Modal
                                id={val.id}
                                question={val.question}
                                options={val.options}
                            />

                        )
                    })} */}

                </div>
            </>
        )
    }
}

export default Quiz

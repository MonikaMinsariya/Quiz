import React, { Component } from "react";
import Result from "./Result";


class Quizz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            questionsPerPage: 1,
            selectedAnswers: {},
            showButton: false,
            score: 0,
            isResultShow: false,
        };
    }
    questions = [
        {
            id: "1.",
            question: "Which of the following is the correct name of React.js?",
            options: ["React", "React.js", "ReactJS", "All of the above"],
            answer: "All of the above",
        },
        {
            id: "2.",
            question: "Which of the following are the advantages of React.js?",
            options: [
                "React.js can increase the application's performance with Virtual DOM.",
                "React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.",
                "React.js can render both on client and server side.",
                "All of the above",
            ],
            answer: "All of the above",
        },
        {
            id: "3.",
            question: "Which of the following is not a disadvantage of React.js?",
            options: [
                "React.js has only a view layer. We have put your code for Ajax requests, events and so on.",
                "The library of React.js is pretty large.",
                "The JSX in React.js makes code easy to read and write.",
                "The learning curve can be steep in React.js.",
            ],
            answer: "The JSX in React.js makes code easy to read and write.",
        },
        {
            id: "4.",
            question:
                "Which of the following command is used to install create-react-app?",
            options: [
                "npm install -g create-react-app",
                "npx create-react-app my-app",
                "npm install create-react-app",
                "npm install -f create-react-app",
            ],
            answer: "npx create-react-app my-app",
        },
        {
            id: "5.",
            question:
                "What of the following is used in React.js to increase performance?",
            options: [
                "Original DOM",
                "Virtual DOM",
                "Both A and B.",
                "None of the above.",
            ],
            answer: "Virtual DOM",
        },
        {
            id: "6.",
            question: "What is the default port where webpack-server runs?",
            options: ["3000", "8080", "3030", "6060"],
            answer: "3000",
        },
        {
            id: "7.",
            question:
                "How many numbers of elements a valid react component can return?",
            options: ["1", "2", "3", "Unlimited"],
            answer: "1",
        },
        {
            id: "8.",
            question:
                "What is the declarative way to render a dynamic list of components based on values in an array?",
            options: [
                "Using the reduce array method",
                "Using the <Each /> component",
                "Using the Array.map() method",
                "With a for/while loop",
            ],
            answer: "Using the Array.map() method",
        },
        {
            id: "9.",
            question: "What is a state in React?",
            options: [
                "A permanent storage.",
                "Internal storage of the component.",
                "External storage of the component.",
                "None of the above.",
            ],
            answer: "Internal storage of the component.",
        },
        {
            id: "10",
            question: "What are the two ways to handle data in React?",
            options: [
                "State & Props",
                "Services & Components",
                "State & Services",
                "State & Component",
            ],
            answer: "State & Props",
        },
    ];
    handleNextPage = () => {
        const { currentPage } = this.state;
        const totalPages = Math.ceil(
            this.questions.length / this.state.questionsPerPage
        );
        if (currentPage < totalPages) {
            this.setState({ currentPage: currentPage + 1 });
        }
        if (currentPage === this.questions.length - 1) { this.setState({ showButton: true }) }

        // const { selectedAnswers } = this.state;
        // const correctAnswers = this.questions.reduce((acc, question) => {
        //     return selectedAnswers[question.id] === question.answer ? acc + 1 : acc;
        // }, 0);
        // // const totalQuestions = this.questions.length;
        // // const Marks = (correctAnswers / totalQuestions) * 100;
        // this.setState({ score: correctAnswers })

    };
    handlePreviousPage = () => {
        const { currentPage } = this.state;
        if (currentPage > 1) {
            this.setState({ currentPage: currentPage - 1 });
        }

    };
    handleAnswerSelection = (questionId, option) => {
        this.setState((prevState) => ({
            selectedAnswers: {
                ...prevState.selectedAnswers,
                [questionId]: option,
            },
        }));
    };

    calculateResult = () => {

        const { score } = this.state;
        this.setState({
            isResultShow: true
        })
        const { selectedAnswers } = this.state;
        let correctAnswers = 0;
         correctAnswers = this.questions.reduce((acc, question) => {
            return selectedAnswers[question.id] === question.answer ? acc + 1 : acc;
        }, 0);
        // const totalQuestions = this.questions.length;
        // const Marks = (correctAnswers / totalQuestions) * 100;
        this.setState({ score: correctAnswers })
        console.log(score)
        // alert(
        //      `You scored ${score}% (${correctAnswers} out of ${totalQuestions} correct)`
        //  );
        // return (
        //     <>
        //         <Result score={score} />
        //     </>
        // )
    };

    render() {
        const { currentPage, questionsPerPage } = this.state;
        const indexOfLastQuestion = currentPage * questionsPerPage;
        const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
        const currentQuestions = this.questions.slice(indexOfFirstQuestion, indexOfLastQuestion);
        return (
            <>
                {this.state.isResultShow && <Result score={this.state.score} />}
                {console.log(this.state.score)}

                {!this.state.isResultShow &&
                    <div className='vh-100 p-5' style={{ backgroundImage: "url('https://us.123rf.com/450wm/maevskaya/maevskaya2206/maevskaya220600014/187173909-quiz-set-in-doodle-style-vector-illustration-icon-question-symbol-for-print-and-design-quiz-and.jpg?ver=6')" }}>
                        <div className="modal d-block mt-5 h-100" tabIndex="-1" role="dialog">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h3 className="modal-title">PLAY QUIZ</h3>
                                    </div>
                                    <div className="modal-body">
                                        {currentQuestions.map((question) => (
                                            <div key={question.id}>
                                                <p>
                                                    <strong>
                                                        {question.id} {question.question}
                                                    </strong>
                                                </p>
                                                {question.options.map((option) => (
                                                    <div key={option}>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name={`question_${question.id}`}
                                                                id={`${question.id}_${option}`}
                                                                onChange={() =>
                                                                    this.handleAnswerSelection(question.id, option)
                                                                }
                                                                checked={
                                                                    this.state.selectedAnswers[question.id] === option
                                                                }
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor={`${question.id}_${option}`}
                                                            >
                                                                {option}
                                                            </label>
                                                        </div>
                                                        <br />
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="modal-footer d-flex justify-content-between">
                                        <button
                                            type="button"
                                            className="btn btn-dark"
                                            onClick={this.handlePreviousPage}
                                        >
                                            <span>&larr;</span>Prev
                                        </button>

                                        <button
                                            type="button" className="btn btn-dark" onClick={this.handleNextPage}>
                                            Submit & Next <span>&rarr;</span>
                                        </button>
                                        {/* {console.log(this.questions.length) */}
                                        {/* {console.log(currentQuestions)} */}

                                        {this.state.showButton &&
                                            <button type="button" className="btn btn-success" onClick={this.calculateResult}  >
                                                Result
                                            </button>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </>
        );
    }
}
export default Quizz;
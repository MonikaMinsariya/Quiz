import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        let { id, question, options } = this.props;
        
        return (

            <div>
                <div className="modal d-block mt-5" tabindex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Quiz</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>{id}</p>
                                <p>{question}</p><br />
                                <p>{options.map((val, index) => {
                                    return (
                                        <>
                                            <input type='radio' />{val}
                                            <br />
                                        </>
                                    )
                                })}</p>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-dark mx-2">&larr; prev</button>
                                <button type="button" className="btn btn-dark mx-2" data-dismiss="modal">Next &rarr;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            // <div className='cards'>
            //     <div className='card'>
            //         <p>{id}</p><br />
            //         <p>{question}</p><br />
            //         <p>{options.map((val, index) => {
            //             return (
            //                 <>
            //                     <input type='radio' />{val}
            //                     <br />
            //                 </>
            //             )
            //         })}</p>

            //     </div>
            // </div>
        )
    }
}

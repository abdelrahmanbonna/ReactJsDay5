import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getstudentDetails,clearStudentDetails, removestudent } from '../actions'
import { useHistory } from 'react-router-dom';

const StudentDetails = ({ getstudentDetails,clearStudentDetails,removestudent, details, match }) => {
    const id = match.params.id
    const history = useHistory();
    useEffect(() => {
        getstudentDetails(id)

        return ()=>{
            clearStudentDetails()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleClick = (id) => {
        removestudent(id)
        history.push("/");
    }

    const renderStudentDetails = (details) => {
        if (details && details.id) {
            return (
                <div>
                    <h2 className="d-flex justify-content-between">
                        <div className="card mx-auto w-50 text-center my-2 p-3 rounded">
                            <div className="card-body">
                                <h4 className="card-title">{details.name}</h4>
                                <p className="card-text">{details.email}</p>
                                <p className="card-text">{details.city}</p>
                            </div>
                            <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                              Remove
                            </button>
                            <div className="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">confirm removal</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                        </div>
                                        <div className="modal-body">
                                            Do you want to delete this student ?
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">dismiss</button>
                                            <button onClick={()=>{handleClick(details.id)}}  type="button" className="btn btn-danger">confirm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </h2>
                </div>
            )
        }
        return ''
    }
    return (<div className="alert alert-light">
        {renderStudentDetails(details)}
    </div>)

}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        details: state.students.details
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getstudentDetails ,clearStudentDetails,removestudent}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails)


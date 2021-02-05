import { useRef } from 'react'
import { getStudents } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Search = ({getStudents}) => {
    const name = useRef()
    const searchByName = () => {
        getStudents(name.current.value)
    }
    return <div className="col mx-auto m-3">
        <div className="form-group">
            <input ref={name} className="form-control w-25 float-left rounded text-center mx-2" type="text" placeholder="enter name" />
        </div>
        <div className="form-group">
            <input className="btn btn-dark " type="button" value="search" onClick={searchByName} />
        </div>
    </div>
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getStudents }, dispatch)
}
export default connect(null, mapDispatchToProps)(Search)

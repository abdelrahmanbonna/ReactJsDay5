import { connect } from 'react-redux';
import Student from '../components/student'
const StudentsList = ({ list ,history}) => {
    if (list) {
        if (list.length > 0)
            return (
                <div className="alert ">
                    {list.map((student) => {
                        return <Student key={student.id} Info={student} history={history}/>
                    })}
                </div>)
        return <p>
            Name not found please enter another one
        </p>
    }

    return <p>
        Enter a name and press search.
    </p>
}

const mapStateToProps = (state) => {
    return {
        list: state.students.list
    }
}

export default connect(mapStateToProps, null)(StudentsList)
const Student = ({ Info,history }) => {
    const goToDetails = ()=>{
        history.push(`/students/${Info.id}`)
    }

    if (Info) {
        return <div className="alert alert-dark d-flex justify-content-between">
            <h4 className="align-self-center">
                {Info.name}
            </h4>
            <button onClick={goToDetails} className="btn btn-primary" >{Info.email}</button>
        </div>
    }
}
export default Student

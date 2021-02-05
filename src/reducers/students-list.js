export const studentsList = (state=null,action)=>{
    if(action.type === "STUDENTS_LIST")
    {
        return action.payload
    }
    return state;
}
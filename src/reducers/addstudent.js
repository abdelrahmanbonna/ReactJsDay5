export const Addstudent = (state = null, action) => {
    if (action.type === "STUDENT_ADD"){
    console.log('in add reducer',action)
        return action.payload}
    return state
}
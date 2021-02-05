export const RemoveStudent = (state = null, action) => {
    if (action.type === "STUDENT_REMOVE"){
    console.log('in remove reducer',action)
        return action.payload}
    return state
}
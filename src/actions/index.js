const baseURL = "http://localhost:3000/students"

export const getStudents = async (name) => {

    let payload;
    if(name){
    try{
        let response = await fetch(`${baseURL}?name=${name}`)
        payload = await response.json()
    }
    catch(err){
        console.log(err)
    }}else{
        try{
        let response = await fetch(`${baseURL}`)
        payload = await response.json()
    }
    catch(err){
        console.log(err)
    }
    }
    return {
        type: 'STUDENTS_LIST',
        payload
    }
}

export const removestudent = async (stdid)=>{
    let payload;
    try{
        let response = await fetch(`${baseURL}/${stdid}`,{method: 'DELETE',})
        payload = await response.json()
        console.log(`remove res: ${payload}`)
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'STUDENT_REMOVE',
        payload
    }
}

export const addstudent = async (std)=>{
    console.log(std)
let payload;
       ///this dosen't work and I don't know why
    try{
        let response = await fetch(`${baseURL}/`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id:std.id,
                name:std.name,
                email:std.email,
                city:std.city
            })
       })
        payload = await response.json()
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'STUDENT_ADD',
        payload
    }
}


export const getstudentDetails = async (id) => {
    let payload;
    try{
        let response = await fetch(`${baseURL}/${id}`)
        payload = await response.json()
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'STUDENT_DETAILS',
        payload
    }

}

export const clearStudentDetails = ()=>{
    return {
        type:'CLEAR_STUDENT_DETAILS',
        payload:null
    }
}



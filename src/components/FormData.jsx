import {useState} from 'react'

export default function FormData() {
    const [formData, setFormData] = useState({
        from: "", //from:name
        fromDepartment: "",//selecting his/hers departmenet
        semester: "",//semester
        to: "",//dropdown :probably principal,hod
        toDepartment: "",//department :for hods, rit kottayam:for others

    });
    const departments=["Computer Science","Electrical and Electronics","Mechanical Engineering","Electronics and Communication","Robotics and Artificial Intelligence","Civil Engineering","Architecture"]
    return (
       <main>
           <div className="flex flex-col justify-center items-center h-screen">
               <h1 className="font-bold text-3xl">Welcome to GenLet</h1>
               <h2 className="font-bold text- base">Generate any official letter in seconds without taking your pen</h2>
           </div>
       </main>

    )

}
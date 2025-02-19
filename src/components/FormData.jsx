import {useState} from 'react'

export default function FormData() {
    const [formData, setFormData] = useState({
        from: "", //from:name
        fromDepartment: "",//selecting his/hers departmenet
        semester: "",//semester
        to: "",//dropdown :probably principal,hod
        toDepartment: "",//department :for hods, rit kottayam:for others
        subject: "",//subject for letter
        prompt: ""//prompt input so as to generate the required letter

    });
    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData, "form submitted succesfully")
    }
    const departments = ["Computer Science", "Electrical and Electronics", "Mechanical Engineering", "Electronics and Communication", "Robotics and Artificial Intelligence", "Civil Engineering", "Architecture"]
    const recipients = ["Principal", "HOD"]
    return (
        <main className="flex flex-col justify-center items-center bg-blue-200 h-screen ">
            <div className="flex flex-col justify-center items-center m-3 w-auto">
                <h1 className="font-bold text-3xl">Welcome to GenLet</h1>
                <h2 className="font-bold text- base">Generate any official letter in seconds without taking your
                    pen</h2>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center bg-blue-200 h-screen">
                <h1>form starts here</h1>
                {/*Input Name*/}
                <input
                    type="text"
                    name="from"
                    placeholder="Enter your name"
                    value={formData.from}
                    onChange={handleChange}
                    required
                />
                {/*Selecting the department of the student ,dropdown menu*/}
                <select
                    name="fromDepartment"
                    value={formData.fromDepartment}
                    onChange={handleChange}
                    required
                >
                    <option value=""> Select your department</option>
                    {departments.map((dept, index) =>
                        <option key={index} value={dept}>{dept}</option>
                    )}
                </select>
                {/* Recipient details*/}
                <select
                    name="to"
                    value={formData.to}
                    onChange={handleChange}
                    required>
                    <option value=""> Select your Recipient</option>
                    {recipients.map((recipient, index) =>
                        <option key={index} value={recipient}>{recipient}</option>)}
                </select>
                {/* a simple conditional is applied, so as to display the departments if and oln if the recipient is a head of a department*/}
                {formData.to === "HOD" && (
                    <select
                        name="toDepartment"
                        value={formData.toDepartment}
                        onChange={handleChange}
                        required
                    >
                        <option value=""> Select department</option>
                        {departments.map((dept, index) =>
                            <option key={index} value={dept}>{dept}</option>
                        )}
                    </select>
                )
                }
                {/*subject for letter*/}
                <input
                    type="text"
                    name="subject"
                    placeholder="Enter your subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required/>
                {/*prompt for letter*/}
                <textarea className="w-xl h-30"
                          name="prompt"
                          placeholder="Enter your prompt : Make sure to enter necessary details like dates if any"
                          value={formData.prompt}
                          onChange={handleChange}
                          required
                />
                <button
                type="submit"
                className="w-auto p-3 bg-blue-500  text-white font-bold text-lg hover:bg-blue-300"
                >
                    Generate letter
                </button>
            </form>
        </main>

    )

}
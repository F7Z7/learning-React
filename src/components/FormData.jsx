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
        console.log(formData, "form submitted successfully")
    }
    const departments = ["Computer Science", "Electrical and Electronics", "Mechanical Engineering", "Electronics and Communication", "Robotics and Artificial Intelligence", "Civil Engineering", "Architecture"]
    const recipients = ["Principal", "HOD"]
    return (
        <main className="flex flex-col justify-center items-center bg-blue-500 m-1 p-10 h-75%">
            <div className="flex flex-col justify-center items-center m-3 w-auto">
                <h1 className="font-bold text-3xl">Welcome to GenLet</h1>
                <h2 className="font-semibold text-center">Generate any official letter in seconds without taking your
                    pen</h2>
            </div>
            <form onSubmit={handleSubmit}
                  className="shadow-lg p-6 rounded-lg w-full max-w-md flex flex-col items-start justify-center bg-white gap-4 m-2 w-auto ">
                <label>
                {/*Input Name*/}
                    <h1>Your Name</h1>
                    <input
                        type="text"
                        name="from"
                        placeholder="Enter your name"
                        value={formData.from}
                        onChange={handleChange}
                        required
                    />
                    </label>
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
                <input className="w-100% p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    type="text"
                    name="subject"
                    placeholder="Enter your subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required/>
                {/*prompt for letter*/}
                <textarea
                    className="w-full h-32 p-2 border rounded resize-none overflow-auto break-words focus:border-blue-500 focus:outline-none "
                    name="prompt"
                    placeholder="Enter your prompt : Make sure to enter necessary details like dates if any"
                    value={formData.prompt}
                    onChange={handleChange}

                />
                <button
                    type="submit"
                    className="w-full sm:w-auto p-3 bg-blue-500 border self-center text-white font-semibold cursor-pointer transition-transform duration-300 ease-out hover:scale-110 text-lg hover:bg-white hover:text-blue-500 hover:border-blue-500"
                >
                    Generate letter
                </button>
            </form>
        </main>

    )

}
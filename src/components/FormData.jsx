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

        <main className="bg-gradient-to-b from-blue-400 to-blue-700 p-6 md:p-12 rounded-xl shadow-lg shadow-blue-500/50  ">
            <div className="cursorMap"/>
            <div className="flex flex-col justify-center items-center m-3 ">
                <h1 className="text-black-900 text-3xl font-bold drop-shadow-md">
                    Welcome to GenLet
                </h1>
                <h2 className="text-black-500 font-medium">
                    Generate any official letter in seconds without taking your pen
                </h2>
            </div>
            <form onSubmit={handleSubmit}
                  className="flex flex-col justify-center gap-4 p-5 bg-white rounded-xl shadow-md">
                <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <div className="relative ">
                        {/*Input Name*/}
                        <input id="name"
                               type="text"
                               name="from"
                               placeholder="Enter your name"
                               value={formData.from}
                               onChange={handleChange}
                               required
                        />
                    </div>
                </div>
                {/*Selecting the department of the student ,dropdown menu*/}
                <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Department</label>
                    <div className="relative">
                        <select
                            name="fromDepartment"
                            // className="w-full px-4 py-3 bg-white focus:ring-2 focus:ring-blue-500  transition duration-200"
                            value={formData.fromDepartment}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select your department</option>
                            {departments.map((dept, index) => (
                                <option key={index} value={dept}>{dept}</option>
                            ))}
                        </select>
                    </div>
                </div>
                {/* Recipient details*/}
                <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Recipient</label>
                    <div className="relative">
                        <select
                            name="to"
                            value={formData.to}
                            onChange={handleChange}
                            required>
                            <option value=""> Select your Recipient</option>
                            {recipients.map((recipient, index) =>
                                <option key={index} value={recipient}>{recipient}</option>)}
                        </select>
                    </div>
                </div>
                {/* a simple conditional is applied, so as to display the departments if and oln if the recipient is a head of a department*/}
                {formData.to === "HOD" && (
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Recipient Department</label>
                        <div className="relative">
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
                        </div>
                    </div>
                )
                }
                {/*subject for letter*/}
                <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <div className="relative">
                        <input
                            className="w-100% p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            type="text"
                            name="subject"
                            placeholder="Enter your subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required/>
                    </div>
                </div>
                {/*prompt for letter*/}
                <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Prompt for letter</label>
                    <div className="relative">
                <textarea
                    className="w-full h-32 p-2 border rounded resize-none overflow-auto break-words focus:border-blue-500 focus:outline-none "
                    name="prompt"
                    placeholder="Enter your prompt : Make sure to enter necessary details like dates if any"
                    value={formData.prompt}
                    onChange={handleChange}

                />
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full rounded-xl sm:w-auto  px-5 py-3 bg-blue-500 border self-center text-white font-semibold cursor-pointer transition-transform duration-300 ease-out hover:scale-110 text-lg hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300 hover:scale-105"
                >
                    Generate letter
                </button>
            </form>
        </main>

    )

}
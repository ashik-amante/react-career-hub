import { useLoaderData, useParams } from "react-router-dom";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobAppliacation } from "../../utility/utility";


const JobDetail = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    console.log(id, jobs);
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    console.log(job);
    
    const handleApply = ()=>{
        saveJobAppliacation(idInt)
         toast('Successfully Applied!!')
    }
    const { job_description, job_responsibility, educational_requirements, experiences, location, contact_information, salary, job_title
    } = job
    return (
        <div className="mt-10 mb-10">
            <h1 className="text-4xl text-center font-bold mb-20">Job detail of :{id} </h1>
            <div className="grid md:grid-cols-4 gap-10">
                <div className="grid col-span-3 ">
                    <div>
                        <h1 className="font-bold">Job description:</h1>
                        <p>{job_description}</p>
                    </div>
                    <div>
                        <h1 className="font-bold">Job responsibility:</h1>
                        <p>{job_responsibility}</p>
                    </div>
                    <div>
                        <h1 className="font-bold">Educational Requirements:</h1>
                        <p>{educational_requirements}</p>
                    </div>
                    <div>
                        <h1 className="font-bold">Experience:</h1>
                        <p>{experiences}</p>
                    </div>


                </div>

                {/* job detail section */}
                <div className="grid col-span-1 ">
                    <div className="bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] px-7 rounded-md ">
                        <div className="mt-3 mb-5">
                            <h1 className="text-xl font-bold">Job details</h1>
                        </div>
                        <hr />
                        <div className="mt-3">
                            <div className="flex items-center gap-2 mb-4">
                                <span><AiFillDollarCircle /></span>
                                <h1>Salary:{salary}</h1>
                            </div>
                            <div className="flex items-center gap-2">
                                <span><IoBagHandleOutline /></span>
                                <h1>Job title: {job_title}</h1>
                            </div>
                            <h1 className="text-xl font-bold mb-5 mt-7">Contact info</h1>
                        </div>
                        <hr />
                        {/* contact Info */}

                        <div className="space-y-3 mt-3 mb-3">
                            <div className="flex items-center gap-2" >
                                <span><FaPhoneAlt /></span>
                                <h1>Phone:{contact_information.phone}</h1>
                            </div>
                            <div className="flex items-center gap-2">
                                <span><MdMarkEmailUnread /></span>
                                <h1>Email: :{contact_information.email}</h1>
                            </div>
                            <div className="flex items-center gap-2">
                                <span><FaLocationDot /></span>
                                <h1>Address :{contact_information.address} </h1>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 flex items-center justify-center">
                        <button onClick={handleApply}  className="px-5 w-full font-bold py-2 rounded-md text-lg text-white  bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Apply Now </button>
                    </div>
                </div>

            </div>
            <ToastContainer />

        </div>
    );
};

export default JobDetail;
import { FaLocationDot } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary,id } = job
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
            <figure>
                <img
                    src={logo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p className="text-left text-xl">{company_name}</p>
                <div>
                    <button className='px-5 py-2 text-[#7E90FE] font-extrabold border rounded-lg border-[#7E90FE] mr-4'>{remote_or_onsite}</button>
                    <button className='px-5 py-2 text-[#7E90FE] font-extrabold border rounded-lg border-[#7E90FE] mr-4'>{job_type}</button>
                </div>
                <div className="flex items-center gap-20 mt-2 mb-2">
                    <div className="flex items-center gap-2">
                        <span><FaLocationDot /></span>
                        <p className="text-[20px]">{location}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span><AiFillDollarCircle /></span>
                        <p className="text-[20px]"> Salary: {salary}</p>
                    </div>

                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button  className="btn btn-primary px-5 py-2 rounded-md text-lg text-white  bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;
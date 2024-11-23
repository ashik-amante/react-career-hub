import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../../utility/utility';

const Appliedjob = () => {
    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayjobs] = useState([])

    const handleJobFilter = filter => {
        if (filter === 'all') {
            setDisplayjobs(appliedJobs)
        }
        else if (filter === "remote") {
            const remote = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayjobs(remote)
        }
        else if (filter === 'onsite') {
            const onsite = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayjobs(onsite)
        }
    }

    const jobs = useLoaderData()
    useEffect(() => {
        const storedJobId = getStoredJobApplication()
        if (jobs.length > 0) {
            // const jobApplied = jobs.filter(job=> storedJobId.includes(job.id) )
            // console.log(jobs, storedJobId, jobApplied);

            const jobApplied = []
            for (const id of storedJobId) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    jobApplied.push(job)
                }
            }
            setAppliedJobs(jobApplied)
            setDisplayjobs(jobApplied)
        }

    }, [])
    return (
        <div>
            <h1>Applied jobs list {appliedJobs.length}</h1>
            <details className="dropdown">
                <summary className="btn m-1">filter</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleJobFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobFilter('remote')}><a>Remote </a></li>
                    <li onClick={() => handleJobFilter('onsite')}><a>Onsite </a></li>
                </ul>
            </details>
            <ul className='mt-40'>
                {
                    displayJobs.map(job => <li key={job.id}>
                        <span>{job.job_title} {job.company_name} : {job.remote_or_onsite}</span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Appliedjob;
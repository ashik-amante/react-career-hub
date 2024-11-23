import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const Featured = () => {
    const [jobs, setJobs] = useState([])
    const [dataLength, setDatalength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-5xl'>Featured Jobs: {jobs.length} </h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid grid-cols-2 gap-10 mt-20
                '>
                    {
                        jobs.slice(0, dataLength).map(job => <Job job={job} key={job.id}></Job>)
                    }
                </div>
            </div>
            <div className='flex items-center justify-center mt-10'>
                <div className={dataLength === jobs.length ? 'hidden':undefined}>
                    <button onClick={() => setDatalength(jobs.length)} className="btn btn-primary px-5 py-2 rounded-md text-lg text-white  bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Show All</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
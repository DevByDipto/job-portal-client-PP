import React from 'react'
import { use } from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCard from '../shared/JobCard';

const HotJob = ({jobsPromis}) => {
    const jobs = use(jobsPromis)
    
  return (
   <div>
            <h2 className='text-4xl text-center'>Hot Jobs of the Day</h2>
            <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
  )
}

export default HotJob
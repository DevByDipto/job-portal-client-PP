import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const JobDetails = () => {
    const { _id, title, company } = useLoaderData()
    // console.log(data);
    
  return (
  <div>
            <h2 className="text-6xl"> Job details of: {title}</h2>
            <p>Company: {company}</p>
            <Link to={`/jobApply/${_id}`}>
                <button className='btn btn-primary'>Apply Now</button>
            </Link>
        </div>
  )
}

export default JobDetails
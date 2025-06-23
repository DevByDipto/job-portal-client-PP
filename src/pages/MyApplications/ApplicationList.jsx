import React, { use } from 'react';
import JobApplicationRow from './JobApplicationRow';
// import JobApplicationRow from './JobApplicationRow';

const ApplicationList = ({ myApplicationsPromise }) => {
const applications = use(myApplicationsPromise)
// console.log(applications);

    return (
        <div>
            <h3 className="text-3xl">Jobs Applied so far: {applications.length}</h3>

          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          NO
        </th>
        <th>job title</th>
        <th>company name</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        applications.map((application,index)=><JobApplicationRow key={application._id} application={application} index={index}></JobApplicationRow>)
      }
     
     
    </tbody>
   
    
  </table>
</div>

        </div>
    );
};

export default ApplicationList;
import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import useAuth from '../../Hooks/useAuth';
import UseApplicationApi from '../../api/UseApplicationApi';

const MyApplications = () => {

    const { user } = useAuth();
    
    const {myApplicationsPromise} = UseApplicationApi()
    
if(!user){
    return <span className="loading loading-bars loading-xl"></span>
}
    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={'loading your applications'}>
                <ApplicationList
                    myApplicationsPromise={myApplicationsPromise(user.email)}
                ></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;
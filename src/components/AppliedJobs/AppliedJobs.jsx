import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../../utility/LocalStorage';

const AppliedJobs = () => {
      const jobs = useLoaderData();
      const [appliedJobs, setAppliedJobs] = useState([]);
      useEffect(() => {
            const storedJobIds = getStoredJobApplication();
            if (jobs.length > 0) {
                  const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
                  setAppliedJobs(jobsApplied);
            }
      }, [])
      return (
            <div>
                  <h3>this is applied jobs section : { appliedJobs.length }</h3>
            </div>
      );
};

export default AppliedJobs;
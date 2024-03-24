import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {
      const [jobs, setJobs] = useState([])
      const [dataLength, setDataLength] = useState(4)
      useEffect(() => {
            fetch('jobs.json')
                  .then(res => res.json())
                  .then(data => setJobs(data))
            
      },[])



      return (
            <div className=''>
                  <div className='text-center'>
                        <h2 className="text-5xl">Featured Jobs { jobs.length}</h2>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique blanditiis est eos nam aperiam deleniti! Cupiditate, ducimus error doloribus deleniti placeat debitis quos et nesciunt expedita laudantium tenetur explicabo rerum.</p>
                  </div>
                  <div className='grid grid-cols-2 gap-4 mt-8'>
                        {
                              jobs.slice(0, dataLength).map((job) => <Job key={job.id} job={job} />)
                        }
                  </div>
                  <div className={`text-center my-6 ${dataLength == jobs.length && 'hidden'}` }>
                        <button
                              onClick={() =>setDataLength(jobs.length)}
                              className="btn btn-primary">Show All Jobs</button>
                  </div>
            </div>
            
      );
};

export default FeaturedJobs;
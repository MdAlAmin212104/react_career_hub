import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {
      const [jobs, setJobs] = useState([])
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
                  <div>
                        {
                              jobs.map((job) => <Job key={job.id} job={job} />)
                        }
                  </div>
            </div>
            
      );
};

export default FeaturedJobs;
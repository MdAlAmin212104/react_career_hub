import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobsDetails = () => {
      const jobs = useLoaderData();
      const { id } = useParams();
      const job = jobs.find(j => j.id == id);
      console.log(job);
      const {company_name} = job
      return (
            <div>
                  <div className='grid gap-4 md:grid-cols-4'>
                        <div className='border md:col-span-3'>
                              <h2 className='text-4xl'>Deatils commit here</h2>
                              <p>{company_name }</p>

                        </div>
                        <div className='border text-center'>
                              <h2 className='text-4xl'>side thinks</h2>
                              <button className='btn btn-primary'>Applied </button>

                        </div>

                  </div>
            </div>
      );
};

export default JobsDetails;
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useParams } from 'react-router-dom';
import { saveApplicationJobs } from '../../utility/LocalStorage';

const JobsDetails = () => {
      const jobs = useLoaderData();
      const { id } = useParams();
      const idInt = parseInt(id)
      const job = jobs.find(j => j.id == id);
      const { company_name } = job
      const handleAppliedJob = () => {
            saveApplicationJobs(idInt);
            toast("You have applied successfully");

      }
      return (
            <div>
                  <div className='grid gap-4 md:grid-cols-4'>
                        <div className='border md:col-span-3'>
                              <h2 className='text-4xl'>Deatils commit here</h2>
                              <p>{company_name }</p>

                        </div>
                        <div className='border text-center'>
                              <ToastContainer />
                              <h2 className='text-4xl'>side thinks</h2>
                              <button
                                    onClick={handleAppliedJob}
                                    className='btn btn-primary'>Applied </button>

                        </div>

                  </div>
            </div>
      );
};

export default JobsDetails;
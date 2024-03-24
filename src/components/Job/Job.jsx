import React from 'react';
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
      const { id, logo, job_title, company_name, remote_or_onsite, location, salary, job_type } = job;
      return (
            <div className="card card-compact bg-base-100 shadow-xl p-4">
                  <figure><img src={logo} alt="Shoes" /></figure>
                  <div className="card-body">
                        <h2 className="card-title">{job_title}</h2>
                        <p>{company_name}</p>
                        <div>
                              <button className='px-5 py-2 border font-extrabold rounded text-[#7E90FE] mr-4 border-[#7E90FE]'>{remote_or_onsite}</button>
                              <button className='px-5 py-2 border font-extrabold rounded text-[#7E90FE] mr-4 border-[#7E90FE]'>{job_type}</button>
                        </div>
                        <div className='mt-4 flex gap-8'>
                              <h2 className='flex gap-2'><MdOutlineLocationOn className='text-2xl' />{location}</h2>
                              <h2 className='flex gap-2'><HiOutlineCurrencyDollar className='text-2xl'/>{ salary}</h2>
                        </div>
                        <div className="card-actions">
                              <Link to={`job/${id}`}>
                                    <button className="btn btn-primary">View Details</button>
                              </Link>
                        </div>
                  </div>
            </div>
      );
};

export default Job;
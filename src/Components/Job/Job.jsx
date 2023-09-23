import { GrLocation } from 'react-icons/gr';
import { BiDollarCircle } from 'react-icons/bi';
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom';

const Job = ({ job }) => {
  const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary} = job;
  const navigate = useNavigate();

  const handleJobdetails= () => {
    navigate(`/jobDetails/${id}`);
  }

  return (
    <div className='border border-solid border-[#E8E8E8] p-4 rounded-lg m-2'>
      <div className="my-4">
        <img className="h-[35px] w-auto" src={logo} alt="" />
      </div>
      <div>
        <h1 className="text-[#474747] text-2xl font-semibold">{job_title}</h1>
        <h2 className="text-xl text-[#757575] font-semibold mb-3">{company_name}</h2>
        <button className="btn bg-transparent mr-2 border border-solid border-[#7E90FE] text-[#7E90FE] font-bold hover:bg-[#7E90FE] hover:text-[white]">{remote_or_onsite}</button>
        <button className="btn bg-transparent border border-solid border-[#7E90FE] text-[#7E90FE] font-bold hover:bg-[#7E90FE] hover:text-[white]">{job_type}</button>
        
        <div className='flex'>
          <div className='text-[#757575] flex items-center my-2 mr-2'>
            <GrLocation className='text-xl mr-2'></GrLocation>
            <p className='my-1'>{location}</p>
          </div>
          
          <div className='text-[#757575] flex items-center my-2'>
            <BiDollarCircle className='text-xl mr-2'></BiDollarCircle>
            <p className='my-1'>{salary}</p>
          </div>
        </div>
        <div onClick={handleJobdetails}>
          <Button btnLabel={'View More'}></Button>
        </div>
      </div>
    </div>
  )
}

export default Job

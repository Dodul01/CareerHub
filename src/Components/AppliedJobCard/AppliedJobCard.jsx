import { GrLocation } from 'react-icons/gr';
import { BiDollarCircle } from 'react-icons/bi';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const AppliedJobCard = ({job}) => {
  const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary} = job;
  const navigate = useNavigate();

  const handleJobDetails = () =>{
    navigate(`/jobDetails/${id}`)
  }

  return (
    <div className='flex items-center justify-between border border-solid border-[#E8E8E8] rounded-lg m-3 p-4'>
      <div className="flex items-center justify-center bg-[#F4F4F4] h-[100px] w-[100px] rounded m-2">
        <img className="w-[80px]" src={logo} alt="" />
      </div>
      <div className='flex-grow ml-2'>
        <h3 className='text-2xl font-semibold'>{job_title}</h3>
        <p>{company_name}</p>

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
      </div>
      <div onClick={handleJobDetails}>
        <Button btnLabel={'View Details'}></Button>
      </div>
    </div>
  )
}

export default AppliedJobCard

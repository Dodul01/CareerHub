import { useLoaderData, useParams } from "react-router-dom";
import { BiDollarCircle, BiCalendar } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
import Button from "../../Components/Button/Button";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { storeData } from "../../Storage/StoreData";

const JobDetails = () => {
  const data = useLoaderData();
  const currentPage = useParams();
  const findPage = data.find(obj => obj.id == currentPage.id)
  const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = findPage;

  const handleApplyJob = () =>{
    storeData(id)
    toast.success('applied Sucessfully')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-5">Job Details</h1>
      <div className="flex">
        <div className="grow-[3]">
          <h1 className="text-2xl font-bold mb-4">{job_title}</h1>
          <h2 className="text-xl text-[#757575] font-semibold mb-3">{company_name}</h2>

          <h2 className="text-xl font-bold mb-4">Job Description</h2>
          <p className="text-[#757575] max-w-3xl text-base mb-5">{job_description}</p>

          <h2 className="text-xl font-bold mb-4">Job Responsibility</h2>
          <p className="text-[#757575] max-w-3xl text-base mb-5">{job_responsibility}</p>

          <h2 className="text-xl font-bold mb-4">Educational Requirements</h2>
          <p className="text-[#757575] max-w-3xl text-base mb-5">{educational_requirements}</p>

        </div>

        <div className="grow-[1]">
          <div className="bg-[#F2F4FF] p-4 rounded-lg">
            <h2 className="font-bold mb-2">Job Details</h2>
            <hr />
            <div className="flex items-center my-2">
              <BiDollarCircle className="text-[#474747] text-xl mr-1"></BiDollarCircle>
              <span className="font-bold text-gray-600">Selary:</span>
              <p className="text-gray-600 font-semibold ml-2">{salary}</p>
            </div>

            <div className="flex items-center my-2">
              <BiCalendar className="text-[#474747] text-xl mr-1"></BiCalendar>
              <span className="font-bold text-gray-600">Job Title:</span>
              <p className="text-gray-600 font-semibold ml-2">{job_title}</p>
            </div>

            <h2 className="font-bold mt-6 mb-2">Contact Information</h2>
            <hr />

            <div className="flex items-center my-2">
              <BsFillTelephoneFill className="text-[#474747] text-xl mr-1"></BsFillTelephoneFill>
              <span className="font-bold text-gray-600">Phone:</span>
              <p className="text-gray-600 font-semibold ml-2">+{contact_information.phone}</p>
            </div>

            <div className="flex items-center my-2">
              <MdEmail className="text-[#474747] text-xl mr-1"></MdEmail>
              <span className="font-bold text-gray-600">Mail:</span>
              <p className="text-gray-600 font-semibold ml-2">+{contact_information.email}</p>
            </div>
            
            <div className="flex items-center my-2">
              <GrLocation className="text-[#474747] text-xl mr-1"></GrLocation>
              <span className="font-bold text-gray-600">Address:</span>
              <p className="text-gray-600 font-semibold ml-2">+{contact_information.address}</p>
            </div>

            <div onClick={handleApplyJob}>
              <Button btnLabel={'Apply Now'}></Button>
            </div>
            <ToastContainer/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetails

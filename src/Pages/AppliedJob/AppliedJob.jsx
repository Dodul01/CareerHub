import { useLoaderData } from "react-router-dom";
import { getData } from "../../Storage/getData";
import { useEffect, useState } from "react";
import AppliedJobCard from "../../Components/AppliedJobCard/AppliedJobCard";
import { toast, ToastContainer } from "react-toastify";


const AppliedJob = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  const allJobs = useLoaderData();

  useEffect(() => {
    const applyedJobsId = getData();
    const jobs = allJobs.filter(job => applyedJobsId.includes(job.id));
    setAppliedJobs(jobs);
  }, [allJobs])

  const clearApplyedJOb = () => {
    toast.warning('You lost Your all application history.');
    localStorage.clear();
    setAppliedJobs([]);
  }

  const handleFilterJob = (e) => {
    const localdata = getData();
    const data = allJobs.filter(job => localdata.includes(job.id));

    if (e.target.name == 'Remote') {
      const remoteFilterdData = data.filter(job => job.remote_or_onsite === 'Remote' && job)
      setAppliedJobs(remoteFilterdData);
    } else if (e.target.name === 'Onsite') {
      const onSiteFilterData = data.filter(job => job.remote_or_onsite === 'Onsite' && job);
      setAppliedJobs(onSiteFilterData);
    } else {
      setAppliedJobs(data);
    }
  }

  return (
    <div className="min-h-[50vh]">
      <h1 className="text-2xl text-center font-semibold ml-6 m-2">Applied Jobs</h1>
      <div className="flex items-center justify-between mx-8">
        <div onClick={clearApplyedJOb}><p className="underline text-lg cursor-pointer font-semibold">Clear all</p></div>

        <details className="dropdown">
          <summary className="m-1 btn capitalize">Filter Job Type</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-48">
            <li onClick={handleFilterJob}><a name="all">All</a></li>
            <li onClick={handleFilterJob}><a name="Remote">Remote</a></li>
            <li onClick={handleFilterJob}><a name="Onsite">On Site</a></li>
          </ul>
        </details>
      </div>
      <div>
        {appliedJobs.map((job) => <AppliedJobCard key={job.id} job={job}></AppliedJobCard>)}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default AppliedJob

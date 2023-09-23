import Job from "../Job/Job"

const Jobs = ({ jobs }) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      {jobs.map(job => <Job key={job.id} job={job}></Job>)}
    </div>
  )
}

export default Jobs

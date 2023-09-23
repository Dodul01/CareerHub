import { useEffect, useState } from "react"
import SectionHead from "../../Components/SectionHead/SectionHead"
import axios from "axios"
import Jobs from "../../Components/Jobs/Jobs";

const Home = () => {
  const [jobs, setjobs] = useState([]);

  useEffect(()=>{
    axios.get('jobs.json')
    .then(response => setjobs(response.data))
  },[])
  return (
    <div className="min-h-[50vh]">
      <h1 className="text-2xl font-bold">Banner Here</h1>
      <SectionHead title={'Job Category List'} desc={'Explore thousands of job opportunities with all the information you need. Its your future'}></SectionHead>
      <SectionHead title={'Featured Jobs'} desc={'Explore thousands of job opportunities with all the information you need. Its your future'}></SectionHead>
      <Jobs jobs={jobs}></Jobs>
    </div>
  )
}

export default Home

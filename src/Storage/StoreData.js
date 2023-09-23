import { getData } from "./getData"

export const storeData = (id) => {
  const storageData = getData();
  const filterData = storageData.find(jobId => jobId == id);
  
  if(!filterData){
    storageData.push(id);
    localStorage.setItem('applyedJobs', JSON.stringify(storageData));
  }
}
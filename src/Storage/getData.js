export const getData = ()=> {
  const data = localStorage.getItem('applyedJobs');
  if(data){
    return JSON.parse(data);
  }else{
    return [];
  }
}
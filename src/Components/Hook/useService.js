import { useContext, useEffect } from "react"
import { ServiceContext } from "../../App";


const useService=()=>{
  const [services,setServices] = useContext(ServiceContext);
    useEffect(()=>{
        fetch('services.json')
        .then(resp=>resp.json())
        .then(data=>setServices(data))
    },[]);
    return [services,setServices];
};

export default useService;

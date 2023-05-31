import  {React,useEffect,useState } from "react";
import FunctionalCompoUseImpChild from './FunctionalCompoUseImpChild';

const FunctionalCompoUseImp = () => {
     const [ele,setEle] = useState();
     const childRef = useRef();
     useEffect(() => {
     },[ele])
     const parentFunction = async(data) => {
         console.log("called parentfunction update",data);
         await setEle(data)
     }
     return(
         <>
         {JSON.stringify(ele)}
     
             <FunctionalCompoUseImpChild onAddHandler={parentFunction} ref = {childRef}/>
         </>
     )
}
export default FunctionalCompoUseImp;
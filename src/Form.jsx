import { useState } from "react"
import { deposit,withdraw,updatemobile,updatename } from "./Store";
import { useDispatch } from "react-redux";

export default function Form(){
     const [amount,setAmount] =useState("");
     const [name,setname]= useState("");
     const [mobile, setmobile] = useState("");

        let dispatch = useDispatch();
    return(
        <>
           <div className="container">
            <h2>account form</h2>
            <div className="row">
                <div className="col-5">
                 <input type= "number" value={amount} onChange={(e)=>{setAmount(e.target.value)}} className="form-control" placeholder="enter amt" />
                 </div>
                 <button className="btn btn-danger col-1 mx-2" onClick={
                                                    ()=>{ dispatch(withdraw(amount)); 
                                                        setAmount("");
                                                    } }  >withdraw</button>
                 <button className="btn btn-primary col-1"   onClick={
                                                    ()=>{ dispatch(deposit(amount)); 
                                                        setAmount("");
                                                    } }    >deposit</button>
            </div>
            <div className="row mt-2">
                <div className="col-5">
                 <input type= "text" value={name} onChange={(e)=>{setname(e.target.value)}} className="form-control" placeholder="enter name" />
                 </div>
                 <button className="btn btn-primary col-1 mx-2"   onClick={
                                                    ()=>{ dispatch(updatename(name)); 
                                                        setname("");
                                                    } }     >update</button>
            </div>
            <div className="row mt-2">
                <div className="col-5">
                 <input type= "number" value={mobile} onChange={(e)=>{setmobile(e.target.value)}} className="form-control" placeholder="enter mobile" />
                 </div>
                 <button className="btn btn-primary col-1 mx-2"     onClick={
                                                    ()=>{ dispatch(updatemobile(mobile)); 
                                                        setmobile("");
                                                    } }   >update</button>
            </div>
           </div>
        </>
    )
}
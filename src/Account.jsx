import { useSelector } from "react-redux"
export default function Account(){
     let data = useSelector((state)=>{
               return state.user;
          })
    return(
        <>
            <div className="container">
                <h2> DETAILS</h2>
                <table className="table table-bordered w-50">
                    <thead>
                         <tr>
                             <th>Balance</th>
                             <th>full name</th>
                             <th>mobile</th>
                         </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.balance}</td>
                            <td>{data.fullname}</td>
                            <td>{data.mobile}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
// import React, { Component } from 'react'

// export default class ApiExample extends Component {
//     constructor (props){
//         super(props)
//         this.state = {
//             fetchdata : {}
//         }
//         fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json()).then(res => {this.setState({data : res})
//     })
//     }
//     render() {
//     return (
//         <>
//       <div>
//       <h1>Fetch Api Data</h1>
//         {/* {JSON.stringify(this.state.fetchdata)} */}
//         <table className="tab-border" border="2px solid black" width="90%">
//                 <tr >
//                     <td>userid</td>
//                     <td>id</td>
//                     <td>title</td>
//                     <td>completed</td>
//                 </tr>
//                 {
//                     data.map((item)=>
//                     <tr >
//                         <td>{item.userId}</td>
//                         <td>{item.id}</td>
//                         <td>{item.title}</td>
//                         <td>{item.completed.toString()}</td>
//                     </tr>
//                     )
//                 }
//             </table>
//       </div>
//       </>
//     )
//   }
// }





import React, { Component, useEffect, useState } from "react";

const FetchApi = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
            result.json().then((resp) => {
                setdata(resp)
            })
        })
    }, []);
    // console.log(data);
    return (
        <>
            <div>
                <h1>Fetch api data</h1>
                <table className="tab-border" border="2px solid black" width="90%">
                    <tr >
                        <td>userid</td>
                        <td>id</td>
                        <td>title</td>
                        <td>completed</td>
                    </tr>
                    {
                        data.map((item) =>
                            <tr >
                                <td>{item.userId}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.completed.toString()}</td>
                            </tr>
                        )
                    }
                </table>
            </div>
        </>
    )
};
export default FetchApi;





// import React,{useState,useEffect} from "react";

// function ImgApi() {
//     const [data,setdata] = useState([])
//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/photos").then((res)=>{
//             res.json().then((rep)=>{
//                 setdata(rep)
//             })
//         })
//     }, []);
//     return ( 
//         <>
//           <table width="100%" border="2px" className="tab-border">
//             <tr>
//                 <td>albumid</td>
//                 <td>id</td>
//                 <td>title</td>
//                 <td>url</td>
//                 <td>thumbnailurl</td>
//             </tr>
//             {
//                 data.map((item)=>
//                 <tr>
//                     <td>{item.albumId}</td>
//                     <td>{item.id}</td>
//                     <td>{item.title}</td>
//                     <td><img src={item.url} alt="" /></td>
//                     <td>{item.thumbnailUrl}</td>
//                 </tr>
//                 )
//             }
//           </table>
//         </>
//      );
// }

// export default ImgApi;
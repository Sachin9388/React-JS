// import React, { Component } from 'react'
// import EnhancedCompo from './17EnhancedCompo'

// class Hocmain extends Component {
//     render(){
//         console.log("Main Component Called");
//         const {clickHandle} = this.props
//         <div>
//             <button onClick={clickHandle} > Btn Click Main Component</button>
//         </div>
//         return(
//             <>
// <div class="card card-cascade narrower">
//   <div
//     class="view view-cascade gradient-card-header blue-gradient narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center">

//     <div>
//       <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
//         <i class="fas fa-th-large mt-0"></i>
//       </button>
//       <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
//         <i class="fas fa-columns mt-0"></i>
//       </button>
//     </div>

//     <a href="" class="white-text mx-3">Table name</a>

//     <div>
//       <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
//         <i class="fas fa-pencil-alt mt-0"></i>
//       </button>
//       <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
//         <i class="far fa-trash-alt mt-0"></i>
//       </button>
//       <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
//         <i class="fas fa-info-circle mt-0"></i>
//       </button>
//     </div>

//   </div>

//   <div class="px-4">

//     <div class="table-wrapper">
//       <table class="table table-hover mb-0">
//         <thead>
//           <tr>
//             <th>
//               <input class="form-check-input" type="checkbox" id="checkbox">
//               <label class="form-check-label" for="checkbox" class="mr-2 label-table"></label>
//             </th>
//             <th class="th-lg">
//               <a>First Name
//                 <i class="fas fa-sort ml-1"></i>
//               </a>
//             </th>
//             <th class="th-lg">
//               <a href="">Last Name
//                 <i class="fas fa-sort ml-1"></i>
//               </a>
//             </th>
//             <th class="th-lg">
//               <a href="">Username
//                 <i class="fas fa-sort ml-1"></i>
//               </a>
//             </th>
//             <th class="th-lg">
//               <a href="">Username
//                 <i class="fas fa-sort ml-1"></i>
//               </a>
//             </th>
//             <th class="th-lg">
//               <a href="">Username
//                 <i class="fas fa-sort ml-1"></i>
//               </a>
//             </th>
//             <th class="th-lg">
//               <a href="">Username
//                 <i class="fas fa-sort ml-1"></i>
//               </a>
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <th scope="row">
//               <input class="form-check-input" type="checkbox" id="checkbox1">
//               <label class="form-check-label" for="checkbox1" class="label-table"></label>
//             </th>
//             <td>Mark</td>
//             <td>Otto</td>
//             <td>@mdo</td>
//             <td>Mark</td>
//             <td>Otto</td>
//             <td>@mdo</td>
//           </tr>
//           <tr>
//             <th scope="row">
//               <input class="form-check-input" type="checkbox" id="checkbox2">
//               <label class="form-check-label" for="checkbox2" class="label-table"></label>
//             </th>
//             <td>Jacob</td>
//             <td>Thornton</td>
//             <td>@fat</td>
//             <td>Jacob</td>
//             <td>Thornton</td>
//             <td>@fat</td>
//           </tr>
//           <tr>
//             <th scope="row">
//               <input class="form-check-input" type="checkbox" id="checkbox3">
//               <label class="form-check-label" for="checkbox3" class="label-table"></label>
//             </th>
//             <td>Larry</td>
//             <td>the Bird</td>
//             <td>@twitter</td>
//             <td>Larry</td>
//             <td>the Bird</td>
//             <td>@twitter</td>
//           </tr>
//           <tr>
//             <th scope="row">
//               <input class="form-check-input" type="checkbox" id="checkbox4">
//               <label class="form-check-label" for="checkbox4" class="label-table"></label>
//             </th>
//             <td>Paul</td>
//             <td>Topolski</td>
//             <td>@P_Topolski</td>
//             <td>Paul</td>
//             <td>Topolski</td>
//             <td>@P_Topolski</td>
//           </tr>
//           <tr>
//             <th scope="row">
//               <input class="form-check-input" type="checkbox" id="checkbox5">
//               <label class="form-check-label" for="checkbox5" class="label-table"></label>
//             </th>
//             <td>Larry</td>
//             <td>the Bird</td>
//             <td>@twitter</td>
//             <td>Larry</td>
//             <td>the Bird</td>
//             <td>@twitter</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>

//   </div>

// </div>
//             </>
//         )
//     }
// }

// export default EnhancedCompo(Hocmain)
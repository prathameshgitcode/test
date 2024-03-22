// import fetchReports from "@/lib/actions/refreshtoken";

// export default async function RefreshToken() {
//   try {
//     let reportsdata = await fetchReports();
// console.log(reportsdata);

//     if (reportsdata) {
//       const data = reportsdata;
//       console.log(data);

//       // Return the component JSX or null based on your logic
//       return (
//         <div>
//           <h1>Data from API:</h1>
//           <pre>{JSON.stringify(data, null, 2)}</pre>
//         </div>
//       );
//     } else {
//       console.error('No schedule data received');
//     }
//   } catch (error) {
//     console.error('Error fetching schedule data:', error);
//   }

//   return (
//     <div>
//       <h1>No Data Available</h1>
//     </div>
//   );
// }
// import ListItem from "./ListItem";
// import { gql, useQuery, useLazyQuery } from "@apollo/client";
// import { useState } from "react";

// const ListRakyat = (props) => {
//   const GetRakyatBynik = gql`
//     query MyQuery($_eq: numeric!) {
//       data_rakyat(where: { nik: { _eq: $_eq } }) {
//         nama
//         nik
//         ket
//       }
//     }
//   `;

//   const [getById, { data: databyid, loading: tunggu, error: errorgan }] =
//     useLazyQuery(GetRakyatBynik);
//   const [nik, setNik] = useState(0);

//   const onGetData = () => {
//     getById({
//       variables: {
//         _eq: nik,
//       },
//     });
//     setNik(databyid?.data_rakyat);
//   };

//   const onChangeId = (e) => {
//     if (e.target) {
//       setId(e.target.value);
//     }
//   };

//   return (
//     <div>
//       <div class="container">
//         <form class="d-flex">
//           <input
//             value={nik}
//             onChange={onChangeId}
//             class="form-control me-2"
//             type="search"
//             placeholder="Search"
//             aria-label="Search"
//           />
//           <button
//             onClick={onGetData}
//             class="btn btn-outline-success"
//             type="submit"
//           >
//             Cari
//           </button>
//         </form>
//         <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
//           {databyid?.anggota.map((item) => (
//             <ListItem key={item.nik} query={item} />
//           ))}
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ListRakyat;

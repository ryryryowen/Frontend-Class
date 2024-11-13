import React from "react";
// import { createGlobalStyle } from "styled-components";
// import { useRecoilValue, useRecoilState } from "recoil";
// import { minutesState, hoursSelector } from "./components/atoms";

// const GlobalStyle = createGlobalStyle`
//   *{
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

//     ul,li {
//       list-style: none;
//     }

//     a {
//       text-decoration: none;
//       color: inherit;
//     }
// `;

// const App = () => {
//   const [hours, setHours] = useRecoilState(hoursSelector);
//   const [minutes, setMinutes] = useRecoilState(minutesState);
//   const onMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setMinutes(+event.currentTarget.value);
//   };
//   const onHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setHours(+event.currentTarget.value);
//   };
//   return (
//     <>
//       <GlobalStyle />
//       <div>
//         <input
//           value={minutes}
//           onChange={onMinutesChange}
//           type="number"
//           placeholder="Minutes"
//         />
//         <input
//           value={hours}
//           onChange={onHoursChange}
//           type="number"
//           placeholder="Hours"
//         />
//       </div>
//     </>
//   );
// };

// export default App;

// // /** @format */

// const initialState = {
//     like: [],
//   };
//   // 
//   const likeReducer = (state = initialState, { type, payload }) => {
//     //   console.log("test", type);
//     switch (type) {
//       case "SET_LIKE":
//         //   return { ...state, allTweets: payload };
//         return { like: [...payload] };
//       case "ADD_LIKE":
//         return {  like: [...state.like, payload] };
//       case "DELETE_LIKE":
//         return {
          
//             like: state.like.filter((lik) => {
//             return lik.id !== payload;
//           }),
//         };
    
//       default:
//         return state;
//     }
//   };
  
//   export default likeReducer;
  
//   export const setLike = (like) => {
//     return { type: "SET_LIKE", payload: like };
//   };
  
//   export const addLike = (newLike) => {
//     return { type: "ADD_LIKE", payload: newLike };
//   };
  
//   export const deleteLike = (id) => {
//     return { type: "DELETE_LIKE", payload: id };
//   };
  
 
  
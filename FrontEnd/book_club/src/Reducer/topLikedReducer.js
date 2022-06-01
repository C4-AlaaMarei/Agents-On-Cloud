// // /** @format */

// const initialState = {
//     topLike: [],
//   };
//   // 
//   const topLikeReducer = (state = initialState, { type, payload }) => {
//     //   console.log("test", type);
//     switch (type) {
//       case "SET_TOP":
//         //   return { ...state, allTweets: payload };
//         return { topLike: [...payload] };
//     //   case "ADD_TWEET":
//     //     return {tweets: [...state.tweets, payload] };
//     //   case "DELETE_TWEET":
//     //     return {
//     //       ...state,
//     //       tweets: state.tweets.filter((tweet) => {
//     //         return tweet.id !== payload;
//     //       }),
//     //     };
//     //   case "UPDATE_TWEET":
//     //     return {
//     //       ...state,
//     //       tweets: state.tweets.map((tweet) => {
//     //         if (tweet.id === payload.id) {
//     //           return payload;
//     //         }
//     //         return tweet;
//     //       }),
//     //     };
//       default:
//         return state;
//     }
//   };
  
//   export default topLikeReducer;
  
//   export const setTopLike = (topLike) => {
//     return { type: "SET_TOP", payload: topLike };
//   };
  
// //   export const addTweets = (newTweet) => {
// //     return { type: "ADD_TWEET", payload: newTweet };
// //   };
  
// //   export const deleteTweets = (id) => {
// //     return { type: "DELETE_TWEET", payload: id };
// //   };
  
// //   export const updateTweets = (newTweet) => {
// //     return { type: "UPDATE_TWEET", payload: newTweet };
// //   };
  
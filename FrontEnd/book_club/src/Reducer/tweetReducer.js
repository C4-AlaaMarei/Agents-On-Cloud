// // /** @format */

// const initialState = {
//   tweets: [],
// };
// // 
// const tweetReducer = (state = initialState, { type, payload }) => {
//   //   console.log("test", type);
//   switch (type) {
//     case "SET_TWEET":
//       //   return { ...state, allTweets: payload };
//       return { tweets: [...payload] };
//     case "ADD_TWEET":
//       return {tweets: [...state.tweets, payload] };
//     case "DELETE_TWEET":
//       return {
       
//         tweets: state.tweets.filter((tweet) => {
//           return tweet.id !== payload;
//         }),
//       };
//     case "UPDATE_TWEET":
//       return {
      
//         tweets: state.tweets.map((tweet) => {
//           if (tweet.id === payload.id) {
//             return payload;
//           }
//           return tweet;
//         }),
//       };
//     default:
//       return state;
//   }
// };

// export default tweetReducer;

// export const setTweets = (tweets) => {
//   return { type: "SET_TWEET", payload: tweets };
// };

// export const addTweets = (newTweet) => {
//   return { type: "ADD_TWEET", payload: newTweet };
// };

// export const deleteTweets = (id) => {
//   return { type: "DELETE_TWEET", payload: id };
// };

// export const updateTweets = (newTweet) => {
//   return { type: "UPDATE_TWEET", payload: newTweet };
// };

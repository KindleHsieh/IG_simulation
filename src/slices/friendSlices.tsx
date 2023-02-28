import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Friend = {
    id: number;
    location: string;
    account: string;
    isFollowing: boolean;
    avatar: string;
};

type friendState = {
    friends: Friend[];
};

const initialState: friendState = {
    friends: [
        {
          id: 1,
          location: "Singapore",
          account: "max_999",
          isFollowing: true,
          avatar: "/images/avatars/a1.png",
        },
        {
          id: 2,
          location: "Singapore",
          account: "fm_999",
          isFollowing: true,
          avatar: "/images/avatars/a2.png",
        },
        {
          id: 3,
          location: "Singapore",
          account: "joanne_999",
          isFollowing: true,
          avatar: "/images/avatars/a3.png",
        },
        {
          id: 4,
          location: "Singapore",
          account: "focus_999",
          isFollowing: true,
          avatar: "/images/avatars/a4.png",
        }
      ]
};

const followStateChange = (friends: Friend[], target: number, state: string) =>{
    for (let i = 0; i < friends.length; i++){
        let friend = friends[i];
        if (friend.id === target){
            if (state === 'follow'){
                friend.isFollowing = true;
            }
            else{
                friend.isFollowing = false;
            };
            console.log(friend.id, friend.isFollowing);
        }
    }
};

const friendSlices = createSlice({
    name: "friendsList",
    initialState,
    reducers:{
        follow: (state, action: PayloadAction<number>)=>{
            followStateChange(state.friends, action.payload, 'follow');
            // const friends = state.friends;
            // for (let i = 0; i < friends.length; i++){
            //     let friend = friends[i];
            //     if (friend.id === action.payload){
            //         friend.isFollowing = true;
            //     }
            // }
        },
        unfollow: (state, action: PayloadAction<number>)=>{
            followStateChange(state.friends, action.payload, 'unfollow')
            // const friends = state.friends;
            // for (let i = 0; i < friends.length; i++){
            //     let friend = friends[i];
            //     if (friend.id === action.payload){
            //         friend.isFollowing = false;
            //     }
            // }
        }
    },

})

export const {follow, unfollow} = friendSlices.actions;
export default friendSlices.reducer;
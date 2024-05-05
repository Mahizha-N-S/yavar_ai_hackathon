import { apiSlice } from "../apiSlice"
const AUTH_URL="/user"

//this will handle all the loading and error so we dont need to worry about it
//use mutation as our login is a post 
export const authAPiSlice =apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        login: builder.mutation({
            query: (data)=>({
                url: `${AUTH_URL}/login`,
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),
        register: builder.mutation({
            query: (data)=>({
                url: `${AUTH_URL}/register`,
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),
        logout: builder.mutation({
            query: (data)=>({
                url: `${AUTH_URL}/logout`,
                method: "POST",
            
                credentials: "include",
            }),
        }),
    }),
});

export const {useLoginMutation,useRegisterMutation,useLogoutMutation}=authAPiSlice
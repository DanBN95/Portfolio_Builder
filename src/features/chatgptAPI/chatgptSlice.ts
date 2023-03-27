import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chatgptSlice = createApi({
    reducerPath: 'chatgptAPI',
    tagTypes: ['prompts'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
    endpoints: (builder) => ({
        getAIText: builder.mutation({
            query: (prompt) => ({
                url: '/chat',
                method: 'POST',
                body: { prompt }
            }),
            /*transformResponse: we can do whatever manipulation on the 
            data we want, before des */
            invalidatesTags: ['prompts']
        })
    })
})

export const {
    useGetAITextMutation,
} = chatgptSlice;

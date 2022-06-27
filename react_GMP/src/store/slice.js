import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { initialState } from "./initial";

export const getMovies = createAsyncThunk(
    'slice/getMovies',
    async (_, thunkApi ) => {
        const state = thunkApi.getState();
        const url = new URL("http://localhost:4000/movies");
        const params = {
            filter: state.genre === "ALL" ? '' : state.genre,
            sortBy: state.sortBy,
            sortOrder: 'desc',
        };
        url.search = new URLSearchParams(params).toString();
        return await fetch(url.toString()).
        then(res => res.json());
    }
);

export const getMovie = createAsyncThunk(
    'slice/getMovie',
    async (id) => {
        return await fetch(`http://localhost:4000/movies/${id}`).
        then(res => res.json());
    }
);

const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        sortBy: (state, action) => {
            state.sortBy = action.payload
        },
        filter: (state, action) => {
            state.genre = action.payload
        }
    },
    extraReducers: {
        [getMovies.fulfilled]: (state, action) => {
            state.list = action.payload.data;
        },
        [getMovie.fulfilled]: (state, action) => {
            state.movie = action.payload;
        },
    }
})

export default slice.reducer;

export const {
    sortBy,
    filter
} = slice.actions

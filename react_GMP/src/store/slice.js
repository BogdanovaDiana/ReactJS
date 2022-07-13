import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { initialState } from "./initial";

export const getMovies = createAsyncThunk(
    'slice/getMovies',
    async (_, thunkApi ) => {
        const state = thunkApi.getState();
        const url = new URL("http://localhost:4000/movies");
        const params = {
            search: state.searchString ?? '',
            searchBy: "title",
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

export const deleteMovie = createAsyncThunk(
    'slice/deleteMovie',
    async (_, thunkApi ) => {
        const state = thunkApi.getState();
        return await fetch(`http://localhost:4000/movies/${state.currentMovieId}`, {
            method: 'DELETE'
        }).
        then(res => res.json());
    }
);

export const editMovie = createAsyncThunk(
    'slice/editMovie',
    async (movie) => {
        return await fetch(`http://localhost:4000/movies`, {
            method: 'PUT',
            body: JSON.stringify(movie),
            headers: {
                "Content-Type":"application/json"
            }
        }).
        then(res => res.json());
    }
);

export const addMovie = createAsyncThunk(
    'slice/addMovie',
    async (movie) => {
        return await fetch(`http://localhost:4000/movies`, {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                "Content-Type":"application/json"
            }
        }).
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
        },
        saveCurrentMovieData: (state, action) => {
            state.currentMovieId = action.payload
        },
        searchMovies: (state, action) => {
            state.searchString = action.payload
        },
        showDetails: (state, action) => {
            state.showDetails = true
        }
    },
    extraReducers: {
        [getMovies.fulfilled]: (state, action) => {
            state.list = action.payload.data;
        },
        [getMovie.fulfilled]: (state, action) => {
            state.movie = action.payload;
        },
        [addMovie.fulfilled]: (state, action) => {
            state.currentMovieId = action.payload.id
        },
    }
})

export default slice.reducer;

export const {
    sortBy,
    filter,
    saveCurrentMovieData,
    searchMovies,
    showDetails,
} = slice.actions

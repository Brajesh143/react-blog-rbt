import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import swal from 'sweetalert';


export const handleLogin = createAsyncThunk('handleLogin', async (data, {rejectWithValue}) => {
    try {  
      const response = await axios.post('http://localhost:5000/api/user/login', data);
      return response;
    } catch (err) {
      return rejectWithValue(err)
    }
})

// export const handleLogin = createAsyncThunk(
//   'handleLogin',
//   async ({ userInput, setisUserLoggedIn, setUser }, { dispatch }) => {
//     const response = await axios.post('http://localhost:5000/api/user/login', userInput);

//     if (response.status === 200) {
//       const resData = response.data;
//       const user_data_to_save = {
//         fname: resData.data.fname,
//         lname: resData.data.lname,
//         username: resData.data.username
//       };

//       const token = resData.token;
//       localStorage.setItem('user', JSON.stringify(user_data_to_save));
//       localStorage.setItem('token', token);

//       // dispatch(setUser({
//       //   isAuth: true,
//       //   fname: resData.data.fname,
//       //   lname: resData.data.lname,
//       //   username: resData.data.username,
//       //   token: token
//       // }));

//       // setisUserLoggedIn(true);

//       // Reset the form inputs
//       // setUser({
//       //   username: '',
//       //   password: ''
//       // });

//       swal("Success!", resData.message, "success");
//       return resData;
//     } else {
//       throw new Error('Login failed');
//     }
//   }
// );

const initialState = {
    isAuth: false,
    fname: "",
    lname: "",
    username: "",
    token: ""
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
        const { isAuth, fname, lname, username, token } = action.payload;
        state.isAuth = isAuth;
        state.fname = fname;
        state.lname = lname;
        state.username = username;
        state.token = token;
    },
    clearUser: (state) => {
        state.isAuth = false;
        state.fname = '';
        state.lname = '';
        state.username = '';
        state.token = '';
    },
  },
  // extraReducers: {
  //   [handleLogin.pending] : (state) => {
  //     state.loading = true
  //   },
  //   [handleLogin.fulfilled] : (state, action) => {
  //     state.loading = false
  //   },
  //   [handleLogin.rejected]: (state, action) => {
  //     state.loading = false
  //     state.error = action.payload.message
  //   }
  // }
  extraReducers: (builder) => {
    builder
      .addCase(handleLogin.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(handleLogin.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(handleLogin.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
})

// Action creators are generated for each case reducer function
export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;

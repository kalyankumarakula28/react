import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false, 
  error: null 
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder
    .addCase(getProducts.pending, (state) => {
      state.loading = true;
    })
    .addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    })
    .addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      console.log(action.error.message)
      state.error = action.error.message;
    });
  }
   
});

export const { fetchProducts } = productSlice.actions;

export default productSlice.reducer;

export const getProducts= createAsyncThunk('/',
   async ()=>{
    const data = await fetch("https://fakestoreapi.com/products");
      const result =await data.json();
      return  result
      //console.log(result)
  }
)
 

// export const getProducts=()=>{
//   return async function getProductsThunk(dispatch) {
    
//     const data = await fetch("https://fakestoreapi.com/products");
//     const result = await data.json();
// //console.log(result)
//     dispatch(fetchProducts(result));
//   };
// }
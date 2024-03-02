import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
  data: [],
 status:'idle'
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder
    .addCase(getProducts.pending, (state) => {
      state.status = "loading";
    })
    .addCase(getProducts.fulfilled, (state, action) => {
      state.status = 'idle';
      state.data = action.payload;
    })
    .addCase(getProducts.rejected, (state) => {
      state.status = 'error';
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
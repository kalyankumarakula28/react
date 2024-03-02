import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts(state, action) {
      //console.log(action)
      state.data = action.payload
    },
   
  },
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
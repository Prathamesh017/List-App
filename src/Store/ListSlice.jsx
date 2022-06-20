import { createSlice } from "@reduxjs/toolkit";


const initialState={
    lista:[],
    listb:[],
    selectedList:"",
    finallist:[],
}
export const ListSlice=createSlice({
    name:'list',
    initialState,
    reducers:{
        addInList:(state,action)=>{
             if(action.payload.type==="lista"){
                
             state.lista.push(action.payload.list); 
            
             
             }
             else if(action.payload.type==="listb"){
                
                 state.listb.push(action.payload.list);
                }
                
         state.finallist.push(action.payload.list);
        },
        choosenList:(state,action)=>{
              state.selectedList=action.payload;
              console.log(state.selectedList);
              if(state.selectedList==="lista"){
                  state.finallist=state.lista;
                 
              }
              else if(state.selectedList==="listb"){
                  state.finallist=state.listb;
              }
              else if(state.selectedList==="combab"){
                state.finallist=state.lista.concat(state.listb);

              }
              else if(state.selectedList==="uniab"){
                  state.finallist=state.lista.filter(value=>state.listb.includes(value));
                //   console.log(pt);
              }
              
        },
        returnLista:(state)=>{
            return state.lista;
        },
        returnListb:(state)=>{
            return state.listb;
        },
        returnListaAndb:(state)=>{
            return state.lista.push.apply(state.listb);
        },
        // returnListaOrb:

        
    }
})

export const {addInList,returnLista,returnListaAndb,returnListb,choosenList}=ListSlice.actions;
export default ListSlice.reducer;
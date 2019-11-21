  
 const addCity = payload => ({
    type: 'ADD_PROD',
    payload:payload
  })


   const deleteCity = payload=>({
    type:'DELETE_PROD',
    payload:payload
  })

function getCities() {
  return (dispatch,getState) => {
    console.log("getState()")
    console.log(getState())
    if(getState().length>0) return;
   return fetch('http://localhost:8080/cities/City').then((res)=>{
      return res.json()
    }).then((data)=>{
      dispatch({
        type:'GET_PROD',
        payload:data
      });
    })
  };
}


  export   {
addCity,deleteCity,getCities
  }
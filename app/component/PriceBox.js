// "use client";

// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import { getSession } from "next-auth/react";


// const PriceBox = () => {

//     const [data,setData] = useState('')
//     const [price,setPrice] = useState([])
//     useEffect(() => {
//         const fetchData = async ()=>{
//           await getForum()
//           await getPrice()
//         }
//         fetchData()
//       }, [])
      
//       const getPrice = async () =>{
//         const res = await fetch(`/api/getProducts`,{
//           method:'GET',
//           headers:{'Content-Type':'application/json'}
//         })
//         if(!res.ok){
//           throw new Error(`Failed to fetch product price, status: ${res.status}`)
//         }
//         const priceData = await res.json()
//        setPrice(priceData.data)
//       }


//       const getForum = async () =>{
//         // const userEmail = (await getSession()).user.email
//         const username = await getSession()
//         const currentUser = username.user.email
//         console.log(currentUser)
//         const res = await fetch(`/api/confirmation?userId=${encodeURIComponent(currentUser)}`,{
//           method:'GET',
//           headers:{"Content-Type":"application/json"},
//         });
//         if(!res.ok){
//           throw new Error(`Failed to fetch user forum, status: ${res.status}`);
//         }
//         const forumData = await res.json()
//         console.log('this is forum ->',forumData)
//         setData(forumData)
//       }


// const payNow = async () =>{
//     const res = await fetch('/api/checkout_session',{
//       method:'POST',
//       headers:{'Content-Type':'application/json'},
//       body: JSON.stringify({
//         price:unitPriceId
//       })
//     })
//     if(!res.ok){
//      throw new Error(`Failed to fetch user forum, status: ${res.status}`)
//     }
//     console.log('payment POST success!',res)
//   }
  
// if(!data){
//     return null
// }

//       let index = 0
// if(data.hours === '2 or Less Hours' && data.workers === '1'){
//   index = 12
// }
// if(data.hours === '2 or Less Hours' && data.workers === '2'){
//   index = 10
// }
// if(data.hours === '2 or Less Hours' && data.workers === '3'){
//   index = 9
// }
// if(data.hours === '2 or Less Hours' && data.workers === '4'){
//   index = 8
// }
// if(data.hours === '3 to 5 Hours' && data.workers === '1'){
//   index = 7
// }
// if(data.hours === '3 to 5 Hours' && data.workers === '2'){
//   index = 6
// }
// if(data.hours === '3 to 5 Hours' && data.workers === '3'){
//   index = 5
// }
// if(data.hours === '3 to 5 Hours' && data.workers === '4'){
//   index = 4
// }
// if(data.hours === '6 to 8 Hours' && data.workers === '1'){
//   index = 3
// }
// if(data.hours === '6 to 8 Hours' && data.workers === '2'){
//   index = 2
// }
// if(data.hours === '6 to 8 Hours' && data.workers === '3'){
//   index = 1
// }
// if(data.hours === '6 to 8 Hours' && data.workers === '4'){
//   index = 0
// }
// const unitAmount = price.length > 0 ? price[`${index}`].unit_amount / 100 : 0
// const unitPriceId = price.length > 0 ? price[`${index}`].id :''
//   return (
//     <div className=" flex flex-col mb-5 border-2 rounded-lg border-black p-5 max-sm:min-h-screen ">
//        <span>Deposit due now:
//           {data.hours === '2 or Less Hours' && data.workers === '1'?<>${unitAmount}</>:null}
//           {data.hours === '2 or Less Hours' && data.workers === '2'?<>${unitAmount}</>:null}
//           {data.hours === '2 or Less Hours' && data.workers === '3'?<>${unitAmount}</>:null}
//           {data.hours === '2 or Less Hours' && data.workers === '4'?<>${unitAmount}</>:null}

//           {data.hours === '3 to 5 Hours' && data.workers === '1'?<>${unitAmount}</>:null}
//           {data.hours === '3 to 5 Hours'&& data.workers === '2'?<>${unitAmount}</>:null}
//           {data.hours === '3 to 5 Hours'&& data.workers === '3'?<>${unitAmount}</>:null}
//           {data.hours === '3 to 5 Hours'&& data.workers === '4'?<>${unitAmount}</>:null}

//           {data.hours === '6 to 8 Hours'&& data.workers === '1'?<>${unitAmount}</>:null}
//           {data.hours === '6 to 8 Hours'&& data.workers === '2'?<>${unitAmount}</>:null}
//           {data.hours === '6 to 8 Hours'&& data.workers === '3'?<>${unitAmount}</>:null}
//           {data.hours === '6 to 8 Hours'&& data.workers === '4'?<>${unitAmount}</>:null}
        
        
//         </span>
//         <span>Total due to Worker(s):
//         {data.hours === '2 or Less Hours' && data.workers === '1'?<>$50</>:null}
//           {data.hours === '2 or Less Hours' && data.workers === '2'?<>$100</>:null}
//           {data.hours === '2 or Less Hours' && data.workers === '3'?<>$150</>:null}
//           {data.hours === '2 or Less Hours' && data.workers === '4'?<>$200</>:null}

//           {data.hours === '3 to 5 Hours' && data.workers === '1'?<>$100</>:null}
//           {data.hours === '3 to 5 Hours'&& data.workers === '2'?<>$200</>:null}
//           {data.hours === '3 to 5 Hours'&& data.workers === '3'?<>$300</>:null}
//           {data.hours === '3 to 5 Hours'&& data.workers === '4'?<>$400</>:null}

//           {data.hours === '6 to 8 Hours'&& data.workers === '1'?<>$160</>:null}
//           {data.hours === '6 to 8 Hours'&& data.workers === '2'?<>$320</>:null}
//           {data.hours === '6 to 8 Hours'&& data.workers === '3'?<>$480</>:null}
//           {data.hours === '6 to 8 Hours'&& data.workers === '4'?<>$640</>:null}

//         </span>
//         <span>Total job cost:
//         {data.hours === '2 or Less Hours' && data.workers === '1'?<>$100</>:null}
//           {data.hours === '2 or Less Hours' && data.workers === '2'?<>$200</>:null}
//           {data.hours === '2 or Less Hours' && data.workers === '3'?<>$300</>:null}
//           {data.hours === '2 or Less Hours' && data.workers === '4'?<>$400</>:null}

//           {data.hours === '3 to 5 Hours' && data.workers === '1'?<>$175</>:null}
//           {data.hours === '3 to 5 Hours'&& data.workers === '2'?<>$350</>:null}
//           {data.hours === '3 to 5 Hours'&& data.workers === '3'?<>$525</>:null}
//           {data.hours === '3 to 5 Hours'&& data.workers === '4'?<>$700</>:null}

//           {data.hours === '6 to 8 Hours'&& data.workers === '1'?<>$240</>:null}
//           {data.hours === '6 to 8 Hours'&& data.workers === '2'?<>$480</>:null}
//           {data.hours === '6 to 8 Hours'&& data.workers === '3'?<>$720</>:null}
//           {data.hours === '6 to 8 Hours'&& data.workers === '4'?<>$960</>:null}

//         </span>

//     </div>
//   )
// }

// export default PriceBox

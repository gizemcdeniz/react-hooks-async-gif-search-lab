import React, { useEffect, useState }  from "react";
export default function GifList({data}){
    const [List,setData]=useState([])
useEffect(()=>{
if(data.length!=0){
    setData(data)
   
}
},[data])
return(
    
<div>
    <ul>
       
{data.map((item,i)=>(
   <li key={i}> 
       <img src={item.url} alt="gif" key={i}/>
   </li>
))}
</ul>
</div>
)
}
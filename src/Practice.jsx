import React, { useState } from 'react'
import { movies } from './Data'
import './Practice.css';
const Practice = () => {
    const [movieList,setMovieList]=useState(movies);
    const filteredByData=(cat)=>{
        setMovieList(movies.filter((data)=>data.category==cat));
    }
  return (
    <>

        <div className='my-3' style={{width:"1000px",margin:"auto",textAlign:"center"}}>
          <button type="button" onClick={()=>setMovieList(movies)} className="btn btn-outline-primary mx-3">All</button>
          <button type="button" onClick={()=>filteredByData("Action")} className="btn btn-outline-secondary mx-3">Action</button>
          <button type="button" onClick={()=>filteredByData("Thriller")} className="btn btn-outline-success mx-3">Thriller</button>
          <button type="button" onClick={()=>filteredByData("Animation")} className="btn btn-outline-warning mx-3">Animation</button>
          <button type="button" onClick={()=>filteredByData("Horror")} className="btn btn-outline-danger mx-3">Horror</button>
          <button type="button" onClick={()=>filteredByData("Drama")} className="btn btn-outline-info mx-3">Drama</button>
          <button type="button" onClick={()=>filteredByData("Sci-Fi")} className="btn btn-outline-light mx-3">Sci-Fi</button>
        </div>
   <div style={{display:"flex", justifyContent:"center",alignItems:"center",
   flexWrap:"wrap",textAlign:"center",width:"1300px",margin:"auto",marginTop:"10px",
   }}>
      {
        movieList.map((item)=>
        <div key={item.id}>
            <div style={{maxWidth:"280px"}}>
                <div style={{padding:"10px"}} className='hover-action'>
                <img src={item.poster_path} alt="images" style={{width:"200px",borderRadius:"10px",height:"280px",
                    border:"1px solid yellow"}}/>
                </div>
                <h5>{item.title}</h5>
                <p>{item.release_date}</p>
            </div>
        </div>)
      }
   </div>
   </>
  )
}

export default Practice

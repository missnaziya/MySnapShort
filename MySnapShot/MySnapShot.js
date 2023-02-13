import React, { useState } from "react";
import "./MySnapShot.css";

const MySnapShot = () => {
  const data = [
    {
      userId: 1,
      id: 1,
      title: "Mountain",
      url: "https://media.istockphoto.com/id/1288385045/photo/snowcapped-k2-peak.jpg?s=1024x1024&w=is&k=20&c=0JB2ZrNnYr-_ql1cfJ23wxZ5o4h6c6We5j6I9YZmbwI=",
    },
    {
      userId: 1,
      id: 2,
      title: "Bird",
      url: "https://a-z-animals.com/media/2022/06/Lovebirds-on-fence.jpg",
    },
    {
      userId: 1,
      id: 3,
      title: "Forest",
      url: "https://www.treehugger.com/thmb/IAlZGVzhRLGZL_E0zSv7qbzyGRA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1273584292-cbcd5f85f4c646d58f7a7fa158dcaaeb.jpg",
    },
    {
      userId: 1,
      id: 4,
      title: "Sunset",
      url: "https://media.istockphoto.com/id/1172427455/photo/beautiful-sunset-over-the-tropical-sea.jpg?s=1024x1024&w=is&k=20&c=O5hWBVPkIW8dMUosrba6MUmvHR0Y1kiSpcehw8Mg_xM=",
    },
  ];
  const [menu, setMenu] = useState(data);
  const [click,setClick] = useState(true)
//   const [input,setInput] = useState("")

//   const myFilter = () => {
  
//       const filteredData = menu.filter((elem,i) => {
//           return elem.id == i;
//         });
//         setMenu(filteredData);
//         // setMenu(data);
  
//   };

// const userinput = (e) =>{
//          setInput(e.target.value)
//          console.log(input)

//          if(input){
//           const search =  menu.filter((elem)=>{
//                 return elem.title == input;
//             }      
//             );
//             setMenu(search);
//          }

// }



const myFilter = (e) =>{
    // setMenu(data);
if(click==true){
    const value = e.target.value;

    const filteredData = menu.filter((elem)=>{
        return elem.id == value;
    }      
    );
    setMenu(filteredData);

console.log(menu)
setClick(false);
// setMenu(data);
}
else{
    setMenu(data);
    setClick(true);

}
}


  return (
    <div id="main">
   
      <h1 id="heading">SnapShot</h1>
      {/* <input type="search" id="input" onChange={userinput}></input> */}
      <div id="myoptions">
        <button className="button" value='1' onClick={myFilter}>{click ? "Mountain" : "Cancel"}</button>
        <button className="button" value='2' onClick={myFilter}>{click ? "Bird" : "Cancel"}</button>
        <button className="button" value='3' onClick={myFilter}>{click ? "Forest" : "Cancel"}</button>
        <button className="button" value='4' onClick={myFilter}>{click ? "Sunset" : "Cancel"}</button>


        {/* <button className="button" onClick={() => {myfilter("Bird");}}>Bird</button>
        <button className="button" onClick={() => {myfilter("Forest");}}>Forest</button>
        <button className="button" onClick={() => {myfilter("Sunset");}}>Sunset</button> */}
        <button className="button" onClick={() => {setMenu(data)}}>All</button>
      </div>
      <div id="gallery">
        {menu.map((item) => {
          const { userId, id, title, url } = item;
          return (
            <div id="container">
              <div>
                <img src={url} alt={title}></img>
              </div>
            </div>
          );
        }
        )
//  setMenu(data)
        
    }
      </div>
    </div>
  );
};

export default MySnapShot;

import React,{useState,useEffect} from "react"
import Table from "./Table";
const Inputcomp=()=>{

     
    const [getdata,setData] = useState(()=> JSON.parse(localStorage.getItem('todolistlocal')) || []);

    const myarray =getdata;

    useEffect(() => {
        if (getdata.length > 0) localStorage.setItem('todolistlocal', JSON.stringify(getdata));
      }, [getdata]);


      
      
    const [getinp,setInp]=useState("")



  const handledata=(e)=>{

    e.preventDefault();

    setData((preData)=>([...preData,getinp]))
    console.log(getdata)
    return (
        setInp("")
    )

  }

  const delitem =(e)=>{
    const item = e.currentTarget.value;

    console.log(item)

    const newarray = getdata.filter((currentValue, index, arr)=>{
        if (item != index){
            return currentValue;
        }
    })

    setData(newarray);
}

const edititem =(value , index)=>{
   
   console.log(value,index)
    const newdata =[...getdata];
    newdata[index]=value;

    console.log(newdata)
   setData([...newdata])
}
  
  

    return(
        <>
           
            <form className="frm" onSubmit={handledata}>
                <input type="text" name="mytask" value={getinp} onChange={(e)=>setInp(e.target.value)}/>
            </form>

            <ul>
           {
             getdata.map((val,index) => {
                return(
                    
                        <Table key={index} value={val} myfun={delitem} editfun={edititem} index={index}/>
                    
                );
            })
           }
        </ul>
        </>
    )
}


export default Inputcomp;

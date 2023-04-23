import React,{useState} from "react"
import Table from "./Table";
const Inputcomp=()=>{




    const [getinp,setInp]=useState("")

     
  const [getdata,setData] = useState([]);

  const myarray =getdata;

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
  

    return(
        <>
           
            <form className="frm" onSubmit={handledata}>
                <input type="text" name="mytask" value={getinp} onChange={(e)=>setInp(e.target.value)}/>
            </form>

            <ul>
           {
             getdata.map((val,index) => {
                return(
                    
                        <Table key={index} value={val} myfun={delitem} index={index}/>
                    
                );
            })
           }
        </ul>
        </>
    )
}


export default Inputcomp;

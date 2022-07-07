import React from "react";
import '../Components/Style.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListData from "./ListData";




const Home = () => {

    const[cardData, setCardData]=React.useState([])
    const[count,setCount]=React.useState(1)

    const handleAddCard = (value) => {

        let val=[];
       let array={
           index:count,
           isAddMode: true,
           isEditMode:true
       };
       setCount(count + 1)
        val.push(array)
        setCardData(cardData=>[...cardData,val[0]])
    }

    return (
        <div>

        
        <div className="button" onClick={()=>handleAddCard(true)} >
            <AddCircleIcon color="primary" /> <span className="text">add a Task</span>

            </div>

         <div>
         {/* {cardData.length>0?  
            
            // <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            
            
            // :'' }

*/}
            {cardData.map((cardNumber) => (
          <ListData card={[cardNumber]} />
        ))}
         </div>
         
            
       
       </div>
    )
}



export default Home;
import './Activity.css';
import React from 'react';
import{ useState } from 'react';
import Processing from "./Processing";
import Completed from './Completed';
import Created from './Created';


function Activity(){
  
    const [processing,setProccessing] = useState(true);
    const [complete,setComplete] = useState(false);
    const [created,setCreated] = useState(false);
    const handleFocusLi = (event) =>{
        const value = event.target.innerText;
        if(value === "Processing"){
            setProccessing(true);
            setComplete(false);
            setCreated(false);
        }
        if(value === "Completed"){
            setProccessing(false);
            setComplete(true);
            setCreated(false);
        }
        if(value === "Created"){
            setProccessing(false);
            setComplete(false);
            setCreated(true);
        }
    }
   
    return(
        <div className="activity">
            <div className="activity-head">
                <ul>
                    <li className={processing ? "onclick" : ""}  onClick={handleFocusLi}>
                        <span >Processing </span>
                    </li>
                    <li className={complete ? "onclick" : ""}  onClick={handleFocusLi}>
                        <span>Completed </span>
                    </li>
                    <li className={created ? "onclick" : ""}  onClick={handleFocusLi}>
                        <span>Created</span>
                    </li>
                </ul>
            </div>
            {processing &&
                <Processing />
            }{complete &&
                <Completed />
            }{ created && 
                <Created />
            }
           
            
            
        </div>
    );
}

export default Activity;
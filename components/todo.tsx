import { type } from "os"
import { text } from "stream/consumers"
import styles from '../styles/Home.module.css'


import usetodos from '../hooks/usetodo'
const todos=()=>
{
    const{
        todoss,
        settodo,
        ontodosubmithandler,
        gettohandler,
        ontododeletehandler,
    }=usetodos()
    return(
          <div>
            <input type="text" value={todoss} onChange={(e) => settodo(e.target.value)}  style={{margin: 20}}/>
        <button onClick={ontodosubmithandler}>submit</button>

        <h3>list of your entering data</h3>
      
        <button style={{ backgroundColor: 'red', fontSize: '20px' }} onClick={gettohandler}>getToDos</button>
         {
            todoss.map((todo:any)=>
            {
                return(
                    <button onClick={()=>ontododeletehandler(todo)}>delete</button>
                )
            })
         }
         
         
         
          </div>
       
    )
}
export default todos

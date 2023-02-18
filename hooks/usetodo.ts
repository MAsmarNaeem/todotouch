

import { useEffect, useState } from "react"
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from '../config/firebase'
import { async } from "@firebase/util";

const today=()=>
{
      const[todoss,settodo]=useState<any>([]);
          const[description,newdescription]=useState('')



        const ontodosubmithandler=async()=>
        {
           const newDoc={
          //  my:todoss,
          description,
            createdAt:new Date()
           }
          try {
            const docRef=await addDoc(collection(db,"cities"),newDoc)
            settodo([...todoss,{...newDoc,id:docRef.id}])

          } catch (error) {
            console.error("error",error)
          }
        }
        const gettohandler=async()=>
        {
        const querysnapshot=await getDocs(collection(db,"todos"))
        let make:any[]=[]
        querysnapshot.forEach((e:any )=>
        {
          make.push(
            {
              description:doc.data()?.description,
              createdAt:doc.data()?.createdAt
            }
          )
        }
        )
      }
      const ontododeletehandler=async(item:any)=>
      {
        await deleteDoc(doc(db,"todos",item.id))
        {
          const todayfilter=todoss.filter((todo:any)=>item.id!==todo.id)
          settodo(todayfilter)
        }
      }

    return(
     {
        todoss,
        settodo,
        ontodosubmithandler,
        gettohandler,
        ontododeletehandler,
     }
    )
}
export default today
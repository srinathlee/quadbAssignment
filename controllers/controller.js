import axios from 'axios'
import StoreSchema from "../models/models.js"
import getData from '../utils/getdata.js'


export const Storedata=async(req,res)=>{
    const response= await axios.get("https://api.wazirx.com/api/v2/tickers")
    let data=[]
    let count=1;
    let valuestoadd=["name","last","base_unit","buy","sell","volume"]
    for (let i in response.data){

        if(count>10){
            break;
        }
        let objet={}
        for(let j of valuestoadd){
            objet[j]=(response.data[i][j])
        }
        data.push(objet)
        count+=1;
      }
   
// ________________inserting into database_____________________________

   const resp=await StoreSchema.create(data)
   res.status(200).json({
    success:true
})



} 

export const GetData=async(req,res)=>{
    const response=await StoreSchema.find();
    res.status(200).json({
        success:true,
        data:response
    })
}

// export default Storedata;
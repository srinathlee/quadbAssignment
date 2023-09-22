import axios from "axios";

const getData=async()=>{
    const response= await axios("https://api.wazirx.com/api/v2/tickers")
    return response

}

export default getData
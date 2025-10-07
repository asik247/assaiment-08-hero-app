import axios from "axios";
import { useEffect, useState } from "react"

const useProducts = ()=>{
    const [products,setProducts] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true)
        axios('/appsData.json').then(res=>setProducts(res.data)).catch(err=>setError(err)).finally(()=>setLoading(false))

    },[])
    return {products,error,loading}
}
export default useProducts
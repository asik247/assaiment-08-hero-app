const getStroedProducts = ()=>{
    const stroedDataSTR = localStorage.getItem('products');
    if (stroedDataSTR){
        const stroedDataParse = JSON.parse(stroedDataSTR);
        return stroedDataParse
    }
    else{
        return [];
    }
}

const addToStroedDB = (id)=>{
    const stroedDataParse = getStroedProducts();
    if(stroedDataParse.includes(id)){
        alert('sorry vai id alreay exist');
    }
    else{
        stroedDataParse.push(id);
        const data = JSON.stringify(stroedDataParse);
        localStorage.setItem('products',data)
    }
}


// New Remove Function..
const removeFromStoredDB = (id) => {
  const stroedDataParse = getStroedProducts();
  const updated = stroedDataParse.filter(itemId => String(itemId) !== String(id)); // type match fix
  localStorage.setItem('products', JSON.stringify(updated));
};


export{getStroedProducts,addToStroedDB,removeFromStoredDB}
fetch("https://fakestoreapi.com/products")
.then((res)=>{
    // console.log(data)
    return res.json();
    // converted to json format 
})
.then((data)=>{
// console.log(data[10].id)

let datavalue= " ";
data.map((values)=>{
    datavalue += `<tr>
                
    <td>${values.title}</td>
    <td>${values.description}</td>
    <td>${values.price}</td>
    <td><img src="${values.image}" 
    width='100px' /> </td>
    
  </tr>`
})

document.getElementById('table-body').innerHTML = datavalue;

})
.catch((err)=>{
    console.log(err)
})

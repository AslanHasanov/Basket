function GetProducts() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    console.log(basket);

    let item = '';
    basket.forEach(pr => {
        let count=0
        let q=pr.Price
        let w=""
        
        let total;

        for(let i=0; i<q.length-4; i++){
            w+=q[i]
        }
        total=Number(w)*pr.Count
        item += `
            <tr>
                <th scope="row">${pr.Id}</th>
                <td>
                    <img src=${pr.Image} alt="">
                </td>
                <td>${pr.Name}</td>
                <td>
                <input id="inp" type="number" value=${pr.Count}>
                </td>
                <td>${pr.Price}</td>
                <td id=${count}>${pr.Price} </td>
                
            </tr>
        `       
        count++ 
    })
    document.getElementById('body').innerHTML = item;
    
}

GetProducts();



let inputs=document.querySelectorAll("#inp")

for (let inp of inputs) {
    inp.addEventListener('change',function(){
        let total;

        let basket = JSON.parse(localStorage.getItem('basket'));
        let id=inp.parentElement.parentElement.children[0].innerHTML
        basket.forEach(pr=>{
            if(id===pr.Id){
                pr.count=inp.value


                let q=pr.Price
                let w=""
                
                
        
                for(let i=0; i<q.length-4; i++){
                    w+=q[i]
                }
                total=parseInt(w)*pr.Count
            }

            
        })

        localStorage.setItem("basket",JSON.stringify(basket))
        inp.parentElement.parentElement.children[5].innerHTML=total

    })
    
}



// input.onchange = function() {
//     let basket = JSON.parse(localStorage.getItem('basket'));
//     basket.push({
//         Count: value
//     })
// }
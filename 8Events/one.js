// const imglist = document.querySelector('#images')
// const owl = document.querySelector('#owl')

// imglist.addEventListener('click', (e)=> {
//     console.log("clicked in ul");
// } ,true )

// owl.addEventListener('click', (e)=> {
//     console.log("clicked in owl");
//     e.stopPropagation // to stop the propagation delay 
// } ,true )

//when the 3rd value of addEventListener is false i.e default value the there is propogation delay  (bubbling i.e from bottom to top)
// if the values is true there is no propogation delay (capturing mode i.e it will run from top to bottom)


// imglist.addEventListener('click',(e)=>{
//     console.log(e.target.parentNode);
//     console.log(e.target.tagName);

//     if (e.target.tagName === 'IMG') {
//         let removeItem = e.target.parentNode 
//     // removeItem.remove()
//     // Or
//     removeItem.parentNode.removeChild(removeItem)
//     }
    
//     e.target.parentNode()
// })



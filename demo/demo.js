// let promise = new Promise( (resolve, reject) => {
//     // resolve([
//     //     {
//     //         id: 1,
//     //         name: 'huy cong'
//     //     }
//     // ])
//     resolve();
// });

// promise
// .then(() =>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve([
//                 {
//                     id: 1,
//                     name: 'huy cong'
//                 }
//             ])
//         },3000)
//     })
// })
// .then((result) =>{
//    console.log(result);
//    return 2;
// })
// .then((result) =>{
//     console.log(result);
//     return 3;
// })
// .then((result) =>{
//     console.log(result);
// })
// .catch((err) =>{
//     console.log(err);
// })


const sleep = (ms) => {
    return new Promise( (resolve) => {
        setTimeout(resolve,ms);
    });
}

sleep(3000)
.then(() => {
    console.log(1);
    return sleep(2000);
})
.then(() => {
    console.log(2)
    return sleep(1000);
})
.then(() => {
    console.log(3);
})
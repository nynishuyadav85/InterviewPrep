// your code goes here

// CALLBACK--------
// function getJob(callback) {
//     setTimeout(function() {
//         const job = {
//             id: 1,
//             title: "AI engineer"
//         }
//         callback(null, job)
//     }, 1000);
// }




// getJob((error, job) => {
//     if (error) {
//         console.log(error)
//         return;
//     }
//     console.log(job)
// })

// --------------------------------------------------

//PROMISES----------

// function getJob() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({
//                 id: 1,
//                 title: "AI engineer"
//             })
//         }, 1000)
//     })
// }

// getJob().then((job) => {
//     console.log(job)
// }).catch((error) => {
//     console.log(error)
// })


// --------------------------------------------------

//ASYNC/AWAIT----------


function getJob() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: "AI engineer"
            })
        }, 1000)
    })
}

async function displayData() {
    try {
        const job = await getJob()
        console.log(job);
    } catch (error) {
        console.error("Failed to fetch job:", error);
    }
}

displayData()

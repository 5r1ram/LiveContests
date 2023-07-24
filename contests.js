let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
    return v.json()
}).then((contests) => {
    console.log(contests)
    ihtml = ""
    for(item in contests) {
        console.log(contests[item])
        ihtml += `
        <div class="card" style="width: 22rem;">
        <img src="https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/9608604.webp" class="card-img-top" alt="live contest">
        <div class="card-body">
          <h5 class="card-title">${contests[item].name}</h5>
          <p class="card-text"> Status is ${contests[item].status} and site ${contests[item].site}</p>
          <p class="card-text"> In 24 Hours? ${contests[item].status.in_24_hours}</p>
          <p>Starts at: ${contests[item].start_time}</p>
          <p>Starts at: ${contests[item].end_time}</p>
          <a href="${contests[item].url}" class="btn btn-primary">Visit Contest</a>
        </div>
      </div>
        `
    }
    cardContainer.innerHTML = ihtml
})

// let n = localStorage.getItem("ram")
// alert("Your note is " + n)

// let a = prompt("enter your note:")
// if(a) {
//     localStorage.setItem("ram", a)
// }

// let c = confirm("Do you want to del your note")
// if(c){
//     localStorage.removeItem("note")
// }

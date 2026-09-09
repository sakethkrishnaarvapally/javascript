fetch("https://jsonplaceholder.typicode.com/users/")
.then((response) => response.json())
.then((data) => {
   // console.log(data)
    data.forEach(user =>{
        console.log(user.id)
        console.log(user.username)
        console.log(user.email)
        console.log(user.address.city)
        console.log(user.company.name)
        console.log(user.website)
        console.log('----------------------------------------')

    })
})
.catch((error) => {
    console.log("Error in Fetch API", error);
})




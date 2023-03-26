const elForm = document.querySelector(".form");
const elForm2 = document.querySelector(".form-reg");
const userPhone = document.querySelector("#user-phone");
const userName = document.querySelector("#user-name");
const userSurname = document.querySelector("#user-surname");
const userEmail = document.querySelector("#user-email");
const userCity = document.querySelector("#user-city");
const userStreet = document.querySelector("#user-street");
const user = document.querySelector("#user");
const user1 = document.querySelector(".user");
const userPassword = document.querySelector("#user-password");
const userPassword1 = document.querySelector(".user-password");

elForm.addEventListener("submit", (e) => {
    e.preventDefault()

    fetch('https://fakestoreapi.com/users', {
        method: "POST",
        body: JSON.stringify(
            {
                email: userEmail.value,
                username: user.value,
                password: userPassword.value,
                name: {
                    firstname: userName.value,
                    lastname: userSurname.value
                },
                address: {
                    city: userCity.value,
                    street: userStreet.value,
                    number: 3,
                    zipcode: '12926-3874',
                    geolocation: {
                        lat: '-37.3159',
                        long: '81.1496'
                    }
                },
                phone: userPhone.value
            }
        )
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            alert("sizning hisobingiz qo'shildi!!!")
        })
        .catch(err => console.error(err))
});

elForm2.addEventListener("submit", (e) => {
    e.preventDefault()
    fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        body: JSON.stringify({
            username: user1.value,
            password: userPassword1.value
        })
    })
        .then(res => res.json())
        .then(json => console.log(json))

    console.log(user1.value, userPassword1.value)
})






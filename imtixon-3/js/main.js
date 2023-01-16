var elList = document.querySelector('.js_list')
var kinolar = movies.slice(0, 50)
var elText=document.querySelector('.text')
elText.textContent='Search result :'+kinolar.length

for (var item of kinolar) {

    var newA = document.createElement('a')
    newA.setAttribute('href', `https://www.youtube.com/watch?v=${item.ytid}`)
    newA.setAttribute('class', 'btn btn-outline-primary ')
    newA.setAttribute('target', 'blank')
    newA.textContent = 'Watch trailer'

    var newBtn1 = document.createElement('button')
    newBtn1.setAttribute('class', 'btn btn-outline-secondary')
    newBtn1.textContent = 'More info'

    var newBtn2 = document.createElement('button')
    newBtn2.setAttribute('class', 'btn btn-outline-success')
    newBtn2.textContent = 'Bookmark'

    var buttonWrapper = document.createElement('div')
    buttonWrapper.setAttribute('class', 'd-flex justify-content-between flex-column flex-xl-row')
    buttonWrapper.appendChild(newA)
    buttonWrapper.appendChild(newBtn1)
    buttonWrapper.appendChild(newBtn2)

    var newTitle = document.createElement('h5')
    newTitle.setAttribute('class', 'card-title')
    newTitle.textContent = item.Title

    var calendarImg = document.createElement('img')
    calendarImg.src = './images/calendar.png'
    calendarImg.height = '25'
    calendarImg.width = '25'
    calendarImg.classList.add('me-2')
    var calendar = document.createElement('p')
    calendar.textContent = item.movie_year

    var calendarBox = document.createElement('div')
    calendarBox.setAttribute('class', 'd-flex align-items-bottom mb-1')
    calendarBox.appendChild(calendarImg)
    calendarBox.appendChild(calendar)

    var starImg = document.createElement('img')
    starImg.setAttribute('src', './images/start.png')
    starImg.height = '25'
    starImg.classList.add('me-2')
    var star = document.createElement('p')
    star.textContent = item.imdb_rating

    var starBox = document.createElement('div')
    starBox.setAttribute('class', 'd-flex align-items-bottom mb-4')
    starBox.appendChild(starImg)
    starBox.appendChild(star)

    var cardBody = document.createElement('div')
    cardBody.setAttribute('class', 'card-body')
    cardBody.appendChild(newTitle)
    cardBody.appendChild(calendarBox)
    cardBody.appendChild(starBox)
    cardBody.appendChild(buttonWrapper)

    var cardImg = document.createElement('img')
    cardImg.src = `https://i3.ytimg.com/vi/${item.ytid}/hqdefault.jpg`
    cardImg.classList.add('card-img-top')

    var card = document.createElement('div')
    card.classList.add('card')
    card.append(cardImg)
    card.appendChild(cardBody)

    var newLi = document.createElement('li')
    newLi.setAttribute('class', 'col-sm-6 mb-3')
    newLi.appendChild(card)

    elList.appendChild(newLi)
}
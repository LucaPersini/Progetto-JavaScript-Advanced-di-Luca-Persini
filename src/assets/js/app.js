function getArray() {
  return axios.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
    .then(response => {
      return response.data
    })
    .catch(err => {
      if(err.response) {
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
      }
      if(err.request) {
        console.log(err.request)
      }
      else {
        console.log('Error', err.message)
      }
    })
}

let container = document.querySelector(".content")
let loadMoreButton = document.querySelector(".loadMore_button")

let initialItems = 10

let loadItems = 10

function getArticle(id) {
  return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
    .then(response => {
      let date = new Date(response.data.time * 1000)
      return [
        response.data.title, 
        response.data.by, 
        response.data.url, 
        date.toLocaleDateString("default")
      ]
    })
    .catch(err => {
      if(err.response) {
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
      }
      if(err.request) {
        console.log(err.request)
      }
      else {
        console.log('Error', err.message)
      }
    })
}

async function loadInitialItems() {
  let ID = await getArray()
  let out = ""
  let counter = 0
  for(id of ID) {
    if(counter < initialItems) {
      let article = await getArticle(id)
      out += `
        <div class="article">
          <div>
            <p>Published by <strong class="author">${article[1]}</strong> &#183 <span class="date">${article[3]}</span></p>
            <h2 class="article_title">${article[0]}</h2>
            <a href="${article[2]}" class="visitButton" target="_blank">Visit</a>
          </div>
        </div>
      `
    }
    counter++
  }

  let div = document.createElement("div")
  container.insertBefore(div, loadMoreButton)
  div.innerHTML = out 
}

loadInitialItems()

async function loadData() {
  let ID = await getArray()
  let currentDisplayItems = document.querySelectorAll(".article").length
  let out = ""
  let counter = 0

  for(id of ID) {
    if(counter >= currentDisplayItems && counter < loadItems + currentDisplayItems) {
      let article = await getArticle(id)
      out += `
        <div class="article">
          <p>Published by <span class="author">${article[1]}</span> &#183 <span class="date">${article[3]}</span></p>
          <h2 class="article_title">${article[0]}</h2>
          <a href="${article[2]}" class="visitButton" target="_blank">Visit</a>
        </div>
      `
    }
    counter ++
  }
  let div = document.createElement("div")
  container.insertBefore(div, loadMoreButton)
  div.innerHTML = out
  div.style.opacity = 0

  if(document.querySelectorAll(".article").length == ID.length) {
    loadMoreButton.style.display = "none"
  }

  fadeIn(div)
}

loadMoreButton.addEventListener('click', () => {
  loadData()
})

function fadeIn(div) {
  let opacity = 0 
  let interval = setInterval(function() {
    if(opacity <= 1) {
      opacity += 0.1
      div.style.opacity = opacity
    }
    else {
      clearInterval(interval)
    }
  }, 30)
}

window.addEventListener("scroll", () => {
  let header = document.querySelector(".header")
  let scrollPosition = window.scrollY

  if(scrollPosition > 0) {
    header.classList.add("shadow-header")
  }
  else {
    header.classList.remove("shadow-header")
  }
})
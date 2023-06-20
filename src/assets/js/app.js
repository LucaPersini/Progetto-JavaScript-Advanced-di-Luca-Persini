function getArray() {
  return axios.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
    .then(response => {
      return response.data
    })
    .catch(err => {
      if (err.response) {
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
      }
      if (err.request) {
        console.log(err.request)
      }
      else {
        console.log('Error', err.message)
      }
    })
}

let header = document.querySelector(".header")
fadeIn(header)

let container = document.querySelector(".content")
let loadMoreButton = document.querySelector(".loadMore_button")
let loader = document.querySelector(".loader")

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
      if (err.response) {
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
      }
      if (err.request) {
        console.log(err.request)
      }
      else {
        console.log('Error', err.message)
      }
    })
    .finally(() => {
      loader.classList.add("hidden")
    })
}

async function loadInitialItems() {
  let out = ""
  let counter = 0

  let ID = await getArray()
  let promises = []

  const ids = Array.from({ length: initialItems }, (_, i) => ID[i]);
  const allFetches = ids.map(id => getArticle(id));

  promises = await Promise.all(allFetches)

  for (let promise of promises) {
    if (counter < initialItems) {
      out += `
        <div class="article">
          <div>
            <p>Published by <strong class="author">${promise[1]}</strong> &#183 <span class="date">${promise[3]}</span></p>
            <h2 class="article_title">${promise[0]}</h2>
            <a href="${promise[2]}" class="visitButton" target="_blank" rel="noopener">Visit</a>
          </div>
        </div>
      `
    }
    counter++
  }

  let div = document.createElement("div")
  container.insertBefore(div, loadMoreButton)
  div.innerHTML = out
  fadeIn(div)
  loadMoreButton.classList.remove("hidden")
}

loadInitialItems()

async function loadData() {
  let ID = await getArray()
  let promises = []

  let currentDisplayItems = document.querySelectorAll(".article").length
  let out = ""
  let counter = 0

  const ids = Array.from({ length: loadItems }, (_, i) => ID[i]);
  const allFetches = ids.map(id => getArticle(id));

  promises = await Promise.all(allFetches)

  for (let promise of promises) {
    if (counter < loadItems + currentDisplayItems) {
      out += `
        <div class="article">
          <div>
            <p>Published by <strong class="author">${promise[1]}</strong> &#183 <span class="date">${promise[3]}</span></p>
            <h2 class="article_title">${promise[0]}</h2>
            <a href="${promise[2]}" class="visitButton" target="_blank" rel="noopener">Visit</a>
          </div>
        </div>
      `
    }
    counter++
  }
  let div = document.createElement("div")
  container.insertBefore(div, loadMoreButton)
  div.innerHTML = out
  fadeIn(div)

  if (document.querySelectorAll(".article").length == ID.length) {
    loadMoreButton.style.display = "none"
  }
}

loadMoreButton.addEventListener('click', () => {
  loadData()
})

function fadeIn(element) {
  const fadeInValue = [
    { opacity: 0 },
    { opacity: 10 }
  ]

  const fadeInTimer = {
    duration: 300
  }

  element.animate(fadeInValue, fadeInTimer)
}

window.addEventListener("scroll", () => {
  let header = document.querySelector(".header")
  let scrollPosition = window.scrollY

  if (scrollPosition > 0) {
    header.classList.add("shadow-header")
  }
  else {
    header.classList.remove("shadow-header")
  }
})
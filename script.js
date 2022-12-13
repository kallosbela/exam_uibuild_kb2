//




//semantic html
const root = document.getElementById('root')
root.innerHTML =`
<header>
</header>   

<main>
  <div id="container">
  </div>
</main>

<footer>
</footer>
`

//header
const header = document.querySelector('header')
header.innerHTML=``

//in main container
const container = document.getElementById('container')
for (const card of cards) {
  container.innerHTML += `
    <section>

    </section>
  `
}

//footer
const footer = document.querySelector('footer')
footer.innerHTML=``
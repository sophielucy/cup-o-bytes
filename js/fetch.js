const API_KEY = '70f0560beaab42979eb81e1cfc2cd590'
const INGREDIENT_BASE_URL =
  'https://api.spoonacular.com/recipes/findByIngredients'

$(document).ready(function () {
  $('.btn-search').click(function () {
    $.ajax({
      url: `${INGREDIENT_BASE_URL}?apiKey=${API_KEY}&ingredients=${$(
        '#search'
      ).val()}`,
      contentType: 'application/json',
      dataType: 'json',
      success: function (result) {
        console.log({ result })
        const searchResults = []
        result.forEach((res) => {
          searchResults.push(
            `<div>
              <h4>${res.title}</h4>
              <img src=${res.image} />
            </div>`
          )
        })
        $('#results').remove()
        $('form').after(`
        <section id='results'>
        ${searchResults}
        </section>
        `)
      }
    })
  })
})

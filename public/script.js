const depositToEnvelope = document.getElementById('depositIntoEnvelope');

console.log('attached')

depositToEnvelope.addEventListener('click', () => {
    const envelope = document.getElementById('envelope').value;
    const income = document.getElementById('income').value;
    fetch('/api/envelopes', { 
        method: 'GET'})
    .then(response => {
            console.log('fetch', response)
    });
});





// const submitButton = document.getElementById('submit-quote');
// const newQuoteContainer = document.getElementById('new-quote');

submitButton.addEventListener('click', () => {
  const quote = document.getElementById('quote').value;
  const person = document.getElementById('person').value;

  fetch(`/api/quotes?quote=${quote}&person=${person}`, {
    method: 'POST',
  })
//   .then(response => response.json())
//   .then((quote) => {
//     const newQuote = document.createElement('div');
//     newQuote.innerHTML = `
//     <h3>Congrats, your quote was added!</h3>
//     <div class="quote-text">${quote.quote}</div>
//     <div class="attribution">- ${quote.person}</div>
//     <p>Go to the <a href="index.html">home page</a> to request and view all quotes.</p>
//     `
//     newQuoteContainer.appendChild(newQuote);
//   });
// });

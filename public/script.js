const depositIntoEnvelope = document.getElementById('depositIntoEnvelope');
const envelope = document.getElementById('envelope');
const amount = document.getElementById('amount');

const envelopeContainer = document.getElementById('envelopes-container');

console.log(amount.value)

// depositIntoEnvelope.addEventListener('click', () => {
//     fetch('/api/envelopes')
//         .then(res => res.json())
//         .then(data => {
//             console.log('Fetched data:', data);
//         })
//         .catch(err => {
//             console.error('Error fetching:', err);
//         });
//     });


const resetEnvelopes = () => {
  envelopeContainer.innerHTML = '';
}

const renderEnvelopes = (envelopes = []) => {
    resetEnvelopes();
    if (envelopes.length > 0) {
    envelopes.forEach(envelope => {
        const newEnvelope = document.createElement('div');
        newEnvelope.className = 'single-envelope';
        newEnvelope.innerHTML = `<div class="envelope-name">${envelope.envelope}</div>
        <div class="amount">- ${envelope.amount}</div>`;
        envelopeContainer.appendChild(newEnvelope);
    });
    } else {
    envelopeContainer.innerHTML = '<p>Your request returned no envelopes.</p>';
    }
}

depositIntoEnvelope.addEventListener('click', () => {
    fetch(`/api/envelopes?envelope=${envelope.value}&amount=${amount.value}`, { method: 'POST', })
        .then(res => res.json())
        .then(data => {
            console.log('Fetched data:', data);
            renderEnvelopes(data.envelopes)
        })
        .catch(err => {
            console.error('Error fetching:', err);
        });
    });


// const submitButton = document.getElementById('submit-quote');
// const newQuoteContainer = document.getElementById('new-quote');

// submitButton.addEventListener('click', () => {
//     const quote = document.getElementById('quote').value;
//     const person = document.getElementById('person').value;

//     fetch(`/api/quotes?quote=${quote}&person=${person}`, {
//     method: 'POST',
//     })


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

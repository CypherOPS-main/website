document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the value of the text input
    var inputValue = document.querySelector('#textbox').value;

    // Check if the input value is equal to a particular input
    if (inputValue === 'DADA-CON23') {
        window.location.href = 'otherindex.html'; // Redirect to another website
    }
});


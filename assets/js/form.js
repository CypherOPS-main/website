document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var inputValue = document.querySelector('#textbox').value;

    if (inputValue === 'DADA-CON42') {
        window.location.href = 'otherIndex.html';
    }
});


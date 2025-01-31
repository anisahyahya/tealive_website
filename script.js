    <script src="script.js"> document.getElementById('volunteerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (name && email && phone) {
        alert(Thank you, ${name}! Your registration to volunteer has been successfully submitted. We will contact you soon at ${email}.);
    } else {
        alert('Please fill out all fields before submitting.');
    }
});</script>

</body>
</html>
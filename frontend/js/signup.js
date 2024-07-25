document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');

    if (signupForm) {
        signupForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            console.log('Signup form submitted');

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const name = document.getElementById('name').value;
            const role = document.getElementById('role').value;

            console.log(`Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}, Name: ${name}, Role: ${role}`);

            try {
                const response = await fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password, confirmPassword, name, role })
                });

                console.log('Response status:', response.status);

                if (response.ok) {
                    const result = await response.json();
                    console.log('Signup successful:', result);
                    alert('Account created successfully!');
                    // Redirect to login page
                    window.location.href = 'login.html';
                } else {
                    const error = await response.json();
                    console.error('Signup failed:', error);
                    alert(error.msg || 'Signup failed');
                }
            } catch (err) {
                console.error('Error during signup:', err);
                alert('An error occurred during signup.');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            console.log('Login form submitted');

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            console.log(`Email: ${email}, Password: ${password}`);

            try {
                const response = await fetch('http://localhost:5000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });

                console.log('Response status:', response.status);

                if (response.ok) {
                    const result = await response.json();
                    console.log('Login successful:', result);
                    alert('Login successful!');

                    // Store user's name and role in localStorage
                    localStorage.setItem('username', result.name);
                    localStorage.setItem('role', result.role);

                    // Redirect based on role
                    switch (result.role) {
                        case 'admin':
                            window.location.href = 'admin.html';
                            break;
                        case 'mitra':
                            window.location.href = 'mitra.html';
                            break;
                        default:
                            window.location.href = "users.html";
                            break;
                    }
                } else {
                    const error = await response.json();
                    console.error('Login failed:', error);
                    alert(error.msg || 'Login failed');
                }
            } catch (err) {
                console.error('Error during login:', err);
                alert('An error occurred during login.');
            }
        });
    }
});

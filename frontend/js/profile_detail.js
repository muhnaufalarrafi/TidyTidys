document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('backButton');
    const profileName = document.getElementById('profileName');
    const profileEmail = document.getElementById('profileEmail');
    const profileRole = document.getElementById('profileRole');
    const profileJoined = document.getElementById('profileJoined');
    const emailInput = document.getElementById('email');
    const nameInput = document.getElementById('name');
    const profileImage = document.getElementById('profileImage');
    const profileImageInput = document.getElementById('profileImageInput');

    // Load user data from localStorage
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const role = localStorage.getItem('role');
    const joined = localStorage.getItem('joined');
    const profileImagePath = localStorage.getItem('profileImage');

    // Populate profile details
    if (username) {
        profileName.textContent = username;
        nameInput.value = username;
    }
    if (email) {
        profileEmail.textContent = `Email: ${email}`;
        emailInput.value = email;
    }
    if (role) {
        profileRole.textContent = `Role: ${role}`;
    }
    if (joined) {
        profileJoined.textContent = `Joined: ${joined}`;
    }
    if (profileImagePath) {
        profileImage.src = profileImagePath;
    }

    // Back button functionality
    backButton.addEventListener('click', function() {
        window.history.back();
    });

    // Handle profile image change
    profileImageInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImage.src = e.target.result;
                localStorage.setItem('profileImage', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });

    // Form submission logic
    const profileForm = document.getElementById('profileForm');
    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Update localStorage with new values
        localStorage.setItem('username', nameInput.value);
        localStorage.setItem('email', emailInput.value);

        alert('Profile updated successfully!');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const usernameElement = document.querySelector('.profile .username');
    const roleElement = document.querySelector('.profile .role');
    const profileImageElement = document.querySelector('.profile-image');
    const logoutButton = document.querySelector('.logout');
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role');
    const profileImagePath = localStorage.getItem('profileImage');

    if (usernameElement && username) {
        usernameElement.textContent = username;
    }

    if (roleElement && role) {
        roleElement.textContent = role;
    }

    if (profileImageElement && profileImagePath) {
        profileImageElement.src = profileImagePath;
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            localStorage.removeItem('username');
            localStorage.removeItem('profileImage');
            localStorage.removeItem('role');
            window.location.href = 'login.html';
        });
    }
});

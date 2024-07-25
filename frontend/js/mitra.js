document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');
    const sidebarToggle = document.querySelector('.menu-icon-wrapper');
    const usernameElement = document.querySelector('.profile .username');
    const roleElement = document.querySelector('.profile .role');
    const profileImageElement = document.querySelector('.profile-image');
    const logoutButton = document.querySelector('.btn-logout');
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role'); // Assuming role is stored in localStorage
    const profileImagePath = localStorage.getItem('profileImage'); // Assuming profile image path is stored in localStorage

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
            // Clear localStorage
            localStorage.removeItem('username');
            localStorage.removeItem('profileImage');
            localStorage.removeItem('role');
            // Redirect to login page
            window.location.href = 'login.html';
        });
    }

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        content.classList.toggle('collapsed');
    });
});

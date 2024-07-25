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

    // Chart.js scripts
    var ctx1 = document.getElementById('userActivityChart').getContext('2d');
    var userActivityChart = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'User Activity',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var ctx2 = document.getElementById('platformPerformanceChart').getContext('2d');
    var platformPerformanceChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: 'Platform Performance',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

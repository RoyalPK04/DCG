// common.js
document.addEventListener("DOMContentLoaded", function () {
    // Load header
    fetch("header.html")
        .then(response => response.text())
        .then(html => document.getElementById("header-placeholder").innerHTML = html);

    // Load sidebar
    fetch("sidebar.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("sidebar-placeholder").innerHTML = html;
            initializeSidebar();
        });
});

function initializeSidebar() {
    const toggleSidebarBtn = document.getElementById("toggle-sidebar-btn");
    const sidebar = document.getElementById("sidebar");

    // Add event listener to the toggle button
    toggleSidebarBtn.addEventListener("click", function () {
        // Toggle the 'active' class on the sidebar to show/hide it
        sidebar.classList.toggle("active");
    });
}


// common.js
document.addEventListener("DOMContentLoaded", function () {
    // Load header
    fetchContent("header.html", "header-placeholder");

    // Load sidebar
    fetchContent("sidebar.html", "sidebar-placeholder", initializeSidebar);
});

function fetchContent(url, targetId, callback) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.innerHTML = html;
                if (callback && typeof callback === "function") {
                    callback();
                }
            } else {
                console.error(`Element with id '${targetId}' not found.`);
            }
        })
        .catch(error => {
            console.error(error);
        });
}

function initializeSidebar() {
    const toggleSidebarBtn = document.getElementById("toggle-sidebar-btn");
    const sidebar = document.getElementById("sidebar");

    if (toggleSidebarBtn && sidebar) {
        // Add event listener to the toggle button
        toggleSidebarBtn.addEventListener("click", function () {
            // Toggle the 'active' class on the sidebar to show/hide it
            sidebar.classList.toggle("active");
        });
    } else {
        console.error("Sidebar elements not found.");
    }
}




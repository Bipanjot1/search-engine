document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    const searchHistoryList = document.getElementById('search-history-list');
    const historyContainer = document.getElementById('history-container');
    const toggleHistoryBtn = document.getElementById('toggle-history-btn');

    // Load search history from localStorage
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

    // Function to update the search history UI
    function updateSearchHistory() {
        searchHistoryList.innerHTML = '';
        searchHistory.forEach((searchTerm) => {
            const li = document.createElement('li');
            li.textContent = searchTerm;
            searchHistoryList.appendChild(li);
        });
    }

    // Add search term to history
    searchBtn.addEventListener('click', function () {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            searchHistory.push(searchTerm);
            localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
            updateSearchHistory();
        }
        searchInput.value = ''; // Clear the input field
    });

    // Clear search history
    clearHistoryBtn.addEventListener('click', function () {
        searchHistory = [];
        localStorage.removeItem('searchHistory');
        updateSearchHistory();
    });

    // Toggle search history visibility
    toggleHistoryBtn.addEventListener('click', function () {
        if (historyContainer.style.display === 'none') {
            historyContainer.style.display = 'block';
            toggleHistoryBtn.textContent = 'Hide History';
        } else {
            historyContainer.style.display = 'none';
            toggleHistoryBtn.textContent = 'Show History';
        }
    });

    // Initially populate search history on page load
    updateSearchHistory();
});

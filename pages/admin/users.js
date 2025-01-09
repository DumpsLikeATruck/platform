// Initialize filters
const filters = {
  user: '', // Typed input
  role: '', // Select input
  operator: '', // Typed input
  location: '', // Typed input
  status: '' // Select input
};

// Update filter and apply all filters
function updateFilter(key, value) {
  filters[key] = value.trim().toLowerCase(); // Normalize input value to lowercase and trim spaces
  applyFilters();
}

// Apply all filters to entries
function applyFilters() {
  const entries = document.querySelectorAll('[user]'); // Get all entries with the 'user' attribute
  entries.forEach(entry => {
    // Check matches for each filter
    const matchesUser = !filters.user || (entry.getAttribute('user') || '').toLowerCase().includes(filters.user);
    const matchesRole = !filters.role || (entry.getAttribute('role') || '').toLowerCase() === filters.role;
    const matchesOperator = !filters.operator || (entry.getAttribute('operator') || '').toLowerCase().includes(filters.operator);
    const matchesLocation = !filters.location || (entry.getAttribute('location') || '').toLowerCase().includes(filters.location);
    const matchesStatus = !filters.status || (entry.getAttribute('status') || '').toLowerCase() === filters.status;

    // Toggle visibility based on whether all filters match
    entry.classList.toggle('hidden', !(matchesUser && matchesRole && matchesOperator && matchesLocation && matchesStatus));
  });
}

// Add event listeners for filters

// Typed input for user
document.getElementById('searchUser').addEventListener('input', function () {
  updateFilter('user', this.value);
});

// Select input for role
document.getElementById('searchRole').addEventListener('change', function () {
  updateFilter('role', this.value);
});

// Typed input for operator
document.getElementById('searchOperator').addEventListener('input', function () {
  updateFilter('operator', this.value);
});

// Typed input for location
document.getElementById('searchLocation').addEventListener('input', function () {
  updateFilter('location', this.value);
});

// Select input for status
document.getElementById('searchStatus').addEventListener('change', function () {
  updateFilter('status', this.value);
});

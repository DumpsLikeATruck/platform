// Initialize filters
const filters = {
  operator: '',
  tier: '',
  location: '',
  status: ''
};

// Update filter and apply all filters
function updateFilter(key, value) {
  filters[key] = value.trim().toLowerCase(); // Update only the specific filter key
  applyFilters();
}

// Apply all filters to entries
function applyFilters() {
  const entries = document.querySelectorAll('[operator]'); // Get all entries with the 'operator' attribute
  entries.forEach(entry => {
    // Check matches for each filter
    const matchesOperator = !filters.operator || (entry.getAttribute('operator') || '').toLowerCase().includes(filters.operator);
    const matchesTier = !filters.tier || (entry.getAttribute('tier') || '').toLowerCase() === filters.tier;
    const matchesLocation = !filters.location || (entry.getAttribute('location') || '').toLowerCase().includes(filters.location);
    const matchesStatus = !filters.status || (entry.getAttribute('status') || '').toLowerCase() === filters.status;

    // Toggle visibility based on whether all filters match
    entry.classList.toggle('hidden', !(matchesOperator && matchesTier && matchesLocation && matchesStatus));
  });
}

// Add event listeners for filters
document.getElementById('searchOperator').addEventListener('input', function () {
  updateFilter('operator', this.value);
});

document.getElementById('searchTier').addEventListener('change', function () {
  updateFilter('tier', this.value); // Update only the tier filter
});

document.getElementById('searchLocation').addEventListener('input', function () {
  updateFilter('location', this.value);
});

document.getElementById('searchStatus').addEventListener('change', function () {
  updateFilter('status', this.value); // Update only the status filter
});

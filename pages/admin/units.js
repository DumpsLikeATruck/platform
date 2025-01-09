const filters = {
  unitId: '',
  owner: '',
  location: '',
  vin: '',
  type: '',
  status: ''
};

function updateFilter(key, value) {
  filters[key] = value.trim().toLowerCase();
  applyFilters();
}

function applyFilters() {
  const entries = document.querySelectorAll('[unit-id]');
  entries.forEach(entry => {
    const matchesUnitId = !filters.unitId || (entry.getAttribute('unit-id') || '').toLowerCase().includes(filters.unitId);
    const matchesOwner = !filters.owner || (entry.getAttribute('owner') || '').toLowerCase().includes(filters.owner);
    const matchesLocation = !filters.location || (entry.getAttribute('location') || '').toLowerCase().includes(filters.location);
    const matchesVin = !filters.vin || (entry.getAttribute('vin') || '').toLowerCase().includes(filters.vin);
    const matchesType = !filters.type || (entry.getAttribute('type') || '').toLowerCase() === filters.type;
    const matchesStatus = !filters.status || (entry.getAttribute('status') || '').toLowerCase() === filters.status;

    entry.classList.toggle('hidden', !(matchesUnitId && matchesOwner && matchesLocation && matchesVin && matchesType && matchesStatus));
  });
}

document.getElementById('searchUnitNumber').addEventListener('input', function () {
  updateFilter('unitId', this.value);
});

document.getElementById('searchOwner').addEventListener('input', function () {
  updateFilter('owner', this.value);
});

document.getElementById('searchLocation').addEventListener('input', function () {
  updateFilter('location', this.value);
});

document.getElementById('searchVIN').addEventListener('input', function () {
  updateFilter('vin', this.value);
});

document.getElementById('searchType').addEventListener('change', function () {
  updateFilter('type', this.value);
});

document.getElementById('searchStatus').addEventListener('change', function () {
  updateFilter('status', this.value);
});



//Date Sort
document.getElementById("sortDates").addEventListener("click", function() {
    const list = document.getElementById("entryList");
    const entries = Array.from(list.querySelectorAll("[date]"));

    if (!this.dataset.sortOrder) {
        this.dataset.sortOrder = "asc";
    }

    const ascending = this.dataset.sortOrder === "asc";
    this.dataset.sortOrder = ascending ? "desc" : "asc";

    entries.sort((a, b) => {
        const dateA = parseInt(a.getAttribute("date"), 10);
        const dateB = parseInt(b.getAttribute("date"), 10);
        return ascending ? dateA - dateB : dateB - dateA;
    });

    entries.forEach(entry => list.appendChild(entry));
});

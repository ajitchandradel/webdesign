(() => {
  const input = document.getElementById("serviceSearch");
  const items = [...document.querySelectorAll(".service-item")];
  const count = document.getElementById("visibleCount");
  const empty = document.getElementById("emptyState");
  const clear = document.getElementById("clearSearch");
  const reset = document.getElementById("resetEmpty");
  const filters = [...document.querySelectorAll("[data-filter]")];

  function applySearch(value) {
    const query = value.trim().toLowerCase();
    let shown = 0;
    items.forEach(item => {
      const match = !query || item.dataset.search.includes(query);
      item.classList.toggle("d-none", !match);
      if (match) shown++;
    });
    count.textContent = shown;
    empty.classList.toggle("d-none", shown !== 0);
    clear.hidden = !query;
    filters.forEach(button => button.classList.toggle("active", button.dataset.filter === query));
    const url = new URL(window.location);
    query ? url.searchParams.set("q", query) : url.searchParams.delete("q");
    history.replaceState({}, "", url);
  }

  input.addEventListener("input", event => applySearch(event.target.value));
  clear.addEventListener("click", () => { input.value = ""; applySearch(""); input.focus(); });
  reset.addEventListener("click", () => { input.value = ""; applySearch(""); input.focus(); });
  filters.forEach(button => button.addEventListener("click", () => {
    input.value = button.dataset.filter;
    applySearch(input.value);
  }));

  const initial = new URLSearchParams(location.search).get("q") || "";
  input.value = initial;
  applySearch(initial);
})();
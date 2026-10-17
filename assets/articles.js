(() => {
  const input = document.getElementById("articleSearch");
  const items = [...document.querySelectorAll(".article-item")];
  const count = document.getElementById("articleCount");
  const empty = document.getElementById("articleEmpty");
  const clear = document.getElementById("clearArticleSearch");
  const reset = document.getElementById("resetArticles");
  const filters = [...document.querySelectorAll("[data-filter]")];
  const apply = value => {
    const query = value.trim().toLowerCase();
    let visible = 0;
    items.forEach(item => {
      const match = !query || item.dataset.search.includes(query);
      item.classList.toggle("d-none", !match);
      if (match) visible++;
    });
    count.textContent = visible;
    empty.classList.toggle("d-none", visible !== 0);
    clear.hidden = !query;
    filters.forEach(button => button.classList.toggle("active", button.dataset.filter === query));
  };
  input.addEventListener("input", event => apply(event.target.value));
  clear.addEventListener("click", () => { input.value = ""; apply(""); input.focus(); });
  reset.addEventListener("click", () => { input.value = ""; apply(""); input.focus(); });
  filters.forEach(button => button.addEventListener("click", () => { input.value = button.dataset.filter; apply(input.value); }));
  apply("");
})();

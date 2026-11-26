// The address is not in the page source in plain form, so simple scrapers miss it.
// It is put together only when a visitor hovers, focuses, taps or clicks the link.
document.querySelectorAll("a.email").forEach(function (a) {
  function arm() {
    var rev = function (s) { return s.split("").reverse().join(""); };
    a.href = "mailto:" + rev(a.dataset.u) + "@" + rev(a.dataset.d);
  }
  ["mouseenter", "focus", "touchstart", "click"].forEach(function (ev) {
    a.addEventListener(ev, arm, { passive: true });
  });
});

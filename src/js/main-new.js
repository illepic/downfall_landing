import "alpinejs";

window.dfInit = function () {
  setTimeout(() => (this.isPreload = false), 100);
  window.addEventListener("hashchange", () => (this.activeTab = location.hash));
};

window.dfState = function () {
  return {
    isPreload: true,
    activeTab: location.hash,
  };
};

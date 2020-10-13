/**
 * Note: AlpineJS is added via script in <head>, as per recommendation
 */

window.dfState = function dfState() {
  return {
    isPreload: true,
    activeTab: window.location.hash,
    dfInit() {
      this.isPreload = false;
      window.addEventListener("hashchange", () => {
        this.activeTab = window.location.hash;
      });
    },
    animateHeight() {
      // If loaded animate height. Will only animate ONCE, on initial load.
      return !this.isPreload
        ? `max-height: ${this.$refs.expando.scrollHeight}px`
        : false;
    },
  };
};

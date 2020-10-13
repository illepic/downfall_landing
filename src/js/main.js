/**
 * Note: AlpineJS is added via script in <head>, as per recommendation
 */

window.dfState = function dfState() {
  return {
    isPreload: true,
    activeTab: window.location.hash,
    lastTab: window.location.hash,
    dfInit() {
      setTimeout(() => {
        this.isPreload = false;
      }, 100);
      window.addEventListener("hashchange", () => {
        this.activeTab = window.location.hash;
        // Leave a "residual" tab for the overlay content to not disappear
        if (window.location.hash) {
          this.lastTab = window.location.hash;
        }
      });
    },
    animateHeight() {
      return this.isPreload && this.activeTab !== ""
        ? false
        : `max-height: ${this.$refs.expando.scrollHeight}px`;
    },
  };
};

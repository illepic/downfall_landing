/**
 * Note: AlpineJS is added via script in <head>, as per recommendation
 */

window.dfState = function () {
  return {
    isPreload: true,
    activeTab: location.hash,
    dfInit() {
      setTimeout(() => (this.isPreload = false), 100)
      window.addEventListener(
        "hashchange",
        () => (this.activeTab = location.hash)
      )
    },
    animateHeight() {
      return (
        !this.isPreload && `max-height: ${this.$refs.expando.scrollHeight}px`
      )
    },
  }
}

/**
 * Note: AlpineJS is added via script in <head>, as per recommendation
 */

window.dfState = function () {
  return {
    isPreload: true,
    activeTab: location.hash,
    lastTab: location.hash,
    contact: {
      name: "",
      email: "",
      message: "",
    },
    dfInit() {
      setTimeout(() => (this.isPreload = false), 100)
      window.addEventListener("hashchange", () => {
        this.activeTab = location.hash
        // Leave a "residual" tab for the overlay content to not disappear
        if (location.hash) {
          this.lastTab = location.hash
        }
      })
    },
    animateHeight() {
      return this.isPreload && this.activeTab !== ""
        ? false
        : `max-height: ${this.$refs.expando.scrollHeight}px`
    },
    disableContact() {
      const { name, email, message } = this.contact
      return !name && !email && !message
    },
  }
}

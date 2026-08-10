/** Scroll progress store — updated outside React to avoid re-renders. */
export const scrollStore = {
  progress: 0,
}

export function setScrollProgress(value) {
  scrollStore.progress = Math.min(1, Math.max(0, value))
}

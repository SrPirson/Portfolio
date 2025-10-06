export function startViewTransition(callback) {
    if (!document.startViewTransition) {
      callback();
      return;
    }
  
    const transition = document.startViewTransition(async () => {
      await callback();
    });
  
    transition.finished.then(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  
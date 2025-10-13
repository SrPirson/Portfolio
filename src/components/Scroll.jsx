const Scroll = () => {
  return (
    <div className="absolute bottom-21 left-1/2">
      <img
        src="assets/img/arrow.gif"
        alt="Scroll arrow"
        className="fixed -translate-y-15 md:-translate-y-15 w-12 h-12 dark:invert-75 rotate-90 scroll-fade-out select-none pointer-events-none"
        />
    </div>
  );
};

export default Scroll;
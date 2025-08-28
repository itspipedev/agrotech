function BackButton(props: React.ComponentPropsWithoutRef<"button">) {
  return (
    <button className="back-button" aria-label="Regresar" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="28"
        height="28"
      >
        <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
      </svg>
    </button>
  );
}

export default BackButton;

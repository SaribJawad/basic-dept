function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="btn-animation ">
      <h3>{children}</h3>
    </button>
  );
}

export default Button;

const NavText = ({ text, index }: { text: string; index: number }) => {
  return (
    <div className="nav-text relative">
      <div
        style={{ transitionDelay: `${(index + 1) * 50}ms` }}
        className="transition-transform group-hover/links:-translate-y-8"
      >
        {text}
      </div>
      <div
        style={{ transitionDelay: `${(index + 1) * 50}ms` }}
        className="absolute inset-0 translate-y-8 text-primary transition-transform group-hover/links:translate-y-0"
      >
        {text}
      </div>
    </div>
  );
};

export default NavText;

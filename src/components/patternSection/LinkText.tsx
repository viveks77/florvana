const LinkText = ({ title, src }: { title: string; src: string }) => {
  return (
    <div
      data-src={src}
      className="group cursor-pointer p-1 text-xl font-medium"
    >
      {title}
      <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full"></span>
    </div>
  );
};

export default LinkText;

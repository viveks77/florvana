import NavText from "@components/common/NavText";

const Navlink = ({ title, href }: { title: string; href: string }) => {
  return (
    <div className="relative h-8 overflow-hidden">
      <a
        href={href}
        className="group/links flex items-center text-lg uppercase nav-link p-2"
      >
        {[...title].map((t, i) => (
          <NavText text={t} index={i} key={i} />
        ))}
      </a>
    </div>
  );
};

export default Navlink;


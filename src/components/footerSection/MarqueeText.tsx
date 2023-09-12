import { operationTexts } from "@helpers/constants";

const MarqueeText = () => {
  return (
    <div className="flex h-36 items-end overflow-hidden">
      <div className="rotate text-md flex max-w-[100%]  font-roboto text-sm text-neutral-600">
        {operationTexts
          .concat(operationTexts)
          .concat(operationTexts)
          .concat(operationTexts)
          .map((text, index) => (
            <p className="mx-2 tracking-wider" key={index}>
              {text}
            </p>
          ))}
      </div>
    </div>
  );
};

export default MarqueeText;

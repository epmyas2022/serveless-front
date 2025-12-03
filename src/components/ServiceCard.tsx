import { Github, License, World } from "./SvgIcons";

interface Options {
  title: string;
  icon: React.ReactNode;
  description: string;
  tags: string[];
  version?: string;
  links: {
    github: string;
    demo: string;
    documentation: string;
  };
}

export default function ServiceCard({
  title,
  icon,
  description,
  tags,
  version,
  links,
}: Readonly<Options>) {
  return (
    <div className="rounded-md max-w-72 max-h-96 transition-all duration-300 from-blue-500  to-blue-200 bg-linear-to-br p-[1.5px]  bg-size-[300%_300%]  animate-gradient">
      <div className="bg-black rounded-md w-full h-full flex flex-col justify-between">
        <div className="flex flex-col justify-center items-center border-b border-gray-500 p-4 bg-gray-500/10">
          <div className="flex justify-end w-full">
            <span className="bg-blue-600 rounded-full px-2 py-1 text-xs font-semibold">
              {version ?? "latest"}
            </span>
          </div>
          {icon}
          <h3 className="font-oswald font-bold text-2xl">{title}</h3>

          <div className="flex gap-2 mt-2">
            {tags.map((tag) => (
              <span
                className="bg-green-600/20 text-green-500 px-2 py-1 rounded-full text-sm "
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="p-4  bg-gray-500/20 h-full">{description}</p>

        <div className="flex justify-between border-b  p-4 items-center border-t border-gray-500 bg-gray-500/30">
          <div className="flex gap-2">
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              <Github
                width={20}
                height={20}
                stroke="silver"
                strokeWidth={2}
                fill="none"
              />
            </a>
            <a href={links.demo} target="_blank" rel="noopener noreferrer">
              <World
                width={20}
                height={20}
                stroke="silver"
                strokeWidth={2}
                fill="none"
              />
            </a>
            <a
              href={links.documentation}
              target="_blank"
              rel="noopener noreferrer"
            >
              <License
                width={20}
                height={20}
                stroke="silver"
                strokeWidth={2}
                fill="none"
              />
            </a>
          </div>

          <button className="bg-zinc-600 text-white p-2 rounded font-bold text-sm cursor-pointer hover:bg-zinc-500">
            Deploy
          </button>
        </div>
      </div>
    </div>
  );
}

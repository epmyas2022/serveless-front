import ServiceCard from "./components/ServiceCard";
import {
  AmazonWebServices,
  Docker,
  MongoDB,
  Search,
} from "./components/SvgIcons";

export function App() {
  const services = [
    {
      title: "Mongo DB",
      icon: <MongoDB width={50} height={50} />,
      description:
        "MongoDB is a NoSQL database that allows you to store and retrieve data in a flexible and scalable way.",
      tags: ["NoSQL", "Database", "MongoDB"],
      version: "1.0.0",
      links: {
        github: "https://github.com/mongodb/mongo",
        demo: "https://www.mongodb.com/",
        documentation: "https://www.mongodb.com/",
      },
    },
    {
      title: "Docker",
      icon: <Docker width={50} height={50} />,
      description:
        "Docker is a platform that allows you to package and run applications in containers.",
      tags: ["Container", "Docker", "Docker"],
      version: "1.0.0",
      links: {
        github: "https://github.com/docker/docker",
        demo: "https://www.docker.com/",
        documentation: "https://www.docker.com/",
      },
    },

    {
      title: "AWS Lambda",
      icon: <AmazonWebServices width={50} height={50} />,
      description:
        "AWS Lambda is a serverless compute service that allows you to run code without provisioning or managing servers.",
      tags: ["Serverless", "AWS", "Lambda"],
      version: "1.0.0",
      links: {
        github: "https://github.com/aws/lambda",
        demo: "https://aws.amazon.com/lambda/",
        documentation: "https://aws.amazon.com/lambda/",
      },
    },
  ];
  return (
    <div className="relative flex lg:h-dvh w-full items-center flex-col justify-center ">
      <h1 className="lg:text-8xl mt-6 text-6xl text-white font-oswald font-bold flex flex-col sm:flex-row gap-6 mb-20">
        <Docker width={100} height={100} />
        Deploy
        <span className="bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
          Serverless
        </span>
      </h1>

      <div>
        <div className="flex lg:justify-between lg:flex-row flex-col gap-6 justify-center items-center">
          <div className="fancy-border h-12 w-80 bg-slate-900">
            <div className="z-10 absolute inset-0 w-72 h-12 flex items-center gap-1">
              <Search width={24} height={24} stroke="silver" className="ml-4" />
              <input
                type="text"
                placeholder="Search"
                className="p-2 w-full h-full  bg-transparent rounded-lg outline-none "
              />
            </div>
          </div>
          <button
            className=" from-blue-500 to-blue-200 bg-linear-to-r group
           text-white rounded font-bold text-sm cursor-pointer p-px w-32"
          >
            <div className="bg-black p-2 rounded w-full h-full text-blue-500 group-hover:from-blue-200 group-hover:to-blue-500">
              New Service
            </div>
          </button>
        </div>
        <br />
        <div className="flex gap-16 flex-wrap justify-center">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

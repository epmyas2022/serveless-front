import {
  AmazonWebServices,
  Docker,
  MongoDB,
} from "@/components/SvgIcons";
import { createElement } from "react";

export const useMock = () => {
  const services = [
    {
      title: "Mongo DB",
      icon: createElement(MongoDB, { width: 50, height: 50 }),
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
      icon: createElement(Docker, { width: 50, height: 50 }),
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
      icon: createElement(AmazonWebServices, { width: 50, height: 50 }),
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

  return { services };
};

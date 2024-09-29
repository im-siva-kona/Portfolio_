"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Your personal portfolio website serves as a showcase of your professional skills, experience, and projects. Developed with HTML, CSS, and JavaScript, the site features sections such as an About Me,Projects, Skills, and Contact page. It includes smooth navigation, responsive design, and animations that highlight your web development skills and creativity. The portfolio not only reflects your technical abilities but also offers a professional online presence that recruiters and potential employers can easily navigate to understand your work. This project highlights your attention to detail in UI/UX design and your ability to present your expertise in an organized, visually appealing format.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/im-siva-kona/Portfolio_",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Movie Entertainment House Website",
    description: "The 'Meh-Movie Entertainment House' is a full-fledged web application inspired by Netflix, developed to offer users a seamless movie streaming experience. It includes features like browsing movies and TV shows, personalized recommendations, and a user-friendly interface for content discovery. The platform was built using HTML, CSS, JavaScript, and jQuery, with functionalities to search, filter, and display media content dynamically. This project showcases your skills in front-end development, media content management, and user-centric design. It reflects your ability to create intuitive, responsive, and aesthetically pleasing web applications focused on entertainment.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://meh-sjtv.onrender.com/",
    previewUrl: "https://meh-sjtv.onrender.com/",
  },
  {
    id: 3,
    title: "Weather Application",
    description: "This weather application provides users with real-time weather updates for any location worldwide, offering data such as temperature, humidity, wind speed, and forecast conditions. Built using HTML, CSS, JavaScript, and APIs (like OpenWeatherMap), it allows users to search for locations and retrieve weather information instantly. The app displays weather conditions with dynamic visuals (like icons for sunny or rainy conditions), and it is designed with a clean, user-friendly interface. This project emphasizes your understanding of API integration, front-end development, and creating applications that offer practical, real-time functionality to users.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/im-siva-kona/WeatherApp",
    previewUrl: "https://im-siva-kona.github.io/WeatherApp/Weather%20App/",
  },
  {
    id: 4,
    title: "A2Z Dukaan App",
    description: "The A2Z Dukaan App is an e-commerce platform that allows users to browse, purchase, and manage orders of various products. As the team leader, you contributed to developing this web app using HTML, CSS, JavaScript, jQuery, SQL, and Node.js. The application includes user authentication, product search, order management, and payment integration, offering a complete online shopping experience. The platform's design is user-friendly and responsive, ensuring that users can access it across multiple devices. This project demonstrates your leadership, front-end, and back-end development skills, along with database management and web technologies.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/im-siva-kona/A2ZDukaan_Ultimate",
    previewUrl: "https://im-siva-kona.github.io/A2ZDukaan_Ultimate/",
  },
  {
    id: 5,
    title: "AI Virtial Mouse",
    description: "The AI Virtual Mouse System leverages computer vision and machine learning to control a computer's cursor using hand gestures. Developed with OpenCV, MediaPipe, and AutoPy, this system recognizes hand gestures through a webcam, enabling various mouse events like clicks, dragging, and scrolling without physical interaction. The project enhances human-computer interaction by identifying gestures in real-time and translating them into cursor movements. It uses finger tracking to detect which fingers are raised, managing the user’s intent, and it visualizes hand movements and gesture recognition over time, providing smooth and responsive control. This project demonstrates expertise in AI, computer vision, and gesture-based control systems.",
    image: "/images/projects/5.png",
    tag: ["All", "AI"],
    gitUrl: "https://github.com/im-siva-kona/AIVirtualMouse",
    previewUrl: "https://github.com/im-siva-kona/AIVirtualMouse",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

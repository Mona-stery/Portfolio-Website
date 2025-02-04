import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I'm a passionate and driven aspiring programmer eager to expand my skills through hands-on experience in an internship or apprenticeship. With a strong desire to learn, adapt, and contribute to real-world projects, I'm excited to collaborate with professionals, tackle challenges, and grow in a dynamic environment. Let's connect and explore opportunities to innovate together!`;

export const ABOUT_TEXT = `I am an aspiring self-taught Web Developer with a good understanding of web technologies and a passion for creating efficient, responsive, and user-friendly web applications. I have experience working with HTML, CSS, JavaScript, and React, enabling me to build dynamic and interactive user interfaces. Through continuous learning and hands-on projects, I have developed a strong foundation in front-end development and enjoy problem-solving to create seamless digital experiences. As a self-motivated learner, I stay up to date with industry trends and best practices to refine my skills and build high-quality applications. I am excited to take on new challenges, collaborate with others, and grow as a developer!`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Self learning",
    description: `I’m currently learning several different programming languages to broaden my skill set and deepen my understanding of software development.`,
    technologies: ["React", "Node.js", "MongoDB", "C#", "C++"],
  },
  {
    year: "2021 - 2021",
    role: "IT Help Desk Internship",
    description: `Provided technical support to end users on hardware and software issues. Installed and configured software applications and operating systems. Assisted in troubleshooting network and connectivity issues.`,
    technologies: ["Zendesk", "AnyDesk"],
  },
  {
    year: "2011 - 2018",
    role: "Technical college entrance qualification",
    company: "Rudolf-Steiner-Schule,",
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

export const PROJECTS = [
  {
    title: "This Website",
    image: project1,
    description:
      "This website is a personal portfolio showcasing projects, skills, and contact information.",
    technologies: ["React", "TailwindCSS"],
  },
  {
    title: "Basic JavaScript Calculator",
    image: project2,
    description:
      "A simple calculator built with HTML, CSS, and JavaScript that performs basic arithmetic operations.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Python file mover",
    image: project3,
    description:
      "A Python script that moves files from one folder to another, based on the file type and date created.",
    technologies: ["Python"],
  },
];

export const CONTACT = {
  address: "Witten, North Rhine Westphalia, Germany",
  phoneNo: "+49 1741975455",
  email: "aitchesonmaximilian@gmail.com",
};

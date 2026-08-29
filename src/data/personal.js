import { yearsOfExperience } from "./career.js";

export const personalInfo = {
  name: "Rolando M. Mendoza Jr.",
  firstName: "Rolando M.",
  lastName: "Mendoza Jr.",
  titles: [
    "Senior React Developer",
    "React Native Developer",
    "Shopify Developer",
    "Full Stack Developer",
  ],
  email: "rolandomend23@gmail.com",
  phone: "+63 909 207 2719",
  location: "Bacolod City, Philippines",
  yearsOfExperience,
  resumeUrl: "/resume.pdf",
  resumeDownloadName: "Rolando_M_Mendoza_Jr_Resume.pdf",
  social: {
    github: "https://github.com/rolandotech",
    linkedin: "https://www.linkedin.com/in/rolando-mendoza-jr-591b06165/",
    facebook: "https://web.facebook.com/rmjrpro/",
  },
  summary:
    "Full Stack Developer with experience building responsive web apps, React Native mobile applications, and e-commerce platforms. Skilled in Next.js, React, NestJS, Node.js, Shopify, and WordPress — from PSD conversion to production deployment on Vercel and DigitalOcean. Certified in Claude AI and experienced using Cursor for AI-assisted development.",
  mission:
    "To deliver clean, scalable, and user-focused digital products by combining strong frontend craft with reliable backend systems, modern AI tooling, and smooth deployment workflows.",
  stats: [
    { label: "Years Experience", value: yearsOfExperience, suffix: "+" },
    { label: "Projects Completed", value: 50, suffix: "+" },
    { label: "Happy Clients", value: 30, suffix: "+" },
    { label: "Technologies", value: 25, suffix: "+" },
  ],
  certifications: [
    {
      id: 1,
      title: "Claude AI Certification",
      issuer: "Anthropic",
      description:
        "Certified in working with Claude AI for intelligent development workflows, prompt engineering, and building AI-powered solutions.",
    },
  ],
  aiTools: [
    {
      id: 1,
      name: "Cursor",
      description:
        "Experienced using Cursor for AI-assisted coding, refactoring, debugging, code reviews, and accelerating full-stack project delivery.",
    },
  ],
};

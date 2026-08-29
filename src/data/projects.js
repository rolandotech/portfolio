import { placeholderImage } from "./placeholder.js";

export const projects = [
  {
    id: 1,
    title: "TeleSynergy Corp",
    description:
      "Corporate website for Telesynergy Corp, built with modern React and Next.js practices. Responsive layout, optimized performance, and production-ready deployment.",
    image: placeholderImage,
    category: "Web",
    technologies: ["React", "Next.js", "Vercel", "Tailwind CSS", "Responsive UI"],
    live: "https://www.telesynergycorp.com",
    featured: true,
  },
  {
    id: 2,
    title: "Septic Helper 2000",
    description:
      "Shopify e-commerce store with a custom theme, product-focused layout, and optimized shopping experience for septic system products.",
    image: placeholderImage,
    category: "Shopify",
    technologies: ["Shopify", "Liquid", "JavaScript", "HTML", "CSS"],
    live: "https://www.septichelper2000.com",
    featured: true,
  },
  {
    id: 3,
    title: "SalesGen",
    description:
      "React-powered web platform focused on sales and lead generation workflows with a clean, modern interface and responsive design.",
    image: placeholderImage,
    category: "Web",
    technologies: ["React", "JavaScript", "REST API", "Responsive Design"],
    live: "https://salesgen.net",
    featured: true,
  },
  {
    id: 4,
    title: "Venturi Bold Brew",
    description:
      "Shopify store for a coffee brand with custom storefront design, product presentation, and mobile-friendly e-commerce experience.",
    image: placeholderImage,
    category: "Shopify",
    technologies: ["Shopify", "Liquid", "JavaScript", "SCSS"],
    live: "https://venturiboldbrew.com",
    featured: false,
  },
  {
    id: 5,
    title: "Heart Brand Beef",
    description:
      "E-commerce Shopify website for a beef products brand, featuring product catalogs, brand storytelling, and streamlined checkout flow.",
    image: placeholderImage,
    category: "Shopify",
    technologies: ["Shopify", "Liquid", "JavaScript", "Responsive Design"],
    live: "https://heartbrandbeef.com",
    featured: false,
  },
  {
    id: 6,
    title: "Jay Index",
    description:
      "Personal portfolio website built with React and deployed on Vercel, showcasing projects, skills, and professional experience.",
    image: placeholderImage,
    category: "Web",
    technologies: ["React", "JavaScript", "Vercel", "SCSS"],
    live: "https://jayindex.vercel.app",
    featured: false,
  },
  {
    id: 7,
    title: "Swamp Camping Site",
    description:
      "React-based camping and outdoor website with responsive UI, engaging visuals, and fast performance on Vercel.",
    image: placeholderImage,
    category: "Web",
    technologies: ["React", "JavaScript", "Vercel", "Responsive UI"],
    github: "https://github.com/rolandotech/swampcampingsite",
    live: "https://swampcampingsite.vercel.app",
    featured: false,
  },
  {
    id: 8,
    title: "R Courihay",
    description:
      "WordPress website with custom theme development, content management, and performance-focused front-end implementation.",
    image: placeholderImage,
    category: "WordPress",
    technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
    live: "http://rcourihay.com",
    featured: false,
  },
];

export const projectCategories = ["All", "Web", "Shopify", "WordPress"];

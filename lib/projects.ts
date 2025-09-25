export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 1,
    slug: "car-rental-system",
    title: "Car Rental System - Comfort~Trip",
    category: "Web Application",
    shortDescription:
      "A user-friendly car rental platform offering multiple car options, airport assistance, and professional driver services.",
    description: [
      "The Car Rental System (Comfort~Trip) is a modern web application that makes booking rental cars seamless and efficient. Customers can browse available cars, check service options, and book rides with ease.",
      "It offers specialized services like airport pickup/drop, professional drivers, and personalized trip planning. The system focuses on both customer convenience and quality service delivery.",
      "Admins have a management dashboard to add cars, handle bookings, and oversee customer requests in real time.",
    ],
    features: [
      "Browse and select from multiple car options",
      "Airport pickup and drop-off assistance",
      "Bookings with flexible scheduling",
      "User-friendly interface for trip planning",
      "Professional and experienced drivers",
      "Admin panel for car and booking management",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    coverImage: "/cover.png",
    thumbnailImage: "/homepage.png",
    gallery: [
      { url: "/homepage.png", caption: "Homepage" },
      { url: "/Bookings.png", caption: "Booking Page" },
      { url: "/cars.png", caption: "cars Service Options" },
      { url: "/footer-1.png", caption: "UI Components" },
    ],
    timeline: "3 months (Q2 2025)",
    role: "Full Stack Developer",
    liveUrl: "https://thecomforttrip.com/",
    githubUrl: "https://github.com/Krushang-Mehta/ComfortTrip_Web-App",
    relatedProjects: [
      {
        slug: "excel-analytics-platform",
        title: "Excel Analytics Platform - SheetIQ",
        category: "Web Application",
        image: "/Sheet1.png",
      },
      {
        slug: "real-estate-marketplace",
        title: "Real Estate Marketplace",
        category: "Web App",
        image: "/Real4.png",
      },
      {
        slug: "university-management-system",
        title: "University Management System (UMS)",
        category: "Web Application",
        image: "/School1.png"
      },
    ],
  },
  {
    id: 2,
    slug: "excel-analytics-platform",
    title: "Excel Analytics Platform - SheetIQ",
    category: "Web Application",
    shortDescription:
      "A full-stack platform for uploading Excel files, analyzing data, and generating interactive 2D/3D charts.",
    description: [
      "The Excel Analytics Platform is a powerful web application built with the MERN stack + Next.js 15 and TypeScript.",
      "It allows users to upload Excel files (.xls/.xlsx), parse the data with SheetJS, and visualize it using Chart.js and Three.js in both 2D and 3D formats.",
      "The platform provides JWT-based authentication, a user dashboard with history tracking, an admin panel, and optional AI integration for insights and summaries."
    ],
    features: [
      "Excel file upload & parsing with SheetJS",
      "Interactive 2D/3D data visualization",
      "Dynamic data mapping (select X and Y axes)",
      "Downloadable charts as PNG/PDF",
      "AI integration for smart insights (OpenAI API)",
      "User & Admin authentication with role-based access",
      "Responsive dashboard with history and analysis management"
    ],
    technologies: [
      "Next.js 15",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Chart.js",
      "Three.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "SheetJS"
    ],
    coverImage: "/Sheet5.png",
    thumbnailImage: "/Sheet1.png",
    gallery: [
      { url: "/Sheet2.png", caption: "Excel Upload Preview" },
      { url: "/Sheet4.png", caption: "2D Chart Visualization" },
      { url: "/Sheet5.png", caption: "3D Chart Example" },
      { url: "/Sheet6.png", caption: "Admin Dashboard" }
    ],
    timeline: "5 weeks (Q1 2025)",
    role: "Full Stack Developer",
    liveUrl: "https://github.com/Krushang-Mehta/SheetIQ---Excel-Analytics-Platform",
    githubUrl: "https://github.com/Krushang-Mehta/SheetIQ---Excel-Analytics-Platform",
    relatedProjects: [
      {
        slug: "real-estate-marketplace",
        title: "Real Estate Marketplace",
        category: "Web Application",
        image: "/Real4.png"
      },
      {
        slug: "car-rental-system",
        title: "Car Rental System - Comfort~Trip",
        category: "Web App",
        image: "/cover.png",
      },
    ]
  },
  {
    id: 3,
    slug: "real-estate-marketplace",
    title: "Real Estate Marketplace",
    category: "Web Application",
    shortDescription:
      "A full-stack platform for renting/buying properties with secure authentication, chat, and agent profiles.",
    description: [
      "The Real Estate Marketplace is a modern property rental and buying platform built with React.js, Node.js, Express, and MongoDB.",
      "It enables buyers, sellers, dealers, and agents to interact securely with JWT-based authentication and role-based access.",
      "The system includes property listings with advanced filters, detailed property pages, user dashboards, and real-time chat between buyers and sellers."
    ],
    features: [
      "JWT-based user authentication (buyer, seller, agent, dealer roles)",
      "Property listings with advanced filters (location, budget, size, type)",
      "Detailed property pages with images and descriptions",
      "Agent and dealer profile pages with verification badges",
      "User dashboards for saved listings, chats, and profile settings",
      "Secure chat and contact system between buyers and sellers"
    ],
    technologies: [
      "React.js",
      "SCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Formik",
      "Yup",
      "JWT"
    ],
    coverImage: "/Real1.png",
    thumbnailImage: "Real4.png",
    gallery: [
      { url: "/Real1.png", caption: "Homepage with Featured Properties" },
      { url: "/Real2.png", caption: "Property Details Page" },
      { url: "/Real3.png", caption: "Filter & Search Results" },
      { url: "/Real4.png", caption: "User Dashboard" }
    ],
    timeline: "6 months (Q2-Q3 2025)",
    role: "Full Stack Developer",
    liveUrl: "https://example.com/real-estate-marketplace",
    githubUrl: "https://github.com/example/real-estate-marketplace",
    relatedProjects: [
      {
        slug: "excel-analytics-platform",
        title: "Excel Analytics Platform",
        category: "Web Application",
        image: "/Sheet1.png"
      },
      {
        slug: "car-rental-system",
        title: "Car Rental System - Comfort~Trip",
        category: "Web App",
        image: "/cover.png",
      },
    ]
  },

  {
    id: 4,
    slug: "university-management-system",
    title: "University Management System (UMS)",
    category: "Web Application",
    shortDescription:
      "A full-stack system to streamline academic and administrative processes with role-based access for students, parents, teachers, and administrators.",
    description: [
      "The University Management System (UMS) is a comprehensive full-stack web application designed to simplify and digitalize university operations.",
      "It enables secure, role-based access for students, parents, teachers, and administrators, reducing paperwork and improving efficiency.",
      "Key modules include student academic records, attendance monitoring, event scheduling, real-time bus tracking, and analytics dashboards."
    ],
    features: [
      "JWT-secured role-based login and access control",
      "Student dashboards for results, lectures, timetable, and events",
      "Teacher dashboards with attendance, scheduling, and lecture management",
      "Parent portal for academic overview and live bus tracking",
      "Admin control panel with user management and analytics",
      "Real-time attendance updates and visualization with Recharts",
      "Seamless and responsive UI built with Tailwind CSS"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "Tailwind CSS",
      "Recharts",
      "JWT/Auth",
      "LeafLet Maps API"
    ],
    coverImage: "/School4.png",
    thumbnailImage: "/School1.png",
    gallery: [
      { url: "/School1.png", caption: "Admin Dashboard with Analytics" },
      { url: "/School6.png", caption: "Student Timetable & Attendance Page" },
      { url: "/School5.png", caption: "Teacher Lecture Management" },
      { url: "/School3.png", caption: "Parent Portal with Bus Tracking" }
    ],
    timeline: "8 months (Q1–Q3 2025)",
    role: "Full Stack Developer",
    liveUrl: "https://github.com/Krushang-Mehta/University-Management-Next.App",
    githubUrl: "https://github.com/Krushang-Mehta/University-Management-Next.App",
    relatedProjects: [
      {
        slug: "real-estate-marketplace",
        title: "Real Estate Marketplace",
        category: "Web Application",
        image: "/Real1.png"
      },
       {
        slug: "excel-analytics-platform",
        title: "Excel Analytics Platform",
        category: "Web Application",
        image: "/Sheet1.png"
      },
      {
        slug: "car-rental-system",
        title: "Car Rental System - Comfort~Trip",
        category: "Web Application",
        image: "/cover.png"
      }
    ]
  }

]

export { projects }

// Add these functions after the projects array export

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    // If no related projects defined, return random projects
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}

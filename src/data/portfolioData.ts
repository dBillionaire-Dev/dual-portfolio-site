
import { Mail, Calendar, Database, Plane, Target, Users, BarChart, MessageSquare } from 'lucide-react';

export const virtualAssistantData = {
  title: "Virtual Assistant",
  description: "I specialize in providing comprehensive administrative support and project management solutions to help businesses streamline operations and boost productivity.",
  services: [
    {
      title: "Email Management",
      description: "Professional email handling and organization",
      icon: Mail
    },
    {
      title: "Scheduling & Calendar",
      description: "Efficient appointment and meeting coordination",
      icon: Calendar
    },
    {
      title: "Data Entry & Organization",
      description: "Accurate data processing and management",
      icon: Database
    },
    {
      title: "Travel Arrangements",
      description: "Complete travel planning and booking services",
      icon: Plane
    }
  ],
  skills: [
    { name: "Organization", category: "core" as const },
    { name: "Time Management", category: "core" as const },
    { name: "Communication", category: "core" as const },
    { name: "Data Entry", category: "core" as const },
    { name: "Customer Service", category: "core" as const },
    { name: "Project Coordination", category: "core" as const },
    { name: "Problem-Solving", category: "core" as const }
  ],
  tools: [
    { name: "Gmail", icon: "📧", category: "technical" },
    { name: "Google Calendar", icon: "📅", category: "technical" },
    { name: "Microsoft Office", icon: "🗂️", category: "technical" },
    { name: "Excel", icon: "📊", category: "technical" },
    { name: "Slack", icon: "💬", category: "technical" },
    { name: "Trello", icon: "📋", category: "technical" },
    { name: "Asana", icon: "✅", category: "technical" },
    { name: "Notion", icon: "🧠", category: "technical" },
    { name: "Canva", icon: "🎨", category: "technical" },
    { name: "Zoom", icon: "🎥", category: "technical" }
  ],
  testimonial: {
    text: "Annie's administrative support has been invaluable to our team. Her attention to detail and proactive communication style has improved our workflow significantly.",
    author: "Amy Richardson",
    role: "Operations Director"
  },
  caseStudies: [
    {
      title: "Streamlined Healthcare Scheduling System",
      description: "Implemented a comprehensive appointment management system for a busy medical practice, reducing scheduling conflicts and improving patient satisfaction.",
      metric: "90% reduction in appointment conflicts",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      fullDescription: "Led the complete overhaul of a medical practice's scheduling system, implementing digital solutions that transformed their patient appointment management process. The project involved analyzing existing workflows, identifying pain points, and creating a seamless digital experience for both staff and patients.",
      challenges: [
        "Manual scheduling process causing frequent double-bookings",
        "No centralized system for patient information",
        "High staff turnover due to administrative burden",
        "Patient complaints about scheduling difficulties"
      ],
      solutions: [
        "Implemented Google Calendar integration with automated scheduling",
        "Created digital patient database with comprehensive records",
        "Developed staff training protocols for new system",
        "Established automated reminder system for patients"
      ],
      results: [
        "90% reduction in scheduling conflicts within first month",
        "50% decrease in patient wait times",
        "75% improvement in staff efficiency",
        "98% patient satisfaction rate with new booking system"
      ],
      technologies: ["Google Calendar", "Microsoft Excel", "Zapier", "WhatsApp Business"],
      timeline: "3 months"
    },
    {
      title: "Digital Document Organization",
      description: "Organized and digitized 5+ years of client files for a legal firm, creating a searchable database that improved retrieval efficiency.",
      metric: "75% faster document retrieval",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      fullDescription: "Transformed a legal firm's document management system by digitizing over 10,000 client files spanning 5 years. Created a comprehensive, searchable database that revolutionized how the firm handles case documentation and client information retrieval.",
      challenges: [
        "Thousands of physical documents in disorganized filing system",
        "Time-consuming manual search process",
        "Risk of document loss or damage",
        "Difficulty in sharing documents with remote team members"
      ],
      solutions: [
        "Systematic digitization of all physical documents",
        "Implementation of cloud-based document management system",
        "Creation of standardized naming conventions and folder structure",
        "Development of search functionality with metadata tagging"
      ],
      results: [
        "75% faster document retrieval time",
        "100% of documents backed up and secure",
        "Remote access enabled for all team members",
        "Zero document loss incidents since implementation"
      ],
      technologies: ["Google Drive", "Adobe Acrobat", "Microsoft OneDrive", "DocuSign"],
      timeline: "4 months"
    }
  ]
};

export const productManagerData = {
  title: "Product Manager",
  description: "Experienced product manager with expertise in agile methodologies, user research, and cross-functional team leadership. I drive product vision from concept to successful market launch.",
  services: [
    {
      title: "Product Strategy & Roadmap",
      description: "Strategic planning and roadmap development",
      icon: Target
    },
    {
      title: "User Research & Analysis",
      description: "In-depth user research and data analysis",
      icon: Users
    },
    {
      title: "Agile Project Management",
      description: "Efficient agile methodology implementation",
      icon: BarChart
    },
    {
      title: "Stakeholder Communication",
      description: "Clear communication across all stakeholders",
      icon: MessageSquare
    }
  ],
  skills: [
    { name: "Strategic Thinking", category: "core" as const },
    { name: "Market Research", category: "core" as const },
    { name: "Prioritization", category: "core" as const },
    { name: "Communication", category: "core" as const },
    { name: "Collaboration", category: "core" as const },
    { name: "Problem-Solving", category: "core" as const },
    { name: "Product Development", category: "core" as const }
  ],
  tools: [
    { name: "Jira", icon: "🎯", category: "Project Tracking" },
    { name: "Figma", icon: "🎨", category: "Design Collaboration" },
    { name: "Slack", icon: "💬", category: "Team Communication" },
    { name: "Notion", icon: "🧠", category: "Knowledge Base" },
    { name: "Whimsical", icon: "✨", category: "User Flow & Wireframing" },
    { name: "Balsamiq", icon: "📝", category: "Wireframing" },
    { name: "Trello", icon: "📋", category: "Task Management" },
    { name: "Asana", icon: "✅", category: "Project Planning" },
    { name: "Linear", icon: "📈", category: "Issue Tracking" },
    { name: "Canva", icon: "🎨", category: "Marketing Design" },
    { name: "Miro", icon: "🧩", category: "Collaboration & Mapping" },
    { name: "Confluence", icon: "📘", category: "Documentation" }
  ]
  ,
  testimonial: {
    text: "Annie's product leadership transformed our development process. Her strategic thinking and user-centric approach helped us deliver features that truly resonate with our customers.",
    author: "Michael Chen",
    role: "Tech Startup CEO"
  },
  caseStudies: [
    {
      title: "Mobile App Redesign Success",
      description: "Led a complete mobile app redesign project focusing on user experience improvements and feature optimization based on extensive user research.",
      metric: "150% increase in user engagement, 40% reduction in churn",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      fullDescription: "Spearheaded a comprehensive mobile app redesign for a fintech startup, conducting extensive user research and implementing data-driven design decisions that significantly improved user engagement and retention metrics.",
      challenges: [
        "High user churn rate (65% within first month)",
        "Poor user engagement metrics",
        "Outdated UI/UX not meeting modern standards",
        "Complex navigation causing user confusion"
      ],
      solutions: [
        "Conducted comprehensive user research with 500+ participants",
        "Implemented modern, intuitive UI/UX design principles",
        "Simplified navigation flow and reduced cognitive load",
        "A/B tested all major features before full rollout"
      ],
      results: [
        "150% increase in daily active users",
        "40% reduction in user churn rate",
        "85% improvement in user satisfaction scores",
        "200% increase in feature adoption rate"
      ],
      technologies: ["Figma", "React Native", "Firebase Analytics", "Mixpanel", "UserVoice"],
      timeline: "6 months"
    },
    {
      title: "B2B SaaS Platform Launch",
      description: "Successfully launched a new B2B SaaS platform from concept to market, coordinating with engineering, design, and sales teams to deliver ahead of schedule.",
      metric: "Delivered MVP 2 months early, secured $2M in pre-orders",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      fullDescription: "Led the end-to-end product development of a B2B SaaS platform for project management, from initial concept validation through market launch. Coordinated cross-functional teams and implemented agile methodologies to deliver a market-ready product ahead of schedule.",
      challenges: [
        "Tight market entry deadline with strong competition",
        "Complex integration requirements with existing tools",
        "Balancing feature richness with time-to-market",
        "Coordinating multiple stakeholder requirements"
      ],
      solutions: [
        "Implemented agile development methodology with 2-week sprints",
        "Prioritized MVP features using MoSCoW method",
        "Established clear communication channels between all teams",
        "Created comprehensive testing and QA processes"
      ],
      results: [
        "Delivered MVP 2 months ahead of original timeline",
        "Secured $2M in pre-orders before official launch",
        "Achieved 95% customer satisfaction in beta testing",
        "Won 'Best New Product' award at industry conference"
      ],
      technologies: ["Jira", "Confluence", "React", "Node.js", "PostgreSQL", "AWS"],
      timeline: "8 months"
    }
  ]
};
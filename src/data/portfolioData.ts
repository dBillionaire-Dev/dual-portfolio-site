
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
  tools: [
    { name: "Gmail", icon: "📧", category: "Email" },
    { name: "Google Calendar", icon: "📅", category: "Scheduling" },
    { name: "Excel", icon: "📊", category: "Data" },
    { name: "Slack", icon: "💬", category: "Communication" }
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
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
    },
    {
      title: "Digital Document Organization",
      description: "Organized and digitized 5+ years of client files for a legal firm, creating a searchable database that improved retrieval efficiency.",
      metric: "75% faster document retrieval",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
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
  tools: [
    { name: "Jira", icon: "🎯", category: "Project Management" },
    { name: "Figma", icon: "🎨", category: "Design" },
    { name: "Analytics", icon: "📈", category: "Data" },
    { name: "Slack", icon: "💬", category: "Communication" }
  ],
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
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
    },
    {
      title: "B2B SaaS Platform Launch",
      description: "Successfully launched a new B2B SaaS platform from concept to market, coordinating with engineering, design, and sales teams to deliver ahead of schedule.",
      metric: "Delivered MVP 2 months early, secured $2M in pre-orders",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
    }
  ]
};

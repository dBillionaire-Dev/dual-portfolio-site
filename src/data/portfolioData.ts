
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
      title: "Automating Expense Reports ",
      description: "Implemented an automated expense reporting system using Google Sheets, reducing manual entry time by 8 hours per month by auto-forwarding and organizing receipts directly into a shared spreadsheet.",
      metric: "Set up auto-forwarding of receipts to Sheets, reducing manual entry time by 8 hours/month",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      fullDescription: "Led the automation of a manual expense reporting process by leveraging Google Sheets, streamlining receipt collection and categorization. Designed and implemented an auto-forwarding system that captured email receipts directly into a structured spreadsheet, eliminating repetitive data entry and saving the finance team over 8 hours per month.",
      challenges: [
        "Expense reports were filled manually, leading to frequent errors and inconsistencies",
        "Team members spent excessive time organizing and submitting receipts",
        "Lack of real-time visibility into departmental spending",
        "Delays in monthly reporting due to disorganized documentation"
      ],
      solutions: [
        "Set up auto-forwarding of email receipts directly into a Google Sheets dashboard",
        "Used Google Sheets formulas to categorize and sum expenses dynamically",
        "Integrated timestamps and filters to track expenses in real-time",
        "Developed a simple template for consistent formatting across teams"
      ],
      results: [
        "Saved an average of 8 hours/month previously spent on manual data entry",
        "Improved accuracy of reports by eliminating manual errors",
        "Enabled real-time expense tracking for faster decision-making",
        "Increased reporting efficiency, reducing month-end close time by 40%"
      ],
      technologies: ["Google Sheets"],
      timeline: "3 months"
    },
    {
      title: "Event Coordination Project",
      description: "Executed end-to-end coordination for a multi-speaker virtual event, integrating Google Meet, Forms, and Notion to optimize scheduling, communication, and content delivery. Post-event, consolidated feedback into a comprehensive PowerPoint report to guide improvements for future sessions.",
      metric: "Managed speaker schedules, sent reminder emails (95% attendance rate).",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      fullDescription: "Led the planning and execution of a virtual summit for 40+ international attendees, streamlining coordination across speakers, platforms, and time zones. Utilized tools like Notion and Google Calendar to manage schedules, automate reminders (achieving a 95% attendance rate), and create branded visual assets in Canva to enhance attendee engagement.",
      challenges: [
        "Coordinating multiple speakers across different time zones",
        "Low engagement in previous events due to poor scheduling and communication",
        "Inconsistent branding and communication materials",
        "Lack of structured feedback collection from attendees"
      ],
      solutions: [
        "Centralized speaker schedules using Google Calendar, enabling real-time visibility for all stakeholders",
        "Used Google Forms to collect participant info and preferences pre-event",
        "Designed branded materials (agendas, invites, slides) in Canva for a cohesive visual experience",
        "Managed event logistics and content tracking using Notion",
        "Scheduled sessions and reminders via Google Meet integrations and email automation",
        "Compiled post-event feedback using Google Forms and visualized insights in PowerPoint"
      ],
      results: [
        "Achieved 95% speaker attendance rate through effective calendar management and reminders",
        "Increased participant satisfaction by 80% compared to previous events (via survey feedback)",
        "Reduced event planning time by 30% through improved workflow with Notion and automation tools",
        "Delivered a professional, well-branded event experience for over 40 attendees across 5+ countries",
        "Collected and analyzed 100% of feedback responses, producing a report used for future improvements"
      ],
      technologies: ["Google Calendar", "Google forms", "Notion", "Canva", "Powerpoint", "Google Meet"],
      timeline: "2 months"
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

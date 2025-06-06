import { useMemo } from "react";
import {
  Box,
  Cpu,
  Zap,
  Code,
  Figma,
  Users,
  Globe,
  Clock,
  Layout,
  Tablet,
  Server,
  Layers,
  Monitor,
  Compass,
  Palette,
  Database,
  Workflow,
  BarChart,
  Aperture,
  Maximize,
  FileText,
  RefreshCw,
  Briefcase,
  LineChart,
  GitBranch,
  Smartphone,
  CheckCircle,
  MessageSquare,
} from "lucide-react";

export function useServicesData() {
  const designData = useMemo(
    () => [
      {
        subtitle: "User Experience (UX) Design",
        services: [
          {
            icon: <Users size={34} />,
            title: "User Research and Persona Development",
            className: "border border-[#262626]",
          },
          {
            icon: <Layout size={34} />,
            title: "Information Architecture and Wireframing",
            className: "border-t border-r border-b border-[#262626]",
          },
          {
            icon: <Compass size={34} />,
            title: "Interactive Prototyping and User Testing",
            className: "border-t border-b border-[#262626]",
          },
          {
            icon: <Palette size={34} />,
            title: "UI Design and Visual Branding",
            className: "border border-[#262626]",
          },
        ],
      },
      {
        subtitle: "User Interface (UI) Design",
        services: [
          {
            icon: <Figma size={34} />,
            title: "Interface and Visual Appealing Interface Design",
            className: "border border-[#262626]",
          },
          {
            icon: <Aperture size={34} />,
            title: "Custom Iconography and Illustration",
            className: "border-t border-r border-b border-[#262626]",
          },
          {
            icon: <Layers size={34} />,
            title: "Typography and Color Palette Selection",
            className: "border-t border-b border-[#262626]",
          },
          {
            icon: <Monitor size={34} />,
            title: "Responsive Design for Various Devices",
            className: "border border-[#262626]",
          },
        ],
      },
      {
        subtitle: "Branding and Identity",
        services: [
          {
            icon: <Compass size={34} />,
            title: "Logo Design and Visual Identity Development",
            className: "border border-[#262626]",
          },
          {
            icon: <Maximize size={34} />,
            title: "Brand Strategy and Positioning",
            className: "border-t border-r border-b border-[#262626]",
          },
          {
            icon: <Users size={34} />,
            title: "Brand Guidelines and Style Guides",
            className: "border-t border-b border-[#262626]",
          },
          {
            icon: <FileText size={34} />,
            title:
              "Marketing Collateral Design (Brochures, Business Cards, etc.)",
            className: "border border-[#262626]",
          },
        ],
      },
    ],
    []
  );

  const engineeringData = useMemo(
    () => [
      {
        subtitle: "Web Development",
        services: [
          {
            icon: <Code size={34} />,
            title: "Front-End Development (HTML, CSS, JavaScript)",
            className: "border border-[#262626]",
          },
          {
            icon: <Server size={34} />,
            title: "Back-End Development (PHP, Python, Node)",
            className: "border-t border-r border-b border-[#262626]",
          },
          {
            icon: <Database size={34} />,
            title:
              "Content Management System (CMS) Implementation (WordPress, Drupal)",
            className: "border-t border-b border-[#262626]",
          },
          {
            icon: <Globe size={34} />,
            title: "E-Commerce Platform Development (Magento, Shopify)",
            className: "border border-[#262626]",
          },
        ],
      },
      {
        subtitle: "Mobile App Development",
        services: [
          {
            icon: <Smartphone size={34} />,
            title: "Native iOS and Android App Development",
            className: "border border-[#262626]",
          },
          {
            icon: <Box size={34} />,
            title: "Cross-Platform App Development (React Native, Flutter)",
            className: "border-t border-r border-b border-[#262626]",
          },
          {
            icon: <Tablet size={34} />,
            title: "App Prototyping and UI/UX Design Integration",
            className: "border-t border-b border-[#262626]",
          },
          {
            icon: <RefreshCw size={34} />,
            title: "App Testing, Deployment, and Maintenance",
            className: "border border-[#262626]",
          },
        ],
      },
      {
        subtitle: "Custom Software Development",
        services: [
          {
            icon: <Cpu size={34} />,
            title: "Enterprise Software Development",
            className: "border border-[#262626]",
          },
          {
            icon: <Workflow size={34} />,
            title: "Custom Web Application Development",
            className: "border-t border-r border-b border-[#262626]",
          },
          {
            icon: <Zap size={34} />,
            title: "Integration with Third-Party APIs and Systems",
            className: "border-t border-b border-[#262626]",
          },
          {
            icon: <Server size={34} />,
            title: "Legacy System Modernization and Migration",
            className: "border border-[#262626]",
          },
        ],
      },
    ],
    []
  );

  const projectManagementData = useMemo(
    () => [
      {
        subtitle: "Project Planning and Scoping",
        services: [
          {
            icon: <Briefcase size={34} />,
            title: "Requirements Gathering and Analysis",
            className: "border border-[#262626]",
          },
          {
            icon: <BarChart size={34} />,
            title: "Project Roadmap and Timeline Development",
            className: "border-t border-r border-b border-[#262626]",
          },
          {
            icon: <Users size={34} />,
            title: "Resource Allocation and Task Management",
            className: "border-t border-b border-[#262626]",
          },
          {
            icon: <LineChart size={34} />,
            title: "Risk Assessment and Mitigation",
            className: "border border-[#262626]",
          },
        ],
      },
      {
        subtitle: "Agile Development",
        services: [
          {
            icon: <GitBranch size={34} />,
            title: "Sprints Development and Sprints",
            className: "border border-[#262626]",
          },
          {
            icon: <Clock size={34} />,
            title: "Scrum or Kanban Methodology Implementation",
            className: "border-t border-r border-b border-[#262626]",
          },
          {
            icon: <CheckCircle size={34} />,
            title: "Regular Progress Updates and Review",
            className: "border-t border-b border-[#262626]",
          },
          {
            icon: <MessageSquare size={34} />,
            title: "Continuous Improvement and Feedback Incorporation",
            className: "border border-[#262626]",
          },
        ],
      },
    ],
    []
  );

  return { designData, engineeringData, projectManagementData };
};

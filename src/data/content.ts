import {
  TbBrandNextjs,
  TbBrandPython,
  TbBrandRust,
  TbBrandNodejs,
  TbBrandJavascript,
  TbBrandDjango,
  TbApi,
  TbBrandTypescript,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandReact,
  TbBrandGit,
  TbBrandAws,
  TbBrandGraphql,
  TbHome,
  TbHomeHeart,
  TbBrandDocker,
  TbCloud,
  TbBrandCSharp,
  TbBrandVue
} from "react-icons/tb";
import { BiLogoFlask, BiBoltCircle, BiLogoPostgresql } from "react-icons/bi";
import { SiAmazondynamodb, SiDotnet } from "react-icons/si";
import {GiSouthKorea} from "react-icons/gi";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const; // TS feature to make this read-only

export type Skill = {
  id: string;
  category: string;
  name: string;
  level: number;   // 1 > 3
  logo: string;
};
export const skills: Skill[] = [
  {
    id: "python",
    category: "languages",
    name: "Python",
    level: 1,
    logo: TbBrandPython(),
  },
  {
    id: "django",
    category: "frameworks",
    name: "Django",
    level: 1,
    logo: TbBrandDjango(),
  },
  {
    id: "drf",
    category: "frameworks",
    name: "DRF",
    level: 1,
    logo: TbApi(),
  },
  {
    id: "flask",
    category: "frameworks",
    name: "Flask",
    level: 1,
    logo: BiLogoFlask(),
  },
  {
    id: "fastapi",
    category: "frameworks",
    name: "FastAPI",
    level: 2,
    logo: BiBoltCircle(),
  },
  {
    id: "javascript",
    category: "languages",
    name: "JavaScript",
    level: 2,
    logo: TbBrandJavascript(),
  },
  {
    id: "typescript",
    category: "languages",
    name: "TypeScript",
    level: 2,
    logo: TbBrandTypescript(),
  },
  {
    id: "html",
    category: "languages",
    name: "HTML",
    level: 1,
    logo: TbBrandHtml5(),
  },
  {
    id: "css",
    category: "languages",
    name: "CSS",
    level: 3,
    logo: TbBrandCss3(),
  },
  {
    id: "react",
    category: "libraries",
    name: "React",
    level: 2,
    logo: TbBrandReact(),
  },
  {
    id: "nextjs",
    category: "frameworks",
    name: "Next.js",
    level: 2,
    logo: TbBrandNextjs(),
  },
  {
    id: "nodejs",
    category: "libraries",
    name: "Node.js",
    level: 3,
    logo: TbBrandNodejs(),
  },
  {
    id: "rust",
    category: "languages",
    name: "Rust",
    level: 3,
    logo: TbBrandRust(),
  },
  {
    id: "postgresql",
    category: "databases",
    name: "PostgreSQL",
    level: 1,
    logo: BiLogoPostgresql(),
  },
  {
    id: "git",
    category: "tools",
    name: "Git",
    level: 1,
    logo: TbBrandGit(),
  },
  {
    id: "dynamodb",
    category: "databases",
    name: "DynamoDB",
    level: 3,
    logo: SiAmazondynamodb(),
  },
  {
    id: "graphql",
    category: "tools",
    name: "GraphQL",
    level: 3,
    logo: TbBrandGraphql(),
  },
  {
    id: "aws",
    category: "tools",
    name: "AWS",
    level: 1,
    logo: TbBrandAws(),
  },
  {
    id: "french",
    category: "speech",
    name: "French",
    level: 1,
    logo: TbHome(),
  }, 
  {
    id: "english",
    category: "speech",
    name: "English",
    level: 1,
    logo: TbHomeHeart(),
  }, 
  {
    id: "korean",
    category: "speech",
    name: "Korean",
    level: 2,
    logo: GiSouthKorea(),
  },
  {
    id: "docker",
    category: "tools",
    name: "Docker",
    level: 1,
    logo: TbBrandDocker(),
  },
  {
    id: "gcp",
    category: "tools",
    name: "GCP",
    level: 2,
    logo: TbCloud(),
  },
  {
    id: "c#",
    category: "languages",
    name: "C#",
    level: 2,
    logo: TbBrandCSharp(),
  },
  {
    id: "dotnet",
    category: "frameworks",
    name: ".NET",
    level: 3,
    logo: SiDotnet(),
  },
  {
    id: "azure",
    category: "tools",
    name: "Azure",
    level: 2,
    logo: TbCloud(),
  },
  {
    id: "github-actions",
    category: "tools",
    name: "GitHub Actions",
    level: 2,
    logo: TbBrandGit(),
  },
  {
    id: "vue",
    category: "frameworks",
    name: "Vue",
    level: 2,
    logo: TbBrandVue(),
  },
];

export type WorkshopStation = {
  id: string;
  name: string;
  marker: string;
  description: string;
  skillIds: string[];
};

export const workshopStations: WorkshopStation[] = [
  {
    id: "backend",
    name: "Backend Station",
    marker: "◈",
    description: "Primary workshop area",
    skillIds: [
      "python",     // Python
      "django",     // Django
      "fastapi",    // FastAPI
      "flask",      // Flask
      "drf",        // DRF
      "c#",         // C#
      "dotnet",     // .NET
      "postgresql", // PostgreSQL
    ],
  },
  {
    id: "frontend",
    name: "Frontend Station",
    marker: "◆",
    description: "Supporting capabilities",
    skillIds: [
      "typescript",  // TypeScript
      "javascript",  // JavaScript
      "react",       // React
      "nextjs",      // Next.js
      "vue",         // Vue
      "html",        // HTML
      "css",         // CSS
    ],
  },
  {
    id: "infrastructure",
    name: "Infrastructure Station",
    marker: "▶",
    description: "DevOps & deployment",
    skillIds: [
      "docker",         // Docker
      "aws",            // AWS
      "gcp",            // GCP
      "azure",          // Azure
      "git",            // Git
      "github-actions", // GitHub Actions
    ],
  },
  {
    id: "communication",
    name: "Communication Station",
    marker: "●",
    description: "Unique differentiator",
    skillIds: [
      "english",  // English
      "french",   // French
      "korean",   // Korean
    ],
  },
];

// Helper function to get skills by station
export function getSkillsByStation(stationId: string): Skill[] {
  const station = workshopStations.find(s => s.id === stationId);
  if (!station) return [];

  return station.skillIds
    .map(id => skills.find(skill => skill.id === id))
    .filter((skill): skill is Skill => skill !== undefined);
}

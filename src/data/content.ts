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
  TbHomeHeart
} from "react-icons/tb";
import { BiLogoFlask, BiBoltCircle, BiLogoPostgresql } from "react-icons/bi";
import { SiAmazondynamodb } from "react-icons/si";
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
];

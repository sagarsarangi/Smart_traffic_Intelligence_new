// Shared Types and Interfaces

// ---------------------------------------------------------------------------
// Traffic dashboard types
// ---------------------------------------------------------------------------

/** A submitted incident pin shown on the city map heatmap. */
export interface IncidentPin {
    /** Latitude of the resolved location. */
    lat: number;
    /** Longitude of the resolved location. */
    lng: number;
    /** Display zone / area name (AI-resolved canonical name). */
    zone: string;
    /** Unique identifier so React can key the list. */
    id: string;
}


export interface SystemData {
  name: string;
  tagline: string;
  contact: {
    email: string;
    portfolio: string;
    links: SocialLink[];
  };
  summary: string;
  systemStats: SystemStat[];
  agents: AgentDefinition[];
  techStack: TechCategory[];
  datasetInfo: DatasetInfo;
  derivedFeatures: DerivedFeature[];
  modelInfo: ModelInfo[];
  team: TeamMember[];
  achievements: Achievement[];
  capabilities: Capability[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string; weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone"; size?: number | string }>;
}

export interface SystemStat {
  label: string;
  value: string;
  description: string;
}

export interface AgentDefinition {
  id: string;
  number: string;
  name: string;
  shortName: string;
  description: string;
  techBadges: string[];
  input: string;
  processing: string;
  output: string;
  details: string[];
  color: 'primary' | 'accent' | 'secondary' | 'dark';
}

export interface TechCategory {
  category: string;
  items: string[];
}

export interface DatasetInfo {
  totalRecords: number;
  unplannedRecords: number;
  plannedRecords: number;
  trainableRecords: number;
  medianResolution: number;
  keyColumns: string[];
}

export interface DerivedFeature {
  name: string;
  description: string;
}

export interface ModelInfo {
  name: string;
  type: string;
  algorithm: string;
  target: string;
  records: string;
  details: string;
}

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface Achievement {
  title: string;
  organization: string;
  date: string;
  points: string[];
}

// Re-export old types for backward compatibility
export interface WorkExperience {
  title: string;
  company: string;
  place: string;
  date: string;
  description: string;
  points: string[];
}

export interface Education {
  degree: string;
  institution: string;
  date: string;
  details: string;
}

export interface Project {
  title: string;
  tech: string[];
  description: string;
  points: string[];
  url: string;
  image?: string;
}

export interface Skills {
  programming: string[];
  ai_ml: string[];
  data: string[];
  misc: string[];
  soft: string[];
}

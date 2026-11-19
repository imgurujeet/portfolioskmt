export interface SkillItem {
  name: string;
  category: 'creative' | 'technology' | 'professional';
  description: string;
  iconName: string;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Graphic Design' | 'Art & Craft' | 'Digital Experiments' | 'Vibe Coding';
  description: string;
  tags: string[];
  status: 'coming_soon' | 'completed';
  date?: string;
  imageUrl?: string;
  previewUrl?: string;
}

export const CANDIDATE_INFO = {
  name: "Tulika Shree",
  initials: "TS",
  headline: "Creativity meets Technology.",
  professionalTitle: "Creative Designer | Digital Creator | Aspiring Developer",
  subTitleBadges: [
    "Creative Designer",
    "Art & Craft Enthusiast",
    "Vibe Coding Explorer"
  ],
  bioSummary: "Hi, I'm Tulika Shree. I explore the intersection of creative design, art, technology and digital experiences. I'm passionate about learning, creating and turning ideas into meaningful visual experiences.",
  detailedBio: [
    "I'm Tulika Shree, an aspiring creative professional who enjoys exploring the world of design, art and technology. With a background in computer applications and ongoing studies in Zoology, I bring curiosity, creativity and a willingness to learn into everything I do.",
    "From exploring graphic design and art & craft to experimenting with vibe coding, I enjoy discovering new ways to transform ideas into visual and digital experiences.",
    "As a fresher, I'm looking forward to opportunities where I can grow, gain practical experience and contribute my creativity and dedication."
  ],
  statusBadge: "Open to Opportunities",
  careerObjective: "Seeking a good professional job opportunity where I can develop my skills, gain practical experience, and contribute creatively.",
  location: {
    city: "Barh",
    district: "Patna",
    state: "Bihar",
    country: "India",
    full: "Barh, Patna, Bihar, India"
  },
  contact: {
    email: "shreetulika64@gmail.com",
    phone: "+91 9905966498",
    phoneDisplay: "+91 99059 66498",
    formEndpoint: "https://sendmyform.live/api/f/tulika"
  },
  resume: {
    path: "/assets/Tulika_Shree_Resume.pdf",
    filename: "Tulika_Shree_Resume.pdf",
    lastUpdated: "2026",
    statusNote: "Curriculum Vitae available for immediate download"
  },
  education: {
    degree: "B.Sc. Zoology",
    stage: "Currently in 3rd Year",
    isOngoing: true,
    institution: "A.N.S. College, Barh",
    expectedYear: "2028",
    description: "Building strong analytical, observational, and scientific reasoning skills while actively cultivating digital design and computing proficiencies."
  },
  internship: {
    organization: "SKMT Trust",
    label: "Internship Experience",
    description: "An opportunity to gain exposure, learn through experience and develop practical skills.",
    scope: "Professional Development & Practical Learning"
  },
  skills: [
    {
      name: "Graphic Design",
      category: "creative",
      description: "Crafting visual identities, digital layouts, aesthetic compositions, and typography that communicate brand narratives clearly.",
      iconName: "Palette",
      highlights: ["Visual Aesthetics", "Layout Composition", "Color Harmony", "Creative Concepting"]
    },
    {
      name: "Art & Craft",
      category: "creative",
      description: "Hands-on mastery of tactile creation, dimensional design, material coordination, and nuanced fine art details.",
      iconName: "Sparkles",
      highlights: ["Tactile Precision", "Color Blending", "Handcrafted Forms", "Attention to Detail"]
    },
    {
      name: "Vibe Coding",
      category: "technology",
      description: "Embracing modern AI-assisted engineering paradigms, rapid prototyping, and translating high-level aesthetic intent into responsive web interfaces.",
      iconName: "Wand2",
      highlights: ["AI-Assisted Workflow", "Rapid UI Prototyping", "Prompt Architecture", "Modern Web Iteration"]
    },
    {
      name: "Computer Applications (ADCA)",
      category: "technology",
      description: "Comprehensive foundation in computer operations, digital systems management, file architectures, and productivity toolkits.",
      iconName: "Monitor",
      highlights: ["Digital Literacy", "System Navigation", "Office Productivity", "Data Organization"]
    },
    {
      name: "Leadership",
      category: "professional",
      description: "Organizing initiatives, fostering mutual motivation, embracing responsibility, and driving creative tasks toward completion.",
      iconName: "Compass",
      highlights: ["Initiative Taking", "Goal Orientation", "Collaborative Spirit"]
    },
    {
      name: "Communication",
      category: "professional",
      description: "Articulating ideas with clarity, active listening, responsive coordination, and transparent interpersonal dialogue.",
      iconName: "MessageSquare",
      highlights: ["Clear Articulation", "Active Listening", "Team Coordination"]
    }
  ] as SkillItem[],
  projectCategories: [
    "All",
    "Graphic Design",
    "Art & Craft",
    "Digital Experiments",
    "Vibe Coding"
  ],
  // Projects array is ready for immediate addition of future work items
  projects: [] as ProjectItem[]
};

import profileImage from '@/assets/profile-image.png';
import personalPhoto from '@/assets/personalphoto.png';
import vibecoderImage from '@/assets/VIBECODER.png';
import diplomaImage from '@/assets/diploma.jpg';
import aiArt1 from '@/assets/AiArt_1.png';
import aiArt2 from '@/assets/AiArt_2.png';
import aiArt3 from '@/assets/AiArt_3.png';
import aiArt4 from '@/assets/AiArt_4.png';
import aiArt5 from '@/assets/AiArt_5.png';
import synapseCover from '@/assets/synapse-ai-assistant_cover_page.png';
import synapseAssistant from '@/assets/synapse-ai-assistant.png';
import synapseCoverPage from '@/assets/synapse-ai-coverpage.jpg';
import synapseDashboard from '@/assets/synapse-dashboard.png';
import synapseLogin from '@/assets/synapse-login.png';
import synapseWorkflow from '@/assets/synapse-workflow.png';
import bikeRentalVideo from '@/assets/bikerental_demo.mp4';
import bikeRentalCover from '@/assets/ai_dealer_cover_page.png';
import sleepCover from '@/assets/ai_beautiful_cover.png';
import sleepVideo from '@/assets/助眠demo.mp4';

export const manifesto = {
  name: 'Xinyi Kou',
  index: '001',
  title: 'I do not define myself by any title.',
  titleCn:
    'I do not define myself by any title. I define myself by curiosity, and by the progress I keep making.',
  subtitle:
    'I do not define myself by any title. I define myself by curiosity, and by the progress I keep making.',
  bio:
    'A digital exhibition of product thinking, business systems, AI workflow experiments, and small observations.',
  portrait: profileImage,
  personalPhoto,
  vibecoderImage,
};

export const capabilityPlates = [
  {
    code: 'A01',
    title: 'Product Translation',
    body: 'Turn complex AI capabilities into configurable, reviewable, and operable product flows for business users.',
  },
  {
    code: 'A02',
    title: 'Business Analysis',
    body: 'Map roles, rules, page paths, edge cases, and system boundaries from real B-side automotive workflows.',
  },
  {
    code: 'A03',
    title: 'AI Workflow',
    body: 'Use prompts, skills, OCR, RAG, and agent workflows to process large amounts of historical business information.',
  },
  {
    code: 'A04',
    title: 'Interface Craft',
    body: 'Deliver PRDs, BRDs, journey flows, user stories, test cases, high-fidelity prototypes, and presentation materials.',
  },
];

export const exhibitionNodes = [
  {
    id: 'ai-check',
    label: 'Case File 01',
    title: 'AI 明检',
    color: '#2457ff',
    position: 'rightTop',
    summary:
      'AI simulated customer training and assessment for automotive sales inspection scenarios.',
  },
  {
    id: 'knowledge-engine',
    label: 'System Layer',
    title: 'Knowledge Engine',
    color: '#6d7563',
    position: 'leftBottom',
    summary:
      'A structured knowledge base for automotive parts business rules, OCR evidence, PRD history, and current effective documents.',
  },
  {
    id: 'digital-employee',
    label: 'In Progress',
    title: 'Digital Employee Lab',
    color: '#d72418',
    position: 'rightBottom',
    summary:
      'Researching how AI agents can help product managers update documents, write PRDs, verify code evidence, and maintain business knowledge.',
  },
  {
    id: 'memory-layer',
    label: 'Memory Sample',
    title: 'Origin',
    color: '#f0c62d',
    position: 'leftTop',
    summary:
      'University of Melbourne UX training, Midjourney China Lab, visual trend tracking, boxing, hackathons, and curiosity notes.',
  },
];

export const timelineEntries = [
  {
    year: '2022',
    meta: 'Melbourne',
    title: 'University of Melbourne',
    body:
      'Studied user experience design, HCI, usability evaluation, user research, interface design, and database systems.',
  },
  {
    year: '2024',
    meta: 'AI Image Product',
    title: 'Midjourney China Lab',
    body:
      'Worked on AI image product operations and growth, Xiaohongshu content planning, AIGC examples, and visual trend tracking.',
    image: vibecoderImage,
    gallery: [aiArt1, aiArt2, aiArt3, aiArt4, aiArt5],
  },
  {
    year: '2025',
    meta: 'Graduation',
    title: 'Bachelor Degree',
    body:
      'Graduated from UX design and shifted attention toward AI products, business systems, and product delivery in real organizations.',
    image: diplomaImage,
  },
  {
    year: '2025+',
    meta: 'Automotive B-side',
    title: 'Business Analyst / Product Assistant',
    body:
      'Joined Shanghai Bizite, supporting Volvo DMS, LTO, parts, CRM, business requirement analysis, issue diagnosis, product solutions, and cross-team alignment.',
  },
  {
    year: 'Now',
    meta: 'AI Product Research',
    title: 'Digital Employee & Knowledge Agent',
    body:
      'Exploring a knowledge engineering agent for product managers: document update, PRD writing, RAG evidence retrieval, code cross-checking, and user-confirmed calibration loops.',
  },
];

export type ProjectKind = 'gallery' | 'video' | 'plate';

export interface PortfolioProject {
  id: string;
  index: string;
  title: string;
  label: string;
  date: string;
  role: string;
  type: string;
  description: string;
  contribution: string[];
  image?: string;
  images?: string[];
  video?: string;
  accent: string;
  kind: ProjectKind;
}

export const projects: PortfolioProject[] = [
  {
    id: 'ai-check',
    index: '017',
    title: 'AI 明检',
    label: 'Main Case / AI Assessment',
    date: '2026.05 - Now',
    role: 'AI Product Design / BA / Prototype',
    type: 'Automotive sales training and assessment',
    description:
      'Designed an AI dialogue interaction and assessment system for automotive inspection training. It upgrades manual exam scoring into a configurable loop of simulated customers, voice exams, custom scoring dimensions, and AI improvement reports.',
    contribution: [
      'Designed AI customer agent configuration for non-technical business users.',
      'Covered App-side learner exams and PC/SaaS-side task, agent, scoring, and report management.',
      'Translated custom scoring rules into prompt-controlled model evaluation logic.',
      'Delivered PRD, flow diagrams, high-fidelity prototypes, user stories, test cases, and presentation materials.',
    ],
    accent: '#2457ff',
    kind: 'plate',
  },
  {
    id: 'knowledge-engine',
    index: '021',
    title: 'Knowledge Engine',
    label: 'Business System / AI Workflow',
    date: '2025.08 - Now',
    role: 'BA / AI Workflow Designer',
    type: 'Automotive parts process knowledge base',
    description:
      'Built a method for organizing automotive parts lifecycle logic from historical PRDs, OCR evidence, page paths, business rules, role actions, and current effective documents.',
    contribution: [
      'Built a lifecycle framework covering purchase, inbound, outbound, transfer, traceability, inventory, and settlement.',
      'Designed AI reading rules to extract goals, current logic, updated logic, menu paths, terms, and role operation paths.',
      'Converted personal AI use into reusable prompts, skills, and knowledge documents for team handoff.',
    ],
    accent: '#6d7563',
    kind: 'plate',
  },
  {
    id: 'digital-employee',
    index: '026',
    title: 'Digital Employee Lab',
    label: 'Research / In Progress',
    date: '2026.05 - Now',
    role: 'AI Product Research',
    type: 'Product manager knowledge engineering agent',
    description:
      'Researching a digital employee for product managers: not a simple vector Q&A tool, but an agent workflow that maintains current effective business documents and writes PRDs with evidence retrieval and code cross-checking.',
    contribution: [
      'Defined document update and PRD writing loops.',
      'Separated raw historical documents, current effective documents, RAG indexes, and code evidence.',
      'Designed calibration flow for conflicts between PRD intent and actual code implementation.',
    ],
    accent: '#d72418',
    kind: 'plate',
  },
  {
    id: 'synapse',
    index: '032',
    title: 'Synapse AI Platform',
    label: 'Internal AI Tool',
    date: '2025.06',
    role: 'Product & UX/UI',
    type: 'Workflow assistant',
    description:
      'An internal AI-driven platform for product and engineering workflows, helping generate PRDs and BRDs and reduce friction between human teams and AI agents.',
    contribution: [
      'Designed product workflow and interface structure.',
      'Explored AI assistant, dashboard, login, and workflow pages.',
      'Used visual prototypes to explain complex AI workflows.',
    ],
    image: synapseCover,
    images: [synapseCoverPage, synapseLogin, synapseAssistant, synapseDashboard, synapseWorkflow],
    accent: '#111111',
    kind: 'gallery',
  },
  {
    id: 'bike-rental',
    index: '041',
    title: 'C2C Bike Rental',
    label: 'UX/UI Design',
    date: '2025.09',
    role: 'UX/UI Design',
    type: 'Commercial app',
    description:
      'A C2C platform concept for peer-to-peer bike rental and urban mobility sharing.',
    contribution: [
      'Defined a rental flow for browsing, booking, and handoff.',
      'Explored commercial mobile app experience and visual structure.',
    ],
    image: bikeRentalCover,
    video: bikeRentalVideo,
    accent: '#f0c62d',
    kind: 'video',
  },
  {
    id: 'sleep-companion',
    index: '046',
    title: 'AI Sleep Companion',
    label: 'Concept & Design',
    date: '2025.11',
    role: 'Concept & Design',
    type: 'Consumer AI app',
    description:
      'A concept platform using AI to offer personalized soundscapes and sleep recommendations.',
    contribution: [
      'Explored AI-assisted wellness interaction.',
      'Created visual and interaction prototype for a consumer-facing concept.',
    ],
    image: sleepCover,
    video: sleepVideo,
    accent: '#d72418',
    kind: 'video',
  },
];

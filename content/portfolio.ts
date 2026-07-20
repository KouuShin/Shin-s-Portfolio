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
import aiMingjianCover from '@/assets/ai-mingjian_cover_page.png';
import sleepCover from '@/assets/ai_beautiful_cover.png';
import sleepVideo from '@/assets/助眠demo.mp4';

export const siteConfig = {
  name: 'Xinyi Kou',
  linkedin: 'https://www.linkedin.com/in/xinyi-kou-12a732334/',
} as const;

export const manifesto = {
  name: siteConfig.name,
  index: '001',
  title: 'I do not define myself by any title.',
  titleCn:
    'I do not define myself by any title. I define myself by curiosity, and by the progress I keep making.',
  subtitle:
    'I do not define myself by any title. I define myself by curiosity, and by the progress I keep making.',
  bio:
    'I turn business processes into testable AI workflows, skills, and product prototypes — then use what I build to understand where the technology truly helps.',
  portrait: profileImage,
  personalPhoto,
  vibecoderImage,
};

export const capabilityPlates = [
  {
    code: 'A01',
    title: 'Problem Framing',
    body: 'Find the operational problem behind a request, define its boundaries, and turn it into a product direction that can be tested.',
  },
  {
    code: 'A02',
    title: 'Workflow Translation',
    body: 'Translate business processes into roles, rules, review gates, structured inputs and reusable AI workflows.',
  },
  {
    code: 'A03',
    title: 'AI Prototyping',
    body: 'Build with multimodal models, Dify, skills, scripts, RAG, and agent frameworks to test what AI can and cannot reliably do.',
  },
  {
    code: 'A04',
    title: 'Product Delivery',
    body: 'Connect PRDs, user journeys, high-fidelity prototypes, platform integration, and human review into an executable product loop.',
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
    id: 'industrial-ai',
    label: 'Work in Progress',
    title: 'Industrial AI Workflow',
    color: '#6d7563',
    position: 'leftBottom',
    summary:
      'Turning engineering documents, conditions, comparison logic, and review rules into reusable AI workflows and skills.',
  },
  {
    id: 'synapse',
    label: 'AI Product Lab',
    title: 'Synapse',
    color: '#d72418',
    position: 'rightBottom',
    summary:
      'Exploring how product documents, development evidence, and actual code logic can stay connected as a system changes.',
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
    meta: 'Industrial AI / Product Lab',
    title: 'From AI Workflows to Agents',
    body:
      'Designing AI workflows for manufacturing engineering tasks while using Synapse as a personal lab for knowledge continuity, change awareness, skills, and evidence-based agents.',
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
  cardHighlights?: string[];
  problem?: string;
  outcome?: string;
  skills?: string[];
  detailSections?: Array<{
    title: string;
    body?: string;
    items?: string[];
  }>;
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
    type: 'Volvo sales training and assessment system',
    description:
      'Designed a Volvo sales assessment product that turns manual “Mingjian” checks into an AI dialogue, scoring, and coaching loop. The system connects PC-side task configuration, AI customer agents, App-side voice exams, role-based dashboards, and personalized AI improvement reports.',
    contribution: [
      'Defined the product background: replace costly, inconsistent manual sales checks with a reusable AI dialogue assessment workflow.',
      'Mapped four role boundaries: group business team, AI customer agent, store manager, and frontline sales learner.',
      'Designed PC-side flows for AI customer agent management, Mingjian task creation, custom scoring dimensions, dealer dispatch scope, and data dashboards.',
      'Designed App and PC learner flows for task calendar, exam detail, anti-cheating check, voice-based customer simulation, scoring-in-progress state, and final report review.',
      'Specified AI behavior: prompt-controlled customer persona loading, dynamic objections, guided dialogue continuation, time-limit handling, multi-question switching, transcript analysis, custom-dimension scoring, and personalized improvement advice.',
      'Produced PRD, cross-role business flow, PC/App HTML prototypes, permission rules, status transitions, validation rules, and report interaction logic.',
    ],
    cardHighlights: [
      'Achievement: transformed manual Mingjian checks into an AI dialogue, scoring, and coaching workflow.',
      'Role: owned PRD structure, cross-role flows, PC/App prototype logic, scoring rules, and permissions.',
      'Skills: AI agent configuration, custom rubrics, voice exam flow, dashboard logic, report design.',
    ],
    problem:
      'Traditional manual Mingjian checks were expensive, inconsistent, hard to scale, and difficult to turn into continuous coaching.',
    outcome:
      'A reusable assessment workflow connecting task setup, AI customer simulation, voice examination, scoring, dashboards, and personalized improvement reports.',
    skills: [
      'AI product design',
      'Business analysis',
      'Prompt-controlled scoring',
      'PC/App prototyping',
      'Role permission modeling',
    ],
    detailSections: [
      {
        title: 'Product Background',
        body:
          'The project replaces one-off manual sales inspections with a standardized AI assessment loop. Business teams can configure tasks and scoring dimensions, learners complete voice-based customer simulations, and managers review reports and improvement suggestions.',
      },
      {
        title: 'System Roles',
        items: [
          'Group business team: creates Mingjian tasks, configures AI customer agents, defines scoring dimensions, and dispatches dealer scope.',
          'AI customer agent: loads persona, product background, objection strategy, and dialogue rules through prompt-controlled behavior.',
          'Store manager: tracks completion, reviews learner progress, and manages team-side assessment follow-up.',
          'Frontline learner: receives tasks, enters voice simulation, completes anti-cheating checks, and reviews scoring reports.',
        ],
      },
      {
        title: 'Core Product Design',
        items: [
          'PC-side task configuration: agent management, Mingjian task setup, custom scoring dimensions, dealer dispatch, and data dashboard.',
          'App/PC learner path: task calendar, exam detail, anti-cheating check, voice customer simulation, scoring state, and final report review.',
          'AI behavior rules: dynamic objections, guided continuation, time-limit handling, multi-question switching, transcript analysis, and personalized coaching.',
        ],
      },
      {
        title: 'Deliverables',
        items: [
          'PRD v1.0, cross-role business flow, permission rules, status transitions, validation logic, and report interaction rules.',
          'PC and App HTML prototype direction for task creation, customer agent configuration, exam execution, and result review.',
        ],
      },
    ],
    image: aiMingjianCover,
    images: [aiMingjianCover],
    accent: '#2457ff',
    kind: 'gallery',
  },
  {
    id: 'industrial-ai',
    index: '021',
    title: 'Industrial AI Workflow',
    label: 'Main Case / Work in Progress',
    date: '2026 - Now',
    role: 'AI Workflow Planning / Design / Integration',
    type: 'Manufacturing engineering automation',
    description:
      'Designing a reusable AI workflow for manufacturing engineering tasks: recognizing PDF and PNG inputs, extracting engineering conditions, mapping and comparing information, and returning structured results for downstream DQR and CAA processes.',
    contribution: [
      'Plan and build the AI workflow, define its boundaries, and connect it with the surrounding platform.',
      'Translate engineering SOPs into skills composed of judgment rules, steps, tools, scripts, references, and templates.',
      'Combine semantic classification, multimodal extraction, format conversion, low-confidence suggestions, and explicit human confirmation.',
    ],
    cardHighlights: [
      'Goal: move engineers away from repetitive checking, searching, comparing, and clicking toward defining the rules that guide AI.',
      'Role: own AI workflow planning, design, prototyping, and third-party platform integration.',
      'Status: workflow under active development; architecture and output contracts defined, business validation ongoing.',
    ],
    problem:
      'Engineering work contains repeated document checks, information lookup, comparison, and manual judgment. These steps are time-consuming, easy to miss, and difficult for the organization to retain as reusable knowledge.',
    outcome:
      'An in-progress workflow architecture that converts PDF and PNG inputs into reviewable structured data for DQR and CAA processes, while preserving human confirmation for extracted facts, comparisons, and final judgments.',
    skills: [
      'AI workflow architecture',
      'Multimodal document understanding',
      'Skill design',
      'Human-in-the-loop design',
      'Platform integration',
    ],
    detailSections: [
      {
        title: 'Product Goal',
        body:
          'The aim is not to remove engineering judgment. It is to let engineers become rule makers: they capture their process and experience, direct AI through reusable skills, and retain those assets inside the organization.',
      },
      {
        title: 'Workflow Framework',
        items: [
          'Input: engineering PDFs and PNGs from existing business processes.',
          'Processing: document recognition, engineering-condition extraction, semantic classification, mapping, comparison, and format conversion.',
          'Review: low-confidence suggestions and all important extracted, compared, or judged results remain subject to human confirmation.',
          'Output: two structured JSON packages carrying the information needed by downstream DQR and CAA processes.',
        ],
      },
      {
        title: 'Knowledge as an Operational Asset',
        body:
          'Skills translate business experience from macro to micro: SOP, judgment rules, steps, tools, scripts, references, and templates. This makes the workflow repeatable and lets the company retain more than a one-off automation result.',
      },
      {
        title: 'Current Status',
        body:
          'The workflow is being built and tested. The portfolio presents the product architecture, design decisions, and role boundaries rather than claiming completed production impact or unverified efficiency metrics.',
      },
    ],
    accent: '#6d7563',
    kind: 'plate',
  },
  {
    id: 'synapse',
    index: '026',
    title: 'Synapse',
    label: 'AI Product Lab / Demo',
    date: '2025 - Now',
    role: 'Problem Definition / Product Architecture / Prototype',
    type: 'Knowledge continuity and product-development agent',
    description:
      'A continuing AI product experiment born from a real collaboration gap: product documents, development work, and actual code logic evolve together, but teams often cannot perceive how one change affects the others.',
    contribution: [
      'Defined a knowledge structure that separates raw sources, current effective documents, retrieval indexes, code evidence, task context, rules, skills, and outputs.',
      'Designed change-aware loops for document updates and PRD writing, including evidence retrieval, impact analysis, code cross-checking, and human calibration.',
      'Prototyped the product direction from a Knowledge Engine into a Digital Employee that can use organizational knowledge to perform bounded work.',
    ],
    cardHighlights: [
      'Problem: product documents, development decisions, and code logic become disconnected as each side changes.',
      'Evolution: Knowledge Engine → change awareness → evidence-based Digital Employee.',
      'Status: personal AI Product Lab and prototype, used to test product hypotheses and agent boundaries.',
    ],
    problem:
      'Documents are scattered, handovers are difficult, and important context remains with individuals. When a product rule or implementation changes, the connected documents and code are not automatically understood as one evolving system.',
    outcome:
      'A prototype architecture for preserving current business knowledge and letting an agent retrieve evidence, identify conflicts, analyze impact, draft product documents, and route uncertain decisions back to people.',
    skills: [
      'Product discovery',
      'Knowledge architecture',
      'RAG and evidence design',
      'Agent workflow design',
      'Human calibration',
    ],
    detailSections: [
      {
        title: 'Why Synapse Exists',
        body:
          'The idea began with repeated product work: historical documents were fragmented, handovers lost context, and product intent could diverge from development decisions and actual code. A change in one place often affected another, but the relationship was invisible.',
      },
      {
        title: 'Stage 01 — Knowledge Engine',
        body:
          'The first stage focused on continuity: preserve raw sources, organize current effective documents, retain evidence and code knowledge, and make business rules traceable instead of relying on individual memory.',
      },
      {
        title: 'Stage 02 — Change Awareness',
        body:
          'The next question was not only where knowledge lives, but how it changes. Synapse explores relationships between product documents, development evidence, and code logic so that conflicts and downstream impact can be surfaced for review.',
      },
      {
        title: 'Stage 03 — Digital Employee',
        body:
          'Once knowledge has structure and provenance, an agent can perform bounded tasks: clarify requirements, retrieve evidence, compare document intent with code reality, analyze impact, draft a PRD, and ask people to resolve uncertainty.',
      },
      {
        title: 'Product Boundary',
        items: [
          'RAG finds evidence; it does not make the final business decision.',
          'Agents plan, compare, and draft within explicit workflows and shared state.',
          'Code is implementation evidence, not automatically the correct business definition.',
          'Conflicts, missing evidence, and consequential changes return to human review.',
        ],
      },
      {
        title: 'Prototype Status',
        body:
          'Synapse is a personal AI Product Lab rather than a deployed enterprise platform. It demonstrates how I discover a recurring organizational problem, define an architecture, build reusable skills and workflows, and test the boundaries of an agent-based solution.',
      },
    ],
    image: synapseCover,
    images: [synapseCoverPage, synapseLogin, synapseAssistant, synapseDashboard, synapseWorkflow],
    accent: '#d72418',
    kind: 'gallery',
  },
  {
    id: 'bike-rental',
    index: '041',
    title: 'C2C Bike Rental',
    label: 'UX/UI Design / Product MVP',
    date: '2025.09',
    role: 'Product & UX/UI Design',
    type: 'Two-sided marketplace MVP',
    description:
      'A zero-to-one C2C bike rental concept designed around the trust, payment, handoff, return, and dispute needs of both owners and renters.',
    contribution: [
      'Mapped separate owner and renter journeys across the complete transaction lifecycle.',
      'Defined the MVP boundary, shared capabilities, order state machine, deposit holding period, and dispute flow.',
      'Translated the product logic into a high-fidelity mobile prototype and WeChat mini-program experiment.',
    ],
    cardHighlights: [
      'Defined a two-sided transaction from vehicle publishing to payment, handoff, return, settlement, and appeal.',
      'Used user journeys to expose trust, vehicle-condition evidence, and fund-transparency requirements.',
      'Reduced the P0 scope to the smallest complete transaction loop.',
    ],
    problem:
      'Peer-to-peer bike rental requires more than a listing page: both sides need confidence in identity, vehicle condition, payment custody, handoff, return, and dispute handling.',
    outcome:
      'A scoped P0 product concept with two-sided user journeys, a complete order lifecycle, high-fidelity interface direction, and a mini-program prototype experiment.',
    skills: [
      'MVP definition',
      'Two-sided marketplace design',
      'User journey mapping',
      'State-machine design',
      'High-fidelity prototyping',
    ],
    detailSections: [
      {
        title: 'MVP Decision',
        body:
          'The P0 scope prioritizes one complete transaction loop: account and rule confirmation, vehicle discovery, owner approval, payment and deposit custody, handoff, return, settlement, and appeal. Recommendation algorithms, advanced credit scoring, and analytics remain outside the first version.',
      },
      {
        title: 'Two-Sided Journey',
        items: [
          'Renter: understand rules, find a bike, choose time and place, request rental, pay, collect, return, and track deposit release.',
          'Owner: publish a vehicle, review a request, verify secured funds, coordinate handoff, inspect the return, receive payment, or initiate an appeal.',
          'Shared trust layer: identity verification, platform messaging, vehicle-condition evidence, traceable funds, and visible order status.',
        ],
      },
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

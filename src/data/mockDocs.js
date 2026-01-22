const mockDocs = [
  {
    repoId: 142, // Matches "cloud-infrastructure"
    pages: [
      {
        title: "Repository Overview",
        type: "folder",
        children: [
          {
            slug: "getting-started",
            title: "Getting Started",
            type: "page",
            generatedAt: "2025-11-11",
            content: {
              description:
                "This guide will help you get started with cloud-infrastructure. Follow these steps to integrate the library into your project.",
              prerequisites: [
                "Node.js 16+",
                "npm or yarn",
                "TypeScript/React knowledge",
              ],
              installation: {
                npm: "npm install cloud-infrastructure",
                yarn: "yarn add cloud-infrastructure",
              },
            },
          },
          { slug: "installation", title: "Installation", type: "page" },
        ],
      },
      {
        title: "API Reference",
        type: "folder",
        children: [
          {
            title: "Components",
            type: "folder",
            children: [
              {
                slug: "button-component",
                title: "Button Component",
                type: "page",
              },
              {
                slug: "input-component",
                title: "Input Component",
                type: "page",
              },
              { slug: "card-component", title: "Card Component", type: "page" },
            ],
          },
        ],
      },
      { title: "Guides", type: "folder", children: [] },
    ],
  },
  {
    repoId: 200, // EmergencyApp
    pages: [
      {
        title: "Core Functionality",
        type: "folder",
        children: [
          {
            title: "AI First Aid",
            type: "folder",
            children: [
              { slug: "ai-overview", title: "How it Works", type: "page" },
              {
                slug: "medical-datasets",
                title: "Medical Datasets",
                type: "page",
              },
              {
                title: "Algorithms",
                type: "folder",
                children: [
                  {
                    slug: "nlp-triage",
                    title: "NLP Triage Logic",
                    type: "page",
                  },
                  {
                    slug: "vision-analysis",
                    title: "Wound Image Analysis",
                    type: "page",
                  },
                ],
              },
            ],
          },
          {
            title: "Communication",
            type: "folder",
            children: [
              {
                slug: "real-time-alerts",
                title: "Push Notifications",
                type: "page",
              },
              { slug: "sms-integration", title: "SMS Gateway", type: "page" },
            ],
          },
        ],
      },
      {
        title: "Integrations",
        type: "folder",
        children: [
          { slug: "firebase-setup", title: "Firebase Config", type: "page" },
          { slug: "google-maps-api", title: "Maps & Location", type: "page" },
        ],
      },
      {
        slug: "security-protocol",
        title: "Security & Privacy",
        type: "page",
      },
    ],
  },
  {
    repoId: 3, // Matches "DiabetesDietAI"
    pages: [
      { slug: "overview", title: "Project Overview", type: "page" },
      { slug: "ai-model", title: "AI Recommendation Engine", type: "page" },
    ],
  },
  {
    repoId: 4, // Matches "ProgrammingClubProjects"
    pages: [
      { slug: "about", title: "About This Repository", type: "page" },
      { slug: "structure", title: "Project Structure", type: "page" },
    ],
  },
];

export default mockDocs;

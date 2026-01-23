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
            title: "AI First Aid Engine",
            type: "folder",
            children: [
              {
                slug: "ai-overview",
                title: "How it Works",
                type: "page",
                content: {
                  description:
                    "The AI Engine uses a multi-layer neural network to classify emergency severity in real-time.",
                  features: [
                    "Real-time triage",
                    "Voice-to-text analysis",
                    "Visual wound detection",
                  ],
                },
              },
              {
                title: "Medical Data Library",
                type: "folder",
                children: [
                  {
                    title: "Symptom Databases",
                    type: "folder",
                    children: [
                      {
                        slug: "respiratory-data",
                        title: "Respiratory Distress",
                        type: "page",
                        content: {
                          description:
                            "Dataset containing audio signatures of various breathing difficulties.",
                        },
                      },
                      {
                        slug: "cardiac-patterns",
                        title: "Cardiac Arrhythmia",
                        type: "page",
                        content: {
                          description:
                            "ECG pattern recognition data for emergency heart conditions.",
                        },
                      },
                    ],
                  },
                  {
                    slug: "medical-datasets",
                    title: "General First Aid Data",
                    type: "page",
                    generatedAt: "2026-01-22",
                    content: {
                      description:
                        "Standardized first aid procedures based on Red Cross guidelines.",
                      prerequisites: ["Node.js 18+", "Firebase Admin SDK"],
                      installation: {
                        npm: "npm install @emergency/data-sdk",
                        yarn: "yarn add @emergency/data-sdk",
                      },
                    },
                  },
                ],
              },
              {
                title: "Processing Algorithms",
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
            title: "Communication Systems",
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
        title: "Integrations & Setup",
        type: "folder",
        children: [
          {
            slug: "firebase-setup",
            title: "Firebase Configuration",
            type: "page",
            content: {
              description:
                "Step-by-step guide to connecting your EmergencyApp to Google Firebase.",
              usage: `
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "emergency-app.firebaseapp.com",
  projectId: "emergency-app"
};
            `,
            },
          },
          { slug: "google-maps-api", title: "Maps & Location", type: "page" },
        ],
      },
      {
        slug: "security-protocol",
        title: "Security & Privacy",
        type: "page",
        content: {
          description:
            "All medical data is encrypted using AES-256 standards before transmission.",
        },
      },
    ],
  },
  {
    repoId: 3, // Matches "DiabetesDietAI"
    pages: [
      {
        slug: "overview",
        title: "Project Overview",
        type: "page",
        generatedAt: "2025-6-11",
        content: {
          description: "This this is dummy data with no sense",
          prerequisites: [
            "Node.js 16+",
            "npm or yarn",
            "TypeScript/React knowledge",
          ],
          installation: {
            npm: "npm install DiabetesDietAI",
            yarn: "yarn add DiabetesDietAI",
          },
        },
      },
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

const mockIssues = [
  // Repo 142
  {
    issueId: 42,
    issueTitle: "Fix login bug in authentication module",
    issueStatus: "Open",
    issueDescription:
      "Users are unable to login when passwords contain special characters. Need to sanitize input and add unit tests.",
    labels: [
      "All Issues",
      "Good First Issue",
      "Help Wanted",
      "Bug",
      "Enhancement",
    ],
    githubIssueLink: "https://github.com/octocat/HelloWorld/issues/42",
    repositoryId: 142,
    assignedUserId: null,
    creationDate: "2025-10-15",
    lastUpdatedDate: "2025-10-18",
    priority: "High",
  },
  {
    issueId: 43,
    issueTitle: "Improve dashboard responsiveness",
    issueStatus: "Open",
    issueDescription:
      "Dashboard layout breaks on smaller screens. Adjust CSS and Tailwind classes to ensure proper display across devices.",
    labels: ["Easy", "Enhancement", "Good First Issue"],
    githubIssueLink: "https://github.com/octocat/HelloWorld/issues/43",
    repositoryId: 142,
    assignedUserId: null,
    creationDate: "2025-10-12",
    lastUpdatedDate: "2025-10-17",
    priority: "Medium",
  },

  // Repo 200
  {
    issueId: 44,
    issueTitle: "Update README documentation",
    issueStatus: "Open",
    issueDescription:
      "The README is outdated. Add new setup instructions, screenshots, and API usage examples for the emergency app.",
    labels: ["Easy", "Enhancement", "Documentation"],
    githubIssueLink: "https://github.com/octocat/HelloWorld/issues/44",
    repositoryId: 200,
    assignedUserId:null,
    creationDate: "2025-10-05",
    lastUpdatedDate: "2025-10-10",
    priority: "Low",
  },
  {
    issueId: 45,
    issueTitle: "Fix API error handling",
    issueStatus: "Open",
    issueDescription:
      "Some errors from the emergency API are not logged or displayed. Add proper error messages and retry logic.",
    labels: ["Bug", "High Priority", "Enhancement"],
    githubIssueLink: "https://github.com/octocat/HelloWorld/issues/45",
    repositoryId: 200,
    assignedUserId: 126,
    creationDate: "2025-10-16",
    lastUpdatedDate: "2025-10-18",
    priority: "High",
  },

  // Repo 3 — DiabetesDietAI
  {
    issueId: 46,
    issueTitle: "Improve AI meal suggestions",
    issueStatus: "Open",
    issueDescription:
      "AI sometimes suggests high-sugar meals. Adjust algorithm to better consider recent blood sugar readings.",
    labels: ["Enhancement", "AI", "Health"],
    githubIssueLink: "https://github.com/mashael/DiabetesDietAI/issues/46",
    repositoryId: 3,
    assignedUserId: null,
    creationDate: "2026-01-08",
    lastUpdatedDate: "2026-01-09",
    priority: "High",
  },
  {
    issueId: 47,
    issueTitle: "Add regional Saudi foods",
    issueStatus: "Open",
    issueDescription:
      "Include local Saudi cuisine options in the meal database to make diet suggestions culturally relevant.",
    labels: ["Feature", "Database"],
    githubIssueLink: "https://github.com/mashael/DiabetesDietAI/issues/47",
    repositoryId: 3,
    assignedUserId: null,
    creationDate: "2026-01-09",
    lastUpdatedDate: "2026-01-10",
    priority: "Medium",
  },
  {
    issueId: 48,
    issueTitle: "Fix glucose reading bug",
    issueStatus: "Claimed",
    issueDescription:
      "Some glucose readings are not updating in real-time due to API latency. Add proper error handling and retries.",
    labels: ["Bug", "Critical"],
    githubIssueLink: "https://github.com/mashael/DiabetesDietAI/issues/48",
    repositoryId: 3,
    assignedUserId: 129,
    creationDate: "2026-01-10",
    lastUpdatedDate: "2026-01-11",
    priority: "High",
  },

  // Repo 4 — ProgrammingClubProjects
  {
    issueId: 49,
    issueTitle: "Add project showcase page",
    issueStatus: "Open",
    issueDescription:
      "Create a dynamic page to showcase all club projects with filters for tech stack and course.",
    labels: ["Feature", "UI"],
    githubIssueLink: "https://github.com/programmingclub/Projects/issues/49",
    repositoryId: 4,
    assignedUserId: null,
    creationDate: "2026-01-07",
    lastUpdatedDate: "2026-01-08",
    priority: "Medium",
  },
  {
    issueId: 50,
    issueTitle: "Fix responsive layout bug",
    issueStatus: "Open",
    issueDescription:
      "Some project cards break layout on mobile screens. Update Tailwind classes for proper responsiveness.",
    labels: ["Bug", "UI"],
    githubIssueLink: "https://github.com/programmingclub/Projects/issues/50",
    repositoryId: 4,
    assignedUserId: null,
    creationDate: "2026-01-08",
    lastUpdatedDate: "2026-01-09",
    priority: "High",
  },
  {
    issueId: 51,
    issueTitle: "Update README with instructions",
    issueStatus: "Claimed",
    issueDescription:
      "Add setup instructions and screenshots for each project in the repo README.",
    labels: ["Documentation"],
    githubIssueLink: "https://github.com/programmingclub/Projects/issues/51",
    repositoryId: 4,
    assignedUserId: 132,
    creationDate: "2026-01-09",
    lastUpdatedDate: "2026-01-10",
    priority: "Low",
  },
];

export default mockIssues;

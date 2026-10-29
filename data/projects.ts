import type { Project, UpcomingProject } from "@/types/content";

/**
 * Featured projects, in display order.
 * Only facts stated in the CV are used. Leave `repoUrl` undefined until a public repo exists.
 */
export const projects: Project[] = [
  {
    slug: "smart-aiub-service-issues",
    title: "Smart AIUB Service Issues",
    status: "completed",
    track: "dotnet",
    summary:
      "Role-based campus issue-tracking web app where students and faculty report problems, admins assign them, and staff resolve them.",
    tech: ["C#", "ASP.NET Core MVC (.NET 10)", "EF Core", "SQL Server", "ASP.NET Core Identity", "xUnit"],
    repoUrl: "https://github.com/ZubayeerAlam/Smart-AIUB-Service-Issues-.NET-Web-APP",
    hasDetailPage: true,
    overview:
      "A web app for reporting and tracking campus service issues. Students and faculty report problems, admins review and assign them to support teams, and staff resolve them. Every issue keeps a full status history.",
    sections: [
      {
        heading: "Database design",
        items: [
          "Code First relational model with 12 entities, Fluent API configuration and migrations.",
          "Unique indexes, restricted-delete foreign keys and enums stored as text.",
          "A RowVersion concurrency token to handle simultaneous edits.",
        ],
      },
      {
        heading: "Business logic",
        items: [
          "Interface-based service layer wired up with dependency injection.",
          "A workflow service that validates every status change and records a history entry.",
          "Paginated, filtered lists and date-range reports built with LINQ grouping queries.",
        ],
      },
      {
        heading: "Security",
        items: [
          "ASP.NET Core Identity with 4 roles and password and lockout policies.",
          "Resource-based authorization that blocks access to other users' records.",
          "Global anti-forgery validation.",
        ],
      },
      {
        heading: "Testing",
        items: ["xUnit tests on SQLite in-memory covering the services, workflow and authorization."],
      },
    ],
  },
  {
    slug: "task-manager-firebase",
    title: "Task Manager (Firebase)",
    status: "completed",
    track: "flutter",
    summary:
      "Flutter task manager with user authentication, cloud data storage in Firestore, dark mode and pull-to-refresh.",
    tech: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore"],
    // TODO: add repoUrl when the GitHub link is available.
    hasDetailPage: true,
    overview:
      "A Flutter task manager backed by Firebase. Users sign in, and their tasks are stored in Cloud Firestore.",
    sections: [
      {
        heading: "Features",
        items: [
          "User authentication with Firebase Auth.",
          "Task data stored in Cloud Firestore.",
          "Dark mode and pull-to-refresh.",
        ],
      },
      {
        heading: "Earlier version",
        items: [
          "Built first against a REST API, using Provider for state and SharedPreferences for local storage.",
          "Fixed state, response-parsing and storage bugs in that version before moving to Firebase.",
        ],
      },
    ],
  },
  {
    slug: "nexora",
    title: "Nexora",
    status: "in-development",
    track: "flutter",
    summary:
      "Location-based social app for discovering nearby people, with friend requests, chat, stories and an Emergency Alert safety feature.",
    tech: ["Flutter", "Firebase", "Google Maps", "Riverpod"],
    // TODO: add repoUrl when the GitHub link is available.
    hasDetailPage: true,
    overview:
      "A nearby social and community app, currently in development. It helps people discover others nearby and stay connected, with safety and privacy built in.",
    sections: [
      {
        heading: "Planned features",
        items: [
          "Discover nearby people on a map.",
          "Friend requests, chat and stories.",
          "Emergency Alert safety feature.",
          "Privacy controls such as Invisible mode.",
        ],
      },
      {
        heading: "Architecture",
        items: [
          "Clean Architecture with MVVM and feature-based modules.",
          "Riverpod for state management.",
          "Firestore security rules to protect user data.",
        ],
      },
    ],
  },
  {
    slug: "food-menu",
    title: "Food Menu",
    status: "completed",
    track: "dotnet",
    summary:
      "Menu web app listing dishes with prices, a details page for each dish's ingredients, search by name and price sorting.",
    tech: ["C#", "ASP.NET Core MVC", "EF Core", "SQL Server", "Razor", "Bootstrap"],
    repoUrl: "https://github.com/ZubayeerAlam/Food-Menu-.NET-Web-App",
    hasDetailPage: true,
    overview:
      "A menu web app that lists dishes with their prices. Each dish has a details page showing its ingredients.",
    sections: [
      {
        heading: "Data model",
        items: [
          "Many-to-many Dish–Ingredient relationship through a join entity with a composite key.",
          "Initial EF Core migration, with sample data seeded using HasData.",
        ],
      },
      {
        heading: "Features",
        items: [
          "Search by dish name and sort by price, built by composing asynchronous LINQ queries.",
          "Related ingredients loaded with Include / ThenInclude.",
        ],
      },
    ],
  },
  {
    slug: "gas-station-finder",
    title: "Gas Station Finder",
    status: "completed",
    track: "flutter",
    summary:
      "Map-based app for finding nearby petrol stations, integrating Google Maps and the Places API.",
    tech: ["Flutter", "Google Maps", "Google Places API"],
    // TODO: add repoUrl when the GitHub link is available.
    hasDetailPage: false,
  },
  {
    slug: "habit-tracker-and-crud-apps",
    title: "Habit Tracker & CRUD Apps",
    status: "completed",
    track: "flutter",
    summary:
      "A habit tracker with reusable card widgets and light/dark themes, plus product CRUD apps using sqflite and a REST API.",
    tech: ["Flutter", "sqflite", "REST API", "HTTP", "JSON"],
    // TODO: add repoUrl when the GitHub link is available.
    hasDetailPage: false,
  },
  {
    slug: "csharp-aiub-academic-modules",
    title: "C# AIUB Academic Modules",
    status: "coursework",
    track: "dotnet",
    summary:
      "Lab work for Advanced Programming (.NET): MVC routing, EF Core Code First, cookie authentication and a Web API with DTOs.",
    tech: ["C#", "ASP.NET Core MVC", "EF Core"],
    repoUrl: "https://github.com/ZubayeerAlam/C-AIUB-All-Module",
    hasDetailPage: false,
  },
];

/** Apps that are in progress; the CV gives no details yet, so only names are shown. */
export const upcomingProjects: UpcomingProject[] = [
  { title: "Cal AI App", tech: ["Flutter", "Dart"] },
  { title: "Demo E-commerce App", tech: ["Flutter", "Dart"] },
  { title: "Trip Planner App", tech: ["Flutter", "Dart"] },
  { title: "Dentist App", tech: ["Flutter", "Dart"] },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getDetailProjects(): Project[] {
  return projects.filter((project) => project.hasDetailPage);
}

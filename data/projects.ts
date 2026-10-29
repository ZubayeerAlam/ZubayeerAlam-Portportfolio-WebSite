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
    slug: "task-manager",
    title: "Task Manager App",
    status: "completed",
    track: "flutter",
    summary:
      "Flutter task manager built first on a REST API with Provider, then rebuilt with Firebase Auth and Cloud Firestore.",
    tech: ["Flutter", "Dart", "REST API", "http", "Provider", "SharedPreferences", "Firebase Auth", "Cloud Firestore"],
    // Links to the REST API version (Ostad module 14). The Firebase version has no public repo yet.
    repoUrl: "https://github.com/ZubayeerAlam/Ostad-All-Module/tree/main/Module%2014%20with%20provider",
    hasDetailPage: true,
    overview:
      "A Flutter task manager built in two versions: first against a REST API during the Ostad course, then with Firebase for authentication and cloud data.",
    sections: [
      {
        heading: "REST API version (source on GitHub)",
        items: [
          "Consumed a REST API for sign-up, login, task lists, creating tasks, updating status and deleting, using the http package, JSON parsing and token headers.",
          "Wrote a reusable API caller with status-code handling.",
          "Stored the login token in SharedPreferences and managed sign-in state with Provider.",
          "Fixed state, response-parsing and storage bugs.",
        ],
      },
      {
        heading: "Firebase version",
        items: [
          "User authentication with Firebase Auth.",
          "Task data stored in Cloud Firestore.",
          "Dark mode and pull-to-refresh.",
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
    slug: "cal-ai",
    title: "Cal AI",
    // Earlier CVs list this app as in progress; switch to "completed" once it is finished.
    status: "in-development",
    track: "flutter",
    summary:
      "Calorie tracker with onboarding, calorie and macro goals, food logging, step counting and a dashboard.",
    tech: ["Flutter", "Dart", "Provider", "go_router", "shared_preferences", "Widget tests"],
    repoUrl: "https://github.com/ZubayeerAlam/Calorie-ai-app",
    hasDetailPage: true,
    overview:
      "A calorie-tracking app that guides users through onboarding, sets calorie and macro goals, and tracks food and steps on a dashboard.",
    sections: [
      {
        heading: "Features",
        items: [
          "Onboarding flow and calorie and macro goals.",
          "Food logging and step counting.",
          "Dashboard summarising daily progress.",
        ],
      },
      {
        heading: "Implementation",
        items: [
          "Repository layer over shared_preferences for local data.",
          "Navigation with go_router and state management with Provider.",
          "Camera permission handling.",
          "Widget tests.",
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
      "Map app that finds nearby petrol stations with the Google Places API and draws driving routes with OSRM.",
    tech: ["Flutter", "Google Maps", "Google Places API", "OSRM", "Provider"],
    repoUrl: "https://github.com/ZubayeerAlam/Ostad-All-Module/tree/main/module%2018",
    hasDetailPage: true,
    overview:
      "A map-based app built during the Ostad course (module 18) that shows nearby petrol stations and how to drive to them.",
    sections: [
      {
        heading: "Features",
        items: [
          "Reads the device location, with permission handling.",
          "Calls the Google Places REST API to find nearby gas stations.",
          "Draws driving routes using the OSRM REST API.",
        ],
      },
      {
        heading: "Architecture",
        items: [
          "Networking separated into an API service and repositories.",
          "A Provider view model handles loading state and failed requests.",
        ],
      },
    ],
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

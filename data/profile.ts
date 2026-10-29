import type { Profile } from "@/types/content";

export const profile: Profile = {
  name: "Zubayeer Alam",
  firstName: "Zubayeer",
  headline: "Flutter & .NET Developer",
  location: "Dhaka, Bangladesh",
  email: "zubayeer5000@gmail.com",
  intro:
    "I build cross-platform mobile apps with Flutter and web backends with C# and ASP.NET Core. Computer Science and Engineering student at AIUB.",
  about: [
    "I'm a Computer Science and Engineering student at American International University-Bangladesh (AIUB), graduating in September 2027. I completed the Ostad Flutter App Development course (Batch 17).",
    "On mobile, I build Flutter apps with Firebase, REST APIs and Google Maps, using Riverpod or Provider for state and Clean Architecture to keep features separate. On the backend, I work with C#, ASP.NET Core MVC, Entity Framework Core and SQL Server, most recently on a role-based issue-tracking web app with authorization and xUnit tests.",
    "I document what I learn publicly through a 100 Days of Code series on LinkedIn.",
  ],
  lookingFor:
    "Open to Flutter or .NET backend internships, junior developer roles and remote opportunities.",
  languages: ["English", "Bangla"],
  photo: {
    src: "/images/profile.jpg",
    alt: "Portrait of Zubayeer Alam",
    width: 360,
    height: 360,
  },
  socials: [
    { platform: "github", label: "GitHub", href: "https://github.com/ZubayeerAlam" },
    {
      platform: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/zubayeer-alam-8270072b4/",
    },
    { platform: "facebook", label: "Facebook", href: "https://www.facebook.com/Zubu.2005" },
  ],
};

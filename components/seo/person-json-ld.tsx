import { education } from "@/data/education";
import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/site-config";

/** schema.org Person data for search engines. Only verified profile facts are included. */
export function PersonJsonLd() {
  const [degree] = education;

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${profile.photo.src}`,
    jobTitle: profile.headline,
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
    ...(degree && {
      affiliation: { "@type": "CollegeOrUniversity", name: degree.institution },
    }),
    knowsAbout: ["Flutter", "Dart", "C#", ".NET", "ASP.NET Core", "Entity Framework Core", "SQL Server", "Firebase"],
    knowsLanguage: profile.languages,
    sameAs: profile.socials.map((social) => social.href),
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is escaped so it cannot close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

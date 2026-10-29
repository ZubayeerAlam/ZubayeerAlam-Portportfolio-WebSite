import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social share image, generated at build time. */
export default async function OpengraphImage() {
  const root = process.cwd();
  const [photo, medium, bold] = await Promise.all([
    readFile(join(root, "public", profile.photo.src)),
    readFile(join(root, "assets/fonts/Manrope-Medium.ttf")),
    readFile(join(root, "assets/fonts/Manrope-Bold.ttf")),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#1a1c21",
          color: "#f3f4f6",
          fontFamily: "Manrope",
          fontWeight: 500,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 680 }}>
          <div style={{ display: "flex", fontSize: 32, fontWeight: 700, color: "#3b82f6" }}>
            {"</>"}
          </div>
          <div style={{ display: "flex", width: 80, height: 5, backgroundColor: "#f3f4f6", marginTop: 40 }} />
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, marginTop: 32, lineHeight: 1.05 }}>
            {profile.name}
          </div>
          <div style={{ display: "flex", fontSize: 38, color: "#a1a7b3", marginTop: 20 }}>
            {profile.headline}
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#a1a7b3", marginTop: 36 }}>
            {profile.location}
          </div>
        </div>
        <img
          src={photoSrc}
          alt=""
          width={320}
          height={320}
          style={{ borderRadius: 9999, border: "10px solid #2b2f38" }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Manrope", data: medium, weight: 500, style: "normal" },
        { name: "Manrope", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}

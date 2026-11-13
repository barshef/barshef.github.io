import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

/* The picture shown when the link is pasted into LinkedIn, email or a chat. Drawn once, at build time, and published as /og.png. */
export const dynamic = "force-static";

const size = { width: 1200, height: 630 };


export async function GET() {
  const photo = await readFile(path.join(process.cwd(), "public", "portrait.jpg"));
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: 72, background: "#0d1b24", color: "#eaf1f3" }}>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 700 }}>
          <div style={{ fontSize: 30, color: "#5fcdb9" }}>{profile.roles.join("  |  ")}</div>
          <div style={{ fontSize: 76, fontWeight: 700, marginTop: 18, lineHeight: 1.05 }}>{profile.name}</div>
          <div style={{ fontSize: 30, color: "#a9b8c0", marginTop: 28, lineHeight: 1.35 }}>{profile.headline}</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element -- drawn into the image by next/og, not served to a browser */}
        <img src={src} alt="" width={330} height={412} style={{ borderRadius: 20, objectFit: "cover", objectPosition: "50% 12%" }} />
      </div>
    ),
    size,
  );
}

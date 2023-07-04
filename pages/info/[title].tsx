import { useRouter } from "next/router";
import { Skills } from "@/components/skills/skills";
import { Education } from "@/components/education/education";
import { Certifications } from "@/components/certifications/certifications";
import { Experience } from "@/components/experience/experience";
export default function Page() {
  const router = useRouter();
  if (router.query.title == "skills") return <Skills></Skills>;
  if (router.query.title == "education") return <Education></Education>;
  if (router.query.title == "certifications")
    return <Certifications></Certifications>;
  if (router.query.title == "experience") return <Experience></Experience>;
  return <p></p>;
}

import {
  ExperienceRoutePage,
  getExperiencePageMetadata,
  type ExperienceRoutePageProps,
} from "../experiencePage";

export function generateMetadata({ params }: ExperienceRoutePageProps) {
  return getExperiencePageMetadata({ params, slug: "rooftop-terrace" });
}

export default function RooftopTerracePage({
  params,
}: ExperienceRoutePageProps) {
  return <ExperienceRoutePage params={params} slug="rooftop-terrace" />;
}

import {
  ExperienceRoutePage,
  getExperiencePageMetadata,
  type ExperienceRoutePageProps,
} from "../experiencePage";

export function generateMetadata({ params }: ExperienceRoutePageProps) {
  return getExperiencePageMetadata({ params, slug: "marina" });
}

export default function MarinaPage({ params }: ExperienceRoutePageProps) {
  return <ExperienceRoutePage params={params} slug="marina" />;
}

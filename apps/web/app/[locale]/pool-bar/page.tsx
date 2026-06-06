import {
  ExperienceRoutePage,
  getExperiencePageMetadata,
  type ExperienceRoutePageProps,
} from "../experiencePage";

export function generateMetadata({ params }: ExperienceRoutePageProps) {
  return getExperiencePageMetadata({ params, slug: "pool-bar" });
}

export default function PoolBarPage({ params }: ExperienceRoutePageProps) {
  return <ExperienceRoutePage params={params} slug="pool-bar" />;
}

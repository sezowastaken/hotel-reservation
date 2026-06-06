import {
  ExperienceRoutePage,
  getExperiencePageMetadata,
  type ExperienceRoutePageProps,
} from "../experiencePage";

export function generateMetadata({ params }: ExperienceRoutePageProps) {
  return getExperiencePageMetadata({ params, slug: "restaurant" });
}

export default function RestaurantPage({ params }: ExperienceRoutePageProps) {
  return <ExperienceRoutePage params={params} slug="restaurant" />;
}

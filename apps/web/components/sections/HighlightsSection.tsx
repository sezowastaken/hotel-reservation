import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { HighlightItem } from "@/lib/types/content";

type HighlightsSectionProps = {
  title: string;
  description?: string;
  highlights: HighlightItem[];
};

export function HighlightsSection({
  title,
  description,
  highlights,
}: HighlightsSectionProps) {
  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <Container>
        <SectionHeader
          align="center"
          description={description}
          title={title}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {highlights.map((highlight) => (
            <Card key={highlight.id} className="h-full">
              <CardHeader>
                <h3 className="text-xl font-semibold text-stone-950">
                  {highlight.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-stone-700">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

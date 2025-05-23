import { Card, CardContent } from "@/components/ui/card";

export const FeatureCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col space-y-2">
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

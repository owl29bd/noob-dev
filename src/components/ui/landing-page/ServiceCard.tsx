import React from "react";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md">
      <div className="rounded-full bg-primary p-3">
        <Icon className="h-6 w-6 text-primary-foreground" />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground text-center">{description}</p>
    </div>
  );
}

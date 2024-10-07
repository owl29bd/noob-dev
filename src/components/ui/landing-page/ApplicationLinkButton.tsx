import Link from "next/link";
import React from "react";

interface ApplicationLinkButtonProps {
  title: string;
  icon: React.ElementType;
  secondIcon?: React.ElementType;
  link: string;
}

export default function ApplicationLinkButton({
  title,
  icon: Icon,
  secondIcon: SecondIcon,
  link,
}: ApplicationLinkButtonProps) {
  return (
    <Link href={link}>
      <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background shadow-sm transition-all hover:scale-105 hover:shadow-md border-2 border-lime-900 max-w-48 p-2">
        <div className="rounded-full bg-primary">
          <div className="flex flex-row-reverse items-center">
            <Icon className="h-6 w-6 text-primary-foreground" />
            {SecondIcon && (
              <SecondIcon className="h-6 w-6 text-primary-foreground" />
            )}
          </div>
          <div className="flex flex-row-reverse items-center">
            {SecondIcon && (
              <SecondIcon className="h-6 w-6 text-primary-foreground" />
            )}
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-green-950">{title}</h3>
      </div>
    </Link>
  );
}

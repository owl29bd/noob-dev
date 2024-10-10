import React from "react";

interface FormDetailsHeaderProps {
  title: string;
  subtitle?: string;
}

export default function FormDetailsHeader({
  title,
  subtitle,
}: FormDetailsHeaderProps) {
  return (
    <div className="text-center">
      <h2 className="mt-6 text-3xl font-bold text-gray-900">{title}</h2>
      {subtitle && <p className="mt-2 text-sm text-gray-600">{subtitle}</p>}
    </div>
  );
}

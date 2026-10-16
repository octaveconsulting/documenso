import React from "react";
import { Section, Text } from "../components";

export type TemplateFooterProps = {
  isDocument?: boolean;
  reportUrl?: string;
};

export const TemplateFooter = ({ isDocument = true, reportUrl }: TemplateFooterProps) => {
  return (
    <Section className="my-8 text-center">
      <Text className="text-sm text-muted-foreground">
        OCTAVE Consulting - Tous droits réservés 2026
      </Text>
    </Section>
  );
};

export default TemplateFooter;

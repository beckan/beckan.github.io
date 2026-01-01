import { Flex, Heading } from "@radix-ui/themes";
import type { ReactNode } from "react";

function SectionRoot({ children }: { children: ReactNode }) {
  return (
    <Flex direction="column" gap="1">
      {children}
    </Flex>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <Heading as="h2" size={{ initial: "5", sm: "6" }} weight="light" mb={{ initial: "3", sm: "4" }}>
      {children}
    </Heading>
  );
}

function SectionContent({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export const Section = {
  Root: SectionRoot,
  Heading: SectionHeading,
  Content: SectionContent,
} as const;

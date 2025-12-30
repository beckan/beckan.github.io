import { Flex, Text } from "@radix-ui/themes";
import { ReactNode } from "react";
import "./work-experience.component.css";

interface WorkExperienceRootProps {
  children: ReactNode;
}
function WorkExperienceRoot({ children }: WorkExperienceRootProps) {
  return (
    <Flex
      gap={{ initial: "1", sm: "5" }}
      direction={{ initial: "column", sm: "row" }}
    >
      {children}
    </Flex>
  );
}

interface WorkExperiencePeriodProps {
  from: string;
  to: string;
}
function WorkExperiencePeriod({ from, to }: WorkExperiencePeriodProps) {
  return (
    <Flex width="120px" flexShrink="0">
      <Text size={{ initial: "2", sm: "3" }}>
        {from} - {to}
      </Text>
    </Flex>
  );
}

interface WorkExperienceContentProps {
  children: ReactNode;
}
function WorkExperienceContent({ children }: WorkExperienceContentProps) {
  return (
    <Flex direction="column" gap="1">
      {children}
    </Flex>
  );
}

interface WorkExperienceCompanyProps {
  href?: string;
  children: ReactNode;
}
function WorkExperienceCompany({ href, children }: WorkExperienceCompanyProps) {
  return href ? (
    <a
      href={href}
      className="work-experience-company work-experience-company--is-link"
    >
      {children}
    </a>
  ) : (
    <Text className="work-experience-company">{children}</Text>
  );
}

interface WorkExperienceDescriptionProps {
  children: ReactNode;
}
function WorkExperienceDescription({
  children,
}: WorkExperienceDescriptionProps) {
  return (
    <Text size="2" color="gray">
      {children}
    </Text>
  );
}

interface WorkExperienceTagsProps {
  tags: string[];
}
function WorkExperienceTags({ tags }: WorkExperienceTagsProps) {
  return (
    <Flex gap="1" wrap="wrap" mt="1">
      {tags.map((tag, i) => (
        <Text size="1" color="gray" key={tag} className="work-experience-tag">
          {tag}
          {i < tags.length - 1 ? " • " : ""}
        </Text>
      ))}
    </Flex>
  );
}

export const WorkExperience = {
  Root: WorkExperienceRoot,
  Period: WorkExperiencePeriod,
  Content: WorkExperienceContent,
  Company: WorkExperienceCompany,
  Description: WorkExperienceDescription,
  Tags: WorkExperienceTags,
} as const;

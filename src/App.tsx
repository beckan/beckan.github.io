import {
  Avatar,
  Container,
  Flex,
  Heading,
  Theme,
  Text,
} from "@radix-ui/themes";
import { Section } from "./components/section.component";
import { WorkExperience } from "./components/work-experience.component";

const WORK_EXPERIENCES = [
  {
    period: { from: "2021", to: "present" },
    company: "Visiba Care Sverige",
    role: "Frontend Developer",
    link: "https://www.visibagroup.com/",
    description: "",
    tags: ["React", "Angular", "TypeScript", "CI/CD", "WCAG", "Design System"],
  },
  {
    period: { from: "2019", to: "2021" },
    company: "Göteborgs Stad",
    role: "Frontend Developer",
    link: "https://goteborg.se/",
    description: "",
    tags: ["TypeScript", "React", "CI/CD", "WCAG", "Design System"],
  },
  {
    period: { from: "2017", to: "2019" },
    company: "NetRelations",
    role: "Frontend Developer",
    link: null,
    description: "",
    tags: ["WordPress", "WCAG", "Design System"],
  },
  {
    period: { from: "2016", to: "2017" },
    company: "Grebban Design AB",
    role: "Fullstack Developer",
    link: "https://www.grebban.com/",
    description: "",
    tags: ["NodeJS", "PHP", "WordPress", "E-Commerce"],
  },
  {
    period: { from: "2015", to: "2016" },
    company: "BLLT Communications",
    role: "Web Developer",
    link: null,
    description: "",
    tags: ["PHP", "WordPress", "E-Commerce"],
  },
  {
    period: { from: "2010", to: "2015" },
    company: "It-Solutions 4u Sala AB",
    role: "Fullstack Developer",
    link: null,
    description: "",
    tags: ["PHP", "E-Commerce"],
  },
];

function App() {
  return (
    <Theme appearance="dark" accentColor="yellow" grayColor="gray">
      <Container size="1" p="9">
        <Flex direction="column" gap="6">
          <Flex align="center" gap="5">
            <Avatar
              src="/me.jpg"
              fallback="DB"
              size="7"
              variant="soft"
              radius="full"
            ></Avatar>
            <Flex direction="column" gap="0">
              <Heading as="h1" size="5" weight="medium">
                Daniel Bäckström
              </Heading>
              <Text size="2">Frontend Developer</Text>
            </Flex>
          </Flex>
          <Section.Root>
            <Section.Heading>About me</Section.Heading>
            <Section.Content>
              <Flex direction="column" gap="3">
                <Text as="p" size="3">
                  I'm a 35 years old frontend developer based in Gothenburg,
                  Sweden. My passion is useability, accessibility and inclusive
                  design. Applications and websites is there to be used, not
                  only looked at. The magic happens when beautiful design meets
                  a great user experience that includes as many people as
                  possible.
                </Text>
              </Flex>
            </Section.Content>
          </Section.Root>
          <Section.Root>
            <Section.Heading>Work Experience</Section.Heading>
            <Section.Content>
              <Flex direction="column" gap="6">
                <span></span>
                {WORK_EXPERIENCES.map((workExperience) => (
                  <WorkExperience.Root key={workExperience.company}>
                    <WorkExperience.Period
                      from={workExperience.period.from}
                      to={workExperience.period.to}
                    />
                    <WorkExperience.Content>
                      <WorkExperience.Company
                        href={workExperience.link ?? undefined}
                      >
                        {workExperience.role} – {workExperience.company}
                      </WorkExperience.Company>
                      <WorkExperience.Description>
                        {workExperience.description}
                      </WorkExperience.Description>
                      <WorkExperience.Tags tags={workExperience.tags ?? []} />
                    </WorkExperience.Content>
                  </WorkExperience.Root>
                ))}
              </Flex>
            </Section.Content>
          </Section.Root>
        </Flex>
      </Container>
    </Theme>
  );
}

export default App;

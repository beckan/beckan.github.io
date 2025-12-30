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
    period: { from: "2025", to: "current" },
    company: "Planima AB",
    role: "Senior Frontend Developer",
    link: "https://www.planima.se/",
    description:
      "Leading the frontend strategy and development of a new SaaS platform for property management. Focusing on building a scalable and maintainable architecture using React and TypeScript, while ensuring high performance and accessibility standards. Collaborating closely with UX/UI designers to create an intuitive user experience.",
    tags: [
      "HTML",
      "CSS",
      "TypeScript",
      "JavaScript",
      "Ruby on Rails",
      "Hotwire",
      "Ruby",
      "React",
      "DX",
      "Design System",
    ],
  },
  {
    period: { from: "2021", to: "2025" },
    company: "Visiba Care Sverige",
    role: "Frontend Developer",
    link: "https://www.visibagroup.com/",
    description:
      "Mainly developing SPAs in a lead role, making architectural decisions with a strong focus on accessibility. Built a custom design system in React on top of Radix for consistency and quality user experience. Highly involved in UX/UI discussions and responsible for frontend CI/CD and DX. Applications include video calls, time booking, chat messaging, and AI triage.",
    tags: [
      "HTML",
      "CSS",
      "TypeScript",
      "React",
      "Angular",
      "DX",
      "CI/CD",
      "NX",
      "WCAG",
      "Design System",
    ],
  },
  {
    period: { from: "2019", to: "2021" },
    company: "Göteborgs Stad",
    role: "Frontend Developer",
    link: "https://goteborg.se/",
    description:
      "Focused on developing the city's website and e-services, including a modular design system and WCAG 2.0 accessibility. Working with React for admin systems, NodeJS for internal tools, and handling code packaging, automated testing, and deployment. Also involved in UX for new service concepts.",
    tags: [
      "HTML",
      "CSS",
      "TypeScript",
      "React",
      "DX",
      "CI/CD",
      "WCAG",
      "Design System",
    ],
  },
  {
    period: { from: "2017", to: "2019" },
    company: "NetRelations",
    role: "Frontend Developer",
    link: null,
    description:
      "Development of websites and design systems for mid-sized clients, focusing on modular style guides, optimized code, and WCAG 2.0 accessibility with progressive enhancement.",
    tags: ["HTML", "CSS", "JavaScript", "WordPress", "WCAG", "Design System"],
  },
  {
    period: { from: "2016", to: "2017" },
    company: "Grebban Design AB",
    role: "Fullstack Developer",
    link: "https://www.grebban.com/",
    description:
      "Development of themes for WordPress and WooCommerce, as well as backend development of WordPress plugins, e-commerce platforms, internal web tools, and synchronization applications.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "NodeJS",
      "PHP",
      "WordPress",
      "E-Commerce",
    ],
  },
  {
    period: { from: "2015", to: "2016" },
    company: "BLLT Communications",
    role: "Web Developer",
    link: null,
    description:
      "Development of themes for WordPress and WooCommerce, along with backend development of custom solutions, client communication, and support.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "WordPress", "E-Commerce"],
  },
  {
    period: { from: "2010", to: "2015" },
    company: "It-Solutions Sala AB",
    role: "Fullstack Developer",
    link: null,
    description:
      "Backend development in the LAMP stack and frontend in HTML, CSS, and JavaScript. Focus on time reporting systems, webshops, and simple websites. Also experienced in print and web design, project management, and daily client communication and support.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "E-Commerce"],
  },
];

function App() {
  return (
    <Theme appearance="dark" accentColor="yellow" grayColor="gray">
      <Container size="2" p={{ initial: "4", sm: "9" }}>
        <Flex direction="column" gap="6">
          <Flex align="center" gap={{ initial: "4", sm: "6" }}>
            <Avatar
              src="/me.jpg"
              fallback="DB"
              size={{ initial: "6", sm: "8" }}
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
                  I'm a 35-year-old frontend developer based in Gothenburg,
                  Sweden, with a passion for usability, accessibility, and
                  inclusive design. I believe applications and websites are
                  meant to be used, not only looked at. The magic happens when
                  beautiful design meets a great user experience that welcomes
                  everyone ❤️🌍
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

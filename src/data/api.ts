export type ProjectProfile = {
  projectName: string | null,
  projectDescription: string | null,
  ProjectImage: string | null,
  TechStack: Array<string>,
  DemoLink: string | null,
  CodeLink: string | null
}

export type ExperienceProfile = {
  PlaceName: string | null,
  PlaceLink: string | undefined,
  Role: string | null,
  YearStart: string,
  YearEnd: string | null,
  Responsibilities: Array<string>
}

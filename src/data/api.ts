export type ProjectProfile = {
  projectName: string | null,
  projectDescription: string | null,
  projectImage: string | null,
  techStack: Array<string>,
  demoLink: string | null,
  codeLink: string | null
}

export type ExperienceProfile = {
  PlaceName: string | null,
  PlaceLink: string | undefined,
  Role: string | null,
  YearStart: string,
  YearEnd: string | null,
  Responsibilities: Array<string>
}

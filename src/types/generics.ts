import { InputHTMLAttributes } from "react";
import { Languages, LevelState, colors } from "./props";
import { IChoice } from "./api";

export interface IFlags {
  language: Languages;
  flagUrl: string;
  displayName: string;
}

export interface IReadingSections {
  title: string;
  reading_texts: IReadingTexts[];
  locked_texts: number;
}

export interface IReadingTexts {
  title: string;
  id: string;
  description: string;
}

export interface IUser {
  id: number;
  name: string;
  biography?: string;
  ubication?: string;
  email: string;
  profile: Profile;
  password: string;
  rank: UserRank;
  created_at: string;
}

export interface UserRank {
  user_experience: number;
  rank_id: number;
  rank: Rank;
  user: IUser;
  user_id: number;
}

export interface Rank {
  id: number;
  name: number;
  experience: number;
  distintive: string;
}

export interface Profile {
  id: number;
  color: string;
  animal_name: string;
  languages: SelectedLanguageElement[];
}

export interface IQuestionAndAnswer {
  id: number;
  title: string;
  options: Option[];
  correct_answer: string;
  content_details_id: number;
}

export interface Option {
  title: string;
  status: string;
}

export interface ContentElement {
  id: number;
  marked_as_read: boolean;
  is_completed: boolean;
  user_content_id: number;
  pending_id: number;
  pending_content: PendingContent;
}

export interface PendingContent {
  id: number;
  title: string;
  description: string;
  text?: unknown[];
  stories?: unknown[];
  principal?: string;
  level: string;
  type: string;
  content_id: number;
  content: PendingContentContent;
  question_and_answer: IQuestionAndAnswer[];
}

export interface PendingContentContent {
  id: number;
  title: string;
  type: string;
  level: string;
  details?: PendingContent[];
  language_id: number;
  language: Language;
}

export interface ContentByLevel {
  level: string;
  data: PendingContentContent[];
  userId?: string;
}

export interface Language {
  id: number;
  name: string;
}

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export interface IColorsObject {
  [key: string]: string;
}

export interface SelectedLanguageElement {
  id: number;
  active: boolean;
  language_id: number;
  user_profile_id: number;
  details: SelectedLanguageDetail;
}

export interface SelectedLanguageDetail {
  id: number;
  base_language_id: number;
  target_language: TargetLanguage;
  target_language_id: number;
  base_language: BaseLanguage;
}

export interface BaseLanguage {
  id: number;
  name: string;
  short_name: string;
  coursesId: null;
}

export interface TargetLanguage {
  name: string;
  short_name: string;
}

export interface IUserCourse {
  id: number;
  course_id: number;
  user_id: number;
  completed_levels: ILevel[];
  course: ICourse;
}

export interface ILevel {
  id: number;
  title: string;
  description: string | null;
  unitId: number;
  userCoursesId: number | null;
  difficulty: ExerciseDifficulty;
  color: string;
  state: LevelState;
}

export interface IExercise {
  id: number;
  difficulty: ExerciseDifficulty;
  type: string;
  prompt: null | string;
  choices: IChoice[];
  compact_translations: string[];
  solution_translation: null | string;
  correct_solutions: string[];
  correct_answers: string[];
  display_tokens: DisplayToken[];
  correct_indices: number[];
  correct_index: number | null;
  tts: string;
  source_language: Languages;
  target_language: Languages;
  unit_id: number;
  hasPreviousError?: boolean;
}

export interface DisplayToken {
  text: string;
  isBlank: boolean;
}

export interface ICourse {
  id: number;
  title: string;
  description: string;
  language_id: number;
  sections: ISection[];
}

export interface ISection {
  id: number;
  title: string;
  description: string | null;
  img_src: string | null;
  courseId: number;
  user_courses_id: null;
  units: IUnit[];
  color: "success" | "accent" | "primary" | "info" | "secondary" | "error";
}

export interface IUnit {
  id: number;
  title: string;
  description: string | null;
  sectionId: number;
  user_courses_id: number | null;
  levels: ILevel[];
  completed: boolean;
  completed_levels: number;
  color: colors;
}

export interface IStrikes {
  strikes_length: number;
  last_strike_date: string;
}

export interface ILives {
  lives: number;
  last_live_date: string;
}

export interface ExerciseDifficulty {
  easy: "easy";
  medium: "medium";
  hard: "hard";
}

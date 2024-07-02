import { RefObject, TextareaHTMLAttributes } from "react";
import { ContentElement, ExerciseDifficulty, IExercise, IFlags, ILevel, ILives, IUnit, SelectedLanguageElement } from "./generics";

export interface ExercisesProps {
  data: IExercise;
  onCheckAnswer: (values: onCheckAnswerProps) => void;
  isMessageActive: boolean;
  onExerciseFail: (
    correct_answer?: string,
    translationText?: string
  ) => Promise<void>;
}

export interface IconProps {
  animal: string;
  color: string;
}

export interface LanguageSelectProps {
  selectedLanguage: SelectedLanguageElement;
  languages: SelectedLanguageElement[];
}

export interface CarouselCardProps {
  href: string;
  title: string;
  level: string;
  type: string;
  description: string;
}

export interface DashboardProps {
  historical: unknown[];
  pendingContent: ContentElement[];
  savedContent: ContentElement[];
}

export interface LanguagesSelectionProps {
  props: {
    flags: IFlags[];
    onClick: (value: IFlags) => void;
  };
}

export interface ModalProps {
  title: string;
  children: JSX.Element;
  onSuccess?: () => void;
  onClose?: () => void;
  modalRef: RefObject<HTMLDialogElement>;
  id: string;
}

export interface FormTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export interface onCheckAnswerProps {
  type: string;
  correct_answers: string[];
  selected_option: unknown;
  compact_translations?: string[];
  solution_translation?: string;
  correct_solutions?: string[];
  prompt?: string;
  correct_indices?: number[];
}

export interface LevelIconProps {
  state: LevelState;
}

export interface UnitProps {
  sectionId: string;
  unit: IUnit;
  color: colors;
  lives: ILives;
}

export interface LevelBubbleProps {
  state: LevelState;
  lives: ILives;
  href: string;
  difficulty?: ExerciseDifficulty;
  level: ILevel;
  color: colors;
}

export interface LevelProps {
  level: ILevel;
  sectionId: string;
  unitId: number;
  row: number;
  state: LevelState;
  color: colors;
  lives: ILives;
}

export enum LevelState {
  COMPLETED = "completed",
  STUDYING = "studying",
  FIRST_BLOCKED = "first_blocked",
  BLOCKED = "blocked",
}

export enum colors {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  ACCENT = "accent",
  SUCCESS = "success",
  INFO = "info",
  ERROR = "error",
}

export enum ExercisesType {
  TRANSLATION = "Translation",
  CHOOSE_CORRECT = "ChooseCorrect",
  COMPLETE_SENTENCE = "CompleteSentence",
  WRITE_DOWN = "WriteDown",
  MULTIPLE_CHOICE = "MultipleChoice",
  LISTENING = "Listening",
}

export enum Languages {
  spanish = "spanish",
  english = "english",
  italian = "italian",
  japanese = "japanese",
  german = "german",
  french = "french",
}

export enum Locales {
  spanish = "es",
  english = "en",
  italian = "it",
  japanese = "jp",
  german = "de",
  french = "fr",
}

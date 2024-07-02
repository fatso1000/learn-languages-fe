import {
  ILives,
  IStrikes,
  IUser,
  SelectedLanguageElement,
} from "@/types/generics";
// import LanguageSelect from "../InputsAndButtons/LanguageSelect";
import HeartDropdown from "./HeartDropdown";
import StrikeDropdown from "./StrikeDropdown";
import { Link, useLocation } from "react-router-dom";
import { levelAuthRegex } from "@/shared/helpers";
import LocalStorage from "@/shared/localStorage";
// import LocaleSelect from "../InputsAndButtons/LocaleSelect";

export default function Navbar() {
  const location = useLocation();
  const localStorage = new LocalStorage();
  const storageObj = {
    current_user: localStorage.getItem("current_user"),
    token: localStorage.getItem("token"),
    selectedLanguage: localStorage.getItem("selected_language"),
    lives: localStorage.getItem("lives"),
    strikes: localStorage.getItem("strikes"),
  };

  const currentUser: IUser | undefined =
      storageObj.current_user && storageObj.current_user !== ""
        ? JSON.parse(storageObj.current_user)
        : undefined,
    selectedLanguage: SelectedLanguageElement | undefined =
      storageObj.selectedLanguage && storageObj.selectedLanguage !== ""
        ? JSON.parse(storageObj.selectedLanguage)
        : undefined,
    token =
      storageObj.token && storageObj.token !== ""
        ? storageObj.token
        : undefined,
    lives: ILives | undefined =
      storageObj.lives && storageObj.lives !== ""
        ? JSON.parse(storageObj.lives)
        : undefined,
    strikes: IStrikes | undefined =
      storageObj.strikes && storageObj.strikes !== ""
        ? JSON.parse(storageObj.strikes)
        : undefined;

  const isLoggedIn = currentUser && token ? true : false;

  return (
    <nav className="navbar bg-base-100 px-4 md:px-8 mt-2 bg-opacity-90 text-base-content h-16 backdrop-blur transition-all duration-100 shadow-sm">
      <div className="flex-1">
        <Link
          className="btn btn-ghost leading-none normal-case text-xl font-extrabold"
          to="/"
        >
          <span className="text-success">L</span>
          <span className="text-info">L</span>
          <span className="text-secondary">O</span>
        </Link>
      </div>

      <div className="flex-none">
        {isLoggedIn &&
        currentUser &&
        selectedLanguage &&
        !levelAuthRegex.test(location.pathname) ? (
          <>
            {/* <LanguageSelect
              selectedLanguage={selectedLanguage}
              languages={currentUser.profile.languages}
            /> */}
            <HeartDropdown userId={currentUser.id} lives={lives} />
            <StrikeDropdown userId={currentUser.id} strikes={strikes} />
          </>
        ) : (
          //   <LocaleSelect pathname={pathname} />
          <></>
        )}
      </div>
    </nav>
  );
}

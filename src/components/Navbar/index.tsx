// import LanguageSelect from "../InputsAndButtons/LanguageSelect";
import HeartDropdown from "./HeartDropdown";
import StrikeDropdown from "./StrikeDropdown";
import { Link, useLocation } from "react-router-dom";
import { levelAuthRegex } from "@/shared/helpers";
import useUser from "@/hooks/useUser";
import LocaleSelect from "../Inputs/LocaleSelect";
// import LocaleSelect from "../InputsAndButtons/LocaleSelect";

export default function Navbar() {
  const location = useLocation();
  const { currentUser, selectedLanguage, isLoggedIn, lives, strikes } =
    useUser();

  return (
    <nav className="navbar bg-base-100 px-4 md:px-8 mt-2 bg-opacity-90 text-base-content h-16 backdrop-blur transition-all duration-100 shadow-sm relative z-50">
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
          <LocaleSelect />
        )}
      </div>
    </nav>
  );
}

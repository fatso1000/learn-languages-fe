import { languages, localesJSON, localesKey } from "@/shared/helpers";
import { Locales } from "@/types/props";
import { Link, useParams } from "react-router-dom";

export default function LocaleSelect() {
  const params = useParams();
  const locale: localesKey | undefined = params.locale as
    | localesKey
    | undefined;
  const localeLanguage = localesJSON[locale ?? "en"].long;
  return (
    <div className="dropdown dropdown-end z-50 relative">
      <button className="btn m-1 uppercase font-bold text-base-content">
        {localeLanguage}
      </button>
      <ul className="dropdown-content menu bg-base-100 rounded-md w-52 p-2 shadow font-medium relative gap-1">
        {languages
          .filter((language) => localeLanguage !== language)
          .map((language) => {
            return (
              <li key={language}>
                <Link
                  to={`../${Locales[language as keyof typeof Locales]}`}
                  className="uppercase text-base-content cursor-pointer hover:bg-base-200 px-4 py-2 rounded-md"
                >
                  {language}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

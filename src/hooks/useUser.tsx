import { LocalStorageHandler } from "@/shared/localStorage";
import {
  ILives,
  IStrikes,
  IUser,
  SelectedLanguageElement,
} from "@/types/generics";

export default function useUser() {
  const localStorage = new LocalStorageHandler();

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

  return { currentUser, selectedLanguage, token, lives, strikes, isLoggedIn };
}

// import { useEffect, useState } from "react";
// // import {
// //   getCurrentUser,
// //   getLives,
// //   getSelectedLanguage,
// //   getStrikes,
// //   isUserLoggedIn,
// // } from "src/shared/cookies";
// import {
//   ILives,
//   IStrikes,
//   IUser,
//   SelectedLanguageElement,
// } from "@/types/generics";

// export default function useUser(props?: unknown) {
//   const [currentUser, setCurrentUser] = useState<IUser>();
//   const [selectedLanguage, setSelectedLanguage] =
//     useState<SelectedLanguageElement>();
//   const [userLives, setUserLives] = useState<ILives>();
//   const [strikes, setStrikes] = useState<IStrikes>();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const checkUser = async () => {
//     // const user = await getCurrentUser(),
//     //   selectedLanguageStr = await getSelectedLanguage(),
//     //   lives = await getLives(),
//     //   strikes = await getStrikes();
//     // if (user) {
//     //   setCurrentUser(JSON.parse(user.value));
//     //   setSelectedLanguage(JSON.parse(selectedLanguageStr!.value));
//     //   setUserLives(JSON.parse(lives!.value));
//     //   setStrikes(JSON.parse(strikes!.value));
//     // }
//   };

//   const checkUserLoggedIn = async () => {
//     // const isLoggedIn = await isUserLoggedIn();
//     setIsLoggedIn(isLoggedIn);
//   };

//   useEffect(() => {
//     checkUser();
//     checkUserLoggedIn();
//   }, [props]);

//   return { currentUser, isLoggedIn, selectedLanguage, userLives, strikes };
// }

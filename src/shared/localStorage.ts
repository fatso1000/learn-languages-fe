export class LocalStorageHandler {
  constructor() {}

  getItem(name: string) {
    return localStorage.getItem(name);
  }

  setItem(name: string, value: string) {
    try {
      return localStorage.setItem(name, value);
    } catch (error) {
      return "";
    }
  }

  removeItem(name: string) {
    localStorage.removeItem(name);
  }

  loginUser(
    user: string,
    language: string,
    token?: string,
    lives?: string,
    strikes?: string
  ) {
    this.setItem("current_user", user);
    this.setItem("selected_language", language);
    lives && this.setItem("lives", lives);
    strikes && this.setItem("strikes", strikes);
    token && this.setItem("token", token);
  }

  logoutUser() {}
}

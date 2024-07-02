export default class LocalStorage {
  constructor() {}

  getItem(name: string) {
    return localStorage.getItem(name);
  }
}

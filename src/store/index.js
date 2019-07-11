import Modal from "./Modal";


let store = null;

export function initializeStore () {

  if (store === null) {
      store = {
        modal: new Modal()
      };
  }

  return store;
}

import { observable, action } from "mobx";
// import autobind from "autobind-decorator";

export default class Modal {
  @observable isOpen = false;

  @action showModal = () => {
    this.isOpen = true;
  };

  @action closeModal = () => {
    this.isOpen = false;
  };
}
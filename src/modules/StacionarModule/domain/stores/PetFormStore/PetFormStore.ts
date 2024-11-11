import { makeAutoObservable } from "mobx";
import { PetForm } from "../../types";

export class PetFormStore {
  public petData?: PetForm.PetFormFields;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

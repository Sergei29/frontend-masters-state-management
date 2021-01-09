import { NewTodoModel } from "../newTodoModel/newTodoModel";

export class TodoModel extends NewTodoModel {
  public id: string;
  static STR_ID = "id";

  constructor(
    dateCreated: string,
    dateToCompleteBy: string,
    bCompleted: boolean,
    strTitle: string,
    strDescription: string,
    strId?: string
  ) {
    super(dateCreated, dateToCompleteBy, bCompleted, strTitle, strDescription);
    this.id = strId || "";
  }
}

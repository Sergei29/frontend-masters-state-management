import { NewTodoModel } from "../newTodoModel/newTodoModel";

export class TodoModel extends NewTodoModel {
  public id: string;
  static STR_ID = "id";

  constructor(
    strDateCreated: string,
    strDateToCompleteBy: string,
    bCompleted: boolean,
    strTitle: string,
    strDescription: string,
    strId?: string
  ) {
    super(
      strDateCreated,
      strDateToCompleteBy,
      bCompleted,
      strTitle,
      strDescription
    );
    this.id = strId || "";
  }
}

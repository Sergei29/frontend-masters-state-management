export class NewTodoModel {
  public date_created: string;
  public date_to_complete_by: string;
  public completed: boolean;
  public title: string;
  public description: string;

  static STR_DATE_CREATED = "date_created";
  static STR_DATE_TO_COMPLETE_BY = "date_to_complete_by";
  static BOOL_COMPLETED = "completed";
  static STR_TITLE = "title";
  static STR_DESCRIPTION = "description";
  static STR_ID = "id";

  constructor(
    strDateCreated: string,
    strDateToCompleteBy: string,
    bCompleted: boolean,
    strTitle: string,
    strDescription: string
  ) {
    this.date_created = strDateCreated;
    this.date_to_complete_by = strDateToCompleteBy;
    this.completed = bCompleted;
    this.title = strTitle;
    this.description = strDescription;
  }
}

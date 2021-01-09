export class TodoModel {
  public date_created: string;
  public date_to_complete_by: string;
  public completed: boolean;
  public title: string;
  public description: string;
  public id: string;

  static STR_DATE_CREATED = "date_created";
  static STR_DATE_TO_COMPLETE_BY = "date_to_complete_by";
  static BOOL_COMPLETED = "completed";
  static STR_TITLE = "title";
  static STR_DESCRIPTION = "description";
  static STR_ID = "id";

  constructor(
    dateCreated: string,
    dateToCompleteBy: string,
    bCompleted: boolean,
    strTitle: string,
    strDescription: string,
    strId?: string
  ) {
    this.date_created = dateCreated;
    this.date_to_complete_by = dateToCompleteBy;
    this.completed = bCompleted;
    this.title = strTitle;
    this.description = strDescription;
    this.id = strId || "";
  }
}

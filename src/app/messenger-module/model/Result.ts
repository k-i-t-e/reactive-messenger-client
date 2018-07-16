class Result<T> {
  payload: T;
  status: string;
  message?: string;

  constructor(payload: T, status: string, message?: string) {
    this.payload = payload;
    this.status = status;
    this.message = message;
  }

  public static success<T>(payload: T): Result<T> {
    return {
      payload: payload,
      status: 'OK'
    }
  }
}

function getTimestamp(): string {
  return new Date().toISOString();
}

export class Logger {
  private context: string = '???';

  constructor(context: string) {
    this.context = context;
  }

  public get prefix() {
    const timestamp = getTimestamp();
    return `[${timestamp}][${this.context}]`;
  }

  public log(...args: any[]) {
    console.log(this.prefix, ...args);
  }
}

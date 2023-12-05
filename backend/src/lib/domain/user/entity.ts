export class User {
    readonly userid: UserId;
    readonly userName: UserName;
    readonly userRank: UserRank;
    readonly userRegisteredAt: UserRegisteredAt;
  
    constructor(id: number, name: string, rank: number) {
      this.userid = new UserId(id);
      this.userName = new UserName(name);
      this.userRank = new UserRank(rank);
      this.userRegisteredAt = new UserRegisteredAt();
    }
  }

  export class UserId {
    readonly Value: number;
  
    constructor(value: number) {
      this.Value = value;
    }
  }
  
  export class UserName {
    readonly Value: string;
  
    constructor(value: string) {
      this.Value = value;
    }
  }
  
  export class UserRank {
    readonly Value: number;
  
    constructor(value: number) {
      this.Value = value;
    }
  }
  
  export class UserRegisteredAt {
    readonly Value: string;
  
    constructor() {
      this.Value = new Date().toISOString();
    }
  }
  
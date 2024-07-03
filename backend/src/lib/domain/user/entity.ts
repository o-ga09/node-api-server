export class User {
    readonly userid: UserId;
    readonly userName: UserName;
    readonly userKey: UserKey;
    readonly salt:UserSalt;
    readonly mailAddress:UserAddress;
    readonly birthDay:UserBirthday;
    readonly sex:UserSex;
    readonly userRank: UserRank;
    readonly userRegisteredAt: UserRegisteredAt;
  
    constructor(id: number, name: string, rank: number,userKey:string,salt:string,mailAddress:string,birthDay:string,sex:string) {
      this.userid = new UserId(id);
      this.userName = new UserName(name);
      this.userKey = new UserKey(userKey);
      this.salt = new UserKey(salt);
      this.mailAddress = new UserAddress(mailAddress);
      this.birthDay = new UserBirthday(birthDay);
      this.sex = new UserSex(sex);
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

export class UserKey{
  readonly Value: string;
  
  constructor(value: string) {
    this.Value = value;
  }
}
 
export class UserSalt{
  readonly Value: string;
  
  constructor(value: string) {
    this.Value = value;
  }
}

export class UserAddress{
  readonly Value: string;
  
  constructor(value: string) {
    this.Value = value;
  }
}

export class UserBirthday{
  readonly Value: string;
  
  constructor(value: string) {
    this.Value = value;
  }
}

export class UserSex{
  readonly Value: string;
  
  constructor(value: string) {
    this.Value = value;
  }
}
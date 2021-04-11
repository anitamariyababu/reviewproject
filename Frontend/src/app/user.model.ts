export class UserModel {
    constructor(
        public _id: String,
        public firstName: String,
        public lastName: String,
        public email: String,
        public password: String,
        public phone: Number,
        public address: String,
        public role: String
    ) { }
}
import userModel from '../schema/user-schema.js';

export class UserService {

    constructor() {

    }

    async add(user) {
      await userModel.create(user);
    }
}
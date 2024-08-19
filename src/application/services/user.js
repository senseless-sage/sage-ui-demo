import { User } from "../../domain/models/user";
/**
 * @returns {User}
 */
export function createUser() {
    return User.create("");
}
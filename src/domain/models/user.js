export class User {
    /** @type {string} */
    id;

    /**
     * @param {string} id
     * @returns {User}
     */
    static create(id) {
        const user = new User();

        user.id = id;

        return user;
    }
}

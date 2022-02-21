const testFuncs = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = {firstName: 'Joe'}
        user['lastName'] = 'Nedmond';
        return user;
    }
}

module.exports = testFuncs
// Write your solution in this file!
const employee = {
    name: "Tom",
    streetAddress: "123 Street"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const Object = {...employee}
    Object[key] = value
    return Object
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newObj = {...employee}
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromEmployeeByKey(emmployee, key) {
    delete employee[key]
    return employee
}

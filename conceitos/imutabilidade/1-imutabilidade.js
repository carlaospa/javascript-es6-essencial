const user = {
    name: 'Carlos',
    lastName: 'Alberto Rodrigues'
}

function getUserWithFullName(user){
    return{
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);


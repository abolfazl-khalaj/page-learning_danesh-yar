

export const isValidEmail = (email) => {
    const code = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/g
    return code.test(email)
}
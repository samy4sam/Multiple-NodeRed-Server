module.exports = {
adminAuth: {
    type: "credentials",
    users: [
        {
            username: "admin",
            password: process.env.NODE_RED_ADMIN_PW,
            permissions: "*"
        }
    ]
}
}

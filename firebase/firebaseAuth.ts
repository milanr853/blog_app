type PropType = {
    register: (prop: any) => void,
    login: (prop: any) => void,
    logout: (prop: any) => void,
}

const authFunctions: any = {}

function firebaseAuth(this: PropType) {
    this.register = async ({ email, password }) => console.table({ email, password })
    this.login = async ({ email, password }) => console.table({ email, password })
    this.logout = async ({ email, password }) => console.table({ email, password })
    return this
}

const FirebaseAuthFunctions = firebaseAuth.bind(authFunctions)

export { FirebaseAuthFunctions }
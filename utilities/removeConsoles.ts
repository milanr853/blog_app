
export function no_console() {
    if (process.env.NEXT_PUBLIC_ENVIRONMENT === "prod") {
        console.log = () => { }
    }
}
// Global
    // Local
        // Local
    // Local

// let name = 'Nathan'

if (true) {
    // let name = 'Mike'
    if (true) {
        // Leaked global when var is not explicitly defined elsewhere
        let name = 'Jen'
        // Variable shadowing, will use parent scope rather than global
        console.log(name)
    }
}
if (true) {
    console.log(name)
}
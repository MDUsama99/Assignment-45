function make_shirt(size: string = "Large", message: string = "Absolutly Not"): void {
    console.log(`A ${size}-sized shirt with the message "${message}" printed on it.`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Summer is coming");
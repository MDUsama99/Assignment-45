function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "Absolutly Not"; }
    console.log("A ".concat(size, "-sized shirt with the message \"").concat(message, "\" printed on it."));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Summer is coming");

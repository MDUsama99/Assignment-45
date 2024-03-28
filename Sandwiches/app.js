function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("  - Just bread, nothing else!");
    }
    else {
        console.log("  - Bread with " + items.join(", "));
    }
    console.log();
}
orderSandwich("Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich("Peanut Butter", "Jelly");
orderSandwich();

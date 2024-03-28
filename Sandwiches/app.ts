function orderSandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("  - Just bread, nothing else!");
    } else {
        console.log("  - Bread with " + items.join(", "));
    }
    console.log();
}

orderSandwich("Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich("Peanut Butter", "Jelly");
orderSandwich();

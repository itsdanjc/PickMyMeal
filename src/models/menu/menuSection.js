import MenuItem from "./menuItem.js";

export default class MenuSection {
    id;
    name;
    items = [new MenuItem()];

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            items: this.items.map(i => i.toJSON()),
        }
    }
}
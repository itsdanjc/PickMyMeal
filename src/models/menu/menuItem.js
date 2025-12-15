export default class MenuItem {
    id;
    name;
    description;

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
        }
    }
}
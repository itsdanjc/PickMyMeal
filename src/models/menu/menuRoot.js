import MenuSection from './menuSection.js';

export default class MenuRoot {
    id;
    schemaVersion;
    modifiedAt;
    createdAt;
    sections = [new MenuSection()];

    toJSON(){
        return {
            id: this.id,
            schemaVersion: this.schemaVersion,
            modifiedAt: this.modifiedAt,
            createdAt: this.createdAt,
            sections: this.sections.map(i => i.toJSON()),
        }
    }
}
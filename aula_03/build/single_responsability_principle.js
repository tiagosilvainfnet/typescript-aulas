"use strict";
class Model {
    save() {
        console.log("Aqui salvamos o arquivo");
    }
    update(id) {
        console.log("Aqui atualizamos o arquivo");
    }
    delete(id) {
        console.log("Aqui deletamos o arquivo");
    }
    select() {
        return [];
    }
    sync() {
        console.log("Sincronizando");
    }
}
class Book extends Model {
    constructor() {
        super(...arguments);
        this.title = '';
        this.author = '';
        this.description = '';
        this.pages = '';
    }
}
class Author extends Model {
    constructor() {
        super(...arguments);
        this.name = '';
        this.books = '';
    }
}

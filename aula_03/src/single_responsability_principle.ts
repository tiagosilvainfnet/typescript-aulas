class Model{
    save(): void{
        console.log("Aqui salvamos o arquivo")
    }
    update(id: number): void{
        console.log("Aqui atualizamos o arquivo")
    }
    delete(id: number): void{
        console.log("Aqui deletamos o arquivo")
    }
    select(): Array<String>{
        return []
    }
    sync(): void{
        console.log("Sincronizando")
    }
}

class Book extends Model{
    title: String = '';
    author: String = '';
    description: String = '';
    pages: String = '';
}

class Author extends Model{
    name: String = '';
    books: String = '';
}
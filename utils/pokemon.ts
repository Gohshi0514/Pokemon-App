export const getAllPokemon = (url: RequestInfo | URL) => {
    return new Promise((resolve) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                resolve(data);
            });
    });
};

export const getPokemon = (url: RequestInfo | URL) => {
    //一つ一つのポケモンの詳細データを取得
    return new Promise((resolve) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                resolve(data);
            });
    });
};


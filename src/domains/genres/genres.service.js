export const getGenres = (page, page_size, ordering) => {
    return fetch(`https://api.rawg.io/api/genres?key=0597a16d1e6c43c687884298d71f17cc&page=${page}&page_size=${page_size}&ordering="${ordering}"`, {
        method: "GET"
    }).then((res) => {
        if (res.ok) {
            return res.json();
        }
        const error = new Error(res.statusText);
        error.response = res;
        throw error;
    }).catch((e) => console.log(e))
}
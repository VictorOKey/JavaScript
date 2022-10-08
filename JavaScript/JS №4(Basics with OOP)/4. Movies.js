function solve(arr) {
    let films = {};
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i].includes('addMovie'))
        {
            let name = arr[i].replace(/addMovie\s*/, '');
            if (!films.hasOwnProperty(name)) films[name] = { name: name };
        }
        if (arr[i].includes('onDate'))
        {
            let [name, date] =arr[i].split(/\s*onDate\s*/);
            if (films.hasOwnProperty(name)) films[name]['date'] = date;
        }
        if (arr[i].includes('directedBy'))
        {
            let [name, director] = arr[i].split(/\s*directedBy\s*/);
            if (films.hasOwnProperty(name)) films[name]['director'] = director;
        }
    }
    for (const name in films)
    {
        const film = films[name];
        if ( film.hasOwnProperty('name') && film.hasOwnProperty('date') && film.hasOwnProperty('director')) console.log(JSON.stringify(film));
    }
}
solve(['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan ',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30. 07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy  Rob Cohen ']);
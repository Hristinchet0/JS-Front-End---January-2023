function songs(arrayString) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let numbersOfSongs = Number(arrayString.shift());
    let typeOfSong = arrayString.pop();

    for (let i = 0; i < numbersOfSongs; i++) {
        let info = arrayString[i].split('_');
        let typeList = info[0];
        let name = info[1];
        let time = info[2];
        let song = new Song(typeList, name,time);
        songs.push(song);
    }

    if(typeOfSong === "all") {
        songs.forEach(s => console.log(s.name));
    } else {
        let filteredSongs = songs.filter(s => s.typeList === typeOfSong);
        filteredSongs.forEach(s => console.log(s.name));
    }
}

// songs([3,
//     'favourite_DownTown_3:14',
//     'favourite_Kiss_4:16',
//     'favourite_Smooth Criminal_4:01',
//     'favourite']
// );
// songs([4,
//     'favourite_DownTown_3:14',
//     'listenLater_Andalouse_3:24',
//     'favourite_In To The Night_3:58',
//     'favourite_Live It Up_3:48',
//     'listenLater']
// );
const playlist = {
     name: "Workout Vibes",
     createdBy: "Vedant",
     songs: [
          {
               id: 1,
               title: "Believer",
               artist: "Imagine_Dragons",
               duration: 204, // seconds
               liked: true
          },
          {
               id: 2,
               title: "Lose Yourself",
               artist: "Eminem",
               duration: 326,
               liked: false
          },
          {
               id: 3,
               title: "Enemy",
               artist: "Imagine_Dragons",
               duration: 173,
               liked: true
          },
          {
               id: 4,
               title: "Blinding Lights",
               artist: "The_Weeknd",
               duration: 200,
               liked: false
          }
     ]
};
const play = playlist.songs;
play.forEach((value) => { console.log(`${value.title} - ${value.artist} ${value.duration}`) });

const TotalDuration = play.reduce((accu, value) => { return accu + value.duration }, 0);
console.log(TotalDuration);

const Likedsongs = play.filter(value => value.liked === true);
console.log(Likedsongs);

function addSong(title, artist, duration) {
     const id = 0;
     const obj = {
          id: play.length + 1,
          title: title,
          artist: artist,
          duration: duration,
          liked: false,
     }
     play.push(obj);
};

addSong("3:59 AM", "divine", 250);
console.log(playlist);

function remove(id) {
     id = id - 1;
     play.splice(id, id - 1);
}
remove(2);
console.log(playlist);


const longest = play.reduce((higher, current) => { return higher.duration > current.duration ? higher : current });
console.log(longest.title);

obj = {};
play.forEach((value) => {
     const k = value.artist;
     if (!(Object.hasOwn(obj, k))) {
          obj[value.artist] = [value.title];

     }
     else {
          obj[k].push(value.title);
     }
});
console.log(obj);


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      getBookmarks(user);
    } else {
      console.log("No user is signed in");
    }
  });
  
  function getBookmarks(user) {
    db.collection("users")
      .doc(user.uid)
      .get()
      .then((userDoc) => {
        thisUser = userDoc.data();
        var bookmarks = thisUser.bookmarks;
        console.log(bookmarks);
  
        let CardTemplate = document.getElementById("CardTemplate");
        bookmarks.forEach((thisHikeID) => {
          console.log(thisHikeID);
          db.collection("Hikes")
            .where("id", "==", thisHikeID)
            .get()
            .then((snap) => {
              size = snap.size;
              queryData = snap.docs;
              // console.log(size);
  
              if (size == 1) {
                var doc = queryData[0].data();
                var hikeName = doc.name;
                var hikeID = doc.id;
                var hikeLength = doc.length;
  
                let newCard = CardTemplate.content.cloneNode(true);
                newCard.querySelector(".card-title").innerHTML = hikeName;
                newCard.querySelector(".card-length").innerHTML =
                  hikeLength + " km <br>";
                newCard.querySelector("a").onclick = () => setHikeData(hikeID);
                newCard.querySelector("img").src = `./images/${hikeID}.jpg`;
                hikeCardGroup.appendChild(newCard);
              } else {
                console.log("Query has more than one data");
              }
            });
        });
      });
  }
  
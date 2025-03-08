import { signUp, logout, login, onAuthStateChanged  } from "./auth";
import { db } from "./config";
import {collection, doc, getDocs, getFirestore, setDoc, deleteDoc, updateDoc, onSnapshot} from "firebase/firestore";


  const cityCollection = collection(db, "songs")
  onSnapshot(cityCollection, (snapshot) => {
        const tableBody = document.getElementById("table-body")
        tableBody.innerHTML = ""
        let i = 0; // Declare outside the loop
        snapshot.forEach((doc)=>{
            const data = doc.data()
            const row = document.createElement("tr")
            
            row.innerHTML = `
            <td> ${++i} </td>
            <td> ${data.title} </td>
            <td> ${data.artist} </td>
            <td> ${data.year} </td>
            <td> ${data.personal_rating} </td>
            `
            tableBody.appendChild(row)
        })
  })
  
  const saveSong = async function () {
    const titleName = document.getElementById("titleInput").value.trim();
    const artistName = document.getElementById("artistInput").value.trim();
    const yearName = Number(document.getElementById("yearInput").value.trim());
    const personal_ratingName = Number(document.getElementById("personal_ratingInput").value.trim());
    try{
      //This will be the new document ID
      const cityRef = doc(db, "songs", titleName);
  
      //title ref is the first parameter to set ID
      await setDoc(cityRef, {
        title: titleName,
        artist: artistName,
        year: yearName,
        personal_rating: personal_ratingName
      })
  
      alert("Good job!, your song was saved!")
      document.getElementById("titleInput").value = "";
      document.getElementById("artistInput").value = "";
      document.getElementById("yearInput").value = "";
      document.getElementById("personal_ratingInput").value = "";
      
    }catch(error){
      console.log("error saving the title", error);
    }
  }
  const deleteSong = async () => {
      try {
          const titleName = document.getElementById("titleInputDelete").value.trim();
          const songRef = doc(db, "songs", titleName); // Get reference to the song document by its title
          await deleteDoc(songRef); // Delete the document
          alert(`Song with title "${titleName}" has been deleted!`);
      } catch (error) {
        console.error("Error deleting the song: ", error);
      }
    }
  const updateSong = async function () {
      const titleName = document.getElementById("titleInputUpdate").value.trim();
      const personal_ratingName = Number(document.getElementById("personal_ratingInputUpdate").value.trim());
      try {
          const songRef = doc(db, "songs", titleName); // Get reference to the song document by its title
          
          await updateDoc(songRef, {
            personal_rating: personal_ratingName// Updating only the personal_rating field
          });
      
          alert(`Updated rating for "${titleName}" to ${personal_ratingName}!`);
        } catch (error) {
          console.error("Error updating the song: ", error);
        }
      
  }
    
    // Example usage: Deleting a song by title
    const deleteSongButton = document.querySelector("#DeleteSongButton");
    deleteSongButton.addEventListener("click", (event) => {
      event.preventDefault()
      deleteSong();
      
    });
    
  const addForm = document.querySelector("#AddSong")
  addForm.addEventListener("submit", (event) => {
    event.preventDefault()
    saveSong()
    
  })
//   const show = document.querySelector("#ShowSong")
//   show.addEventListener("click", (event) => {
//     event.preventDefault()
//     getSongs()
//   })
  const update = document.querySelector("#UpdateSongButton")
  update.addEventListener("click", (event) => {
    event.preventDefault()
    updateSong()
  })

const logOutForm = document.querySelector("#logoutForm")
logOutForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    logout()
})
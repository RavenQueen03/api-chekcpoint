import axios from "axios";
import React, {useState,useEffect} from "react";
import UserCard from "./UserCard";


function UserList(){
const [listOfUSer,setListOfUser]=useState([])
const [filterValue, setFilterValue]=useState("all")
const [error, setError] = useState(null);
const [userPhotos, setUserPhotos] = useState([]);
const ACCESS_KEY='GwA16xBclECWw401zzsoXRhx1KFDFhZZQmfxY0uiUCU';


useEffect(() => {
    axios.all([ 
      axios.get('https://jsonplaceholder.typicode.com/users'),
      axios.get('https://api.unsplash.com/search/photos', {
headers: {
Authorization: `Client-ID ${ACCESS_KEY}`
},
params: {
query: 'random profile pictures',
orientation: 'portrait'
}
})
      
    ])
    .then(
      axios.spread((usersRes, photosRes) => {
        setListOfUser(usersRes.data);
        setUserPhotos(photosRes.data.results);
      })
    )
    .catch(err => {
      console.log(err);
    });
      

      

  }, []);


function onFilterValueChanged(event) {
    setFilterValue(event.target.value);
  }

return(
<div>
<h1 className="  flex justify-center mt-[5%] mb-[5%] text-7xl font-extrabold text-gray-900 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 uppercase ">list of users </h1>
  <div className =" ml-[2%] mr-[2%] justify-center grid grid-cols-4 gap-4 ">
    {listOfUSer.map((user,index)=>(
<UserCard key={user.id} user={user} filterValue={filterValue} profilePic={userPhotos[index]} /> 
     ) )}
</div>

</div>


)

    }

    export default UserList
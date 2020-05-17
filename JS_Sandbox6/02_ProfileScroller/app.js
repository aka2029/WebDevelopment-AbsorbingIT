// the data may come from an api or database or somekind of back end but in this case its hard coded

// DO THIS PROJECT AGAIN

const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingFor: "female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    name: "Gen Smith",
    age: 26,
    gender: "female",
    lookingFor: "male",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/women/75.jpg"
  },
  {
    name: "Johnny Doe",
    age: 32,
    gender: "male",
    lookingFor: "female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/7.jpg"
  }
];

const profiles = profileIterator(data);

// Call first proifle
nextProfile();

// Next Event
document.getElementById("next").addEventListener("click", nextProfile);

// nextprofile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
      <ul class = "list-group">
        <li class = "list-group-item">Name: ${currentProfile.name}</li>
        <li class = "list-group-item">Age: ${currentProfile.age}</li>
        <li class = "list-group-item">Location: ${currentProfile.location}</li>
        <li class = "list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
      </ul>
      `;

    document.getElementById("imageDisplay").innerHTML = `
                <img src = "${currentProfile.image}">`;
  } else {
    // No more profiles
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    }
  };
}

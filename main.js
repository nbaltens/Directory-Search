$.ajax({
    url: 'https://randomuser.me/api/?results=20&nat=us',
    dataType: 'json',
    success: function(data) {
      let users = data.results;
      console.log(users)


let person = `<ul>`

$.each(users, (user) => {
    person += `<li>
                <img src="${users[user].picture.large}">
                <div>
                    <p><i>${users[user].name.first} ${users[user].name.last}</i></p>
                    <p><i>${users[user].login.username}</i></p>
                    <p>${users[user].phone}</p>
                    <p>${users[user].location.city}, ${users[user].nat}</p>
                </div>
                </li>`
});

person += `</ul>`;
$('#profiles').html(person);



const search = () => {

    // Declare variables
   var filter = $('#searchbox').val().toLowerCase();
   var li = $("#profiles li");

   // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        let seachItemsName = li[i].getElementsByTagName("i")[0];
        let seachItemsUser = li[i].getElementsByTagName("i")[1];
        if ((seachItemsName.innerHTML.toLowerCase().indexOf(filter) > -1) || (seachItemsUser.innerHTML.toLowerCase().indexOf(filter) > -1)) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// Run search function on keyup of search bar input
$('#searchbox').on('keyup', search);



    }
  });

 
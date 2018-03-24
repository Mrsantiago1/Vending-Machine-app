//local vending machine, user can see 5 items with numbers(bar codes)
//the user can input that number and receive that item
//now for the owner's side make it so he/she log in
//can see the total numbers of items left and how much money was made so far
var addChips = document.getElementsByClassName('fa-chips');
var digits = document.getElementsByClassName('fa-numbers')
// appending an event listener toe very single item on the items list
Array.from(addChips).forEach(function(element) {
      element.addEventListener('click', function(){
        const order = this.parentNode.parentNode.childNodes[1].innerText
        const order = this.parentNode.parentNode.childNodes[3].innerText
        fetch('orders', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'number': number,
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});
Array.from(digits).forEach(function(element) {
      element.addEventListener('click', function(){
        function compare(){
          var numbers = document.getElementById('numbers').value;

          if (numbers === 11) {
            document.getElementsByClassName('item').innerHTML="Cheetos"
          }
          else if (numbers === 12) {
            document.getElementsByClassName('item').innerHTML="Doritos"
          }
          else if (numbers === 13) {
            document.getElementsByClassName('item').innerHTML="Fritos"
          }
          else if (numbers === 14) {
            document.getElementsByClassName('item').innerHTML="Sun Chips"
          }
          else if (numbers === 15) {
            document.getElementsByClassName('item').innerHTML="Smartfood"
          }
          else {
            alert("please select one of the numbers displayed below.")
          }
        };
        // const order = this.parentNode.parentNode.childNodes[1].innerText
        // const order = this.parentNode.parentNode.childNodes[3].innerText
        // fetch('orders', {
        //   method: 'put',
        //   headers: {'Content-Type': 'application/json'},
        //   body: JSON.stringify({
        //     'name': name,
        //     'number': number,
        //   })
        // })
        // .then(response => {
        //   if (response.ok) return response.json()
        // })
        // .then(data => {
        //   console.log(data)
        //   window.location.reload(true)
        })
      });
// });

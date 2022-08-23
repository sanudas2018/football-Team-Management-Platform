let multiplePlayerArray = [];
// get single Player 
function addToSinglePlayer(element) {
   let getPlayerName = element.parentNode.children[0].innerText;
   const playerObject = {
      playerName: getPlayerName,
   }
   // Control array length and add only 5 players 
   if (multiplePlayerArray.length > 4) {
      alert('You are not add more the 5 player');
   } else {
      multiplePlayerArray.push(playerObject);
      showDisplayPlayer(multiplePlayerArray);
   }

   element.setAttribute('disabled', true)
};

// display multiple player (selected section) 
function showDisplayPlayer(currentPlayer) {
   console.log(currentPlayer);
   const tableBody = document.getElementById('player-table');
   tableBody.innerHTML = '';
   // looping array and add only 5 players 
   for (i = 0; i < currentPlayer.length; i++) {
      let name = currentPlayer[i].playerName;

      let createTr = document.createElement('tr');
      createTr.innerHTML = `
         <th class="text-white" scope="row">${i+1}</th>
         <td class="text-white">${name}</td>
      `;
      tableBody.appendChild(createTr);

   };

}
// calculate Budge per player
document.getElementById('calculater').addEventListener('click', function () {
   let selectCurrentPlayer = multiplePlayerArray.length;
   let perPlayerValue = getInputField('inputPerPlayer');
   if (selectCurrentPlayer <= 0) {
      alert('Please Select Your favorite Player');
   } else if (isNaN(perPlayerValue)) {
      alert('Please Input Your Player Budget');
   } else {
      let playerExpenses = selectCurrentPlayer * perPlayerValue;
      setValue('player-Expense-amount', playerExpenses);
   }

});


// ...Calculate total budget with per player....... 
document.getElementById('calculateTotal').addEventListener('click', function () {
   let managerAmount = getInputField('manager-amount');
   console.log(managerAmount)
   let coachAmount = getInputField('coach-amount');

   if (isNaN(managerAmount)) {
      alert('Please input Manger Amount')
   } else if (isNaN(coachAmount)) {
      alert('Please input Coach Amount')
   } else {
      let getPlayerExpenseValue = document.getElementById('player-Expense-amount').innerText;
      let playerExpense = parseFloat(getPlayerExpenseValue);
      let playerExpenses = managerAmount + coachAmount + playerExpense;
      setValue('total', playerExpenses);
   }

});

// get input field value
function getInputField(fieldId) {
   let getInputFieldId = document.getElementById(fieldId);
   let getInputValue = getInputFieldId.value;
   let Value = parseFloat(getInputValue);
   return Value;
}
// set All Input Field value 
function setValue(fieldId, value) {
   let getFieldId = document.getElementById(fieldId);
   getFieldId.innerText = value;
}
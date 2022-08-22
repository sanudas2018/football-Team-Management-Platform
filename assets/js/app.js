let naymar = {
   name: 'Naymar Jr',
   goals: '55',
   assist: '160',
   imgUrl: 'https://res.cloudinary.com/dwac7hlfp/image/upload/v1661182228/football%20team/nay_uinpxb.jpg',
};
let messi = {
   name: 'Lionel Messi',
   goals: '77',
   assist: '220',
   imgUrl: 'https://res.cloudinary.com/dwac7hlfp/image/upload/v1661182271/football%20team/messi_zxed5w.jpg'
};
let mbappe = {
   name: 'Kylian Mbappe',
   goals: '25',
   assist: '110',
   imgUrl: 'https://res.cloudinary.com/dwac7hlfp/image/upload/v1661182312/football%20team/mbapp_zgnjbw.jpg'
};
let vitor = {
   name: 'Vitor Machado',
   goals: '20',
   assist: '140',
   imgUrl: 'https://res.cloudinary.com/dwac7hlfp/image/upload/v1661182171/football%20team/Capture_mcqvuv.jpg'
};
let ramos = {
   name: 'Sergio Ramos',
   goals: '28',
   assist: '80',
   imgUrl: 'https://res.cloudinary.com/dwac7hlfp/image/upload/v1661182098/football%20team/Sergio-Ramos-2_vgiykv.jpg'
};
let renato = {
   name: 'Renato Sanches',
   goals: '30',
   assist: '140',
   imgUrl: 'https://res.cloudinary.com/dwac7hlfp/image/upload/v1661182098/football%20team/rs_nxefv4.jpg'
};


const PlayersArray = [naymar, messi, mbappe, vitor, ramos, renato];

// all player array loop 
function displayAllPlayer(players) {
   for (let i = 0; i < players.length; i++) {
      let player = players[i];
      displayPlayers(player);
   }
};
displayAllPlayer(PlayersArray);

// main body single palyer dynamic show 
function displayPlayers(player) {
   const mainSection = document.getElementById('player-details');
   const stringPlayerObject = JSON.stringify(player);
   const createCol = document.createElement('col');

   createCol.innerHTML = `
      <div class="card h-100 bg-dark">
      <img src=${player.imgUrl} class="card-img-top"
         alt="player image">
      <div class="card-body text-center">
         <h5 class="card-title text-white">${player.name}</h5>
         <p class="card-text "><span>${player.goals} Goals</span> . <span>${player.assist} Assist</span></p>
         <button class="btn btn-info w-75 " onclick='handleSinglePlayer(${stringPlayerObject})'>SELECT</button>
      </div>
   </div>
   `;

   mainSection.appendChild(createCol);

};

// single player conunt 
let multiplePlayerArray = [];


function handleSinglePlayer(singlePlayer) {
   // console.log(singlePlayer)
   // push single palyer array 
   if (multiplePlayerArray.length > 4) {
      alert('You are not add more the 5 player');
   } else {
      multiplePlayerArray.push(singlePlayer);
   }
   // const selectBtn = document.('select-btn');

   // setAttribute('disabled', true)


   showDisplayPlayer(multiplePlayerArray);

};

function showDisplayPlayer(currentPlayer) {
   const tableBody = document.getElementById('player-table');

   tableBody.innerHTML = '';
   for (i = 0; i < currentPlayer.length; i++) {
      let name = currentPlayer[i].name;
      console.log(currentPlayer.length)
      let createTr = document.createElement('tr');
      createTr.innerHTML = `
         <th class="text-white" scope="row">${i+1}</th>
         <td class="text-white">${name}</td>
      `;

      tableBody.appendChild(createTr);

      document.getElementById('calculater').addEventListener('click', function () {
         let perPlayerValue = getInputField('inputPerPlayer');
         let playerExpenses = currentPlayer.length * perPlayerValue;
         setValue('player-Expense-amount', playerExpenses);
      });

   };
   // .......... 
   document.getElementById('calculateTotal').addEventListener('click', function () {
      let managerAmount = getInputField('manager-amount');
      console.log(managerAmount)
      let coachAmount = getInputField('coach-amount');
      console.log(coachAmount)
      let getPlayerExpenseValue = document.getElementById('player-Expense-amount').innerText;
      let playerExpense = parseFloat(getPlayerExpenseValue);
      console.log(playerExpense)
      let playerExpenses = managerAmount + coachAmount + playerExpense;
      setValue('total', playerExpenses);

   });



};
// // calculate button Function
// function clickCalculateBtn(id) {
//    document.getElementById(id).addEventListener('click', function () {
//      let inputValue =  getInputField(inputPerPlayer);

//    });
// }
// manager-amount coach-amount total
// get All Input Field value 
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

// function calculateExpense() {
//    let calculate = document.getElementById('calculater');
//    let getInputFieldCal = document.getElementById('input-per-player');
//    let playerExpenses = currentPlayer.length * getInputFieldCal;
//    let playerExpenseField = document.getElementById('player-Expense-field');
//    playerExpenseField.innerText = playerExpenses;
// }
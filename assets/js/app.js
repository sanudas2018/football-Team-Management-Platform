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

function displayAllPalyer(players) {
   for (let i = 0; i < players.length; i++) {
      let player = players[i];
      displayPlayers(player);
   }
};
displayAllPalyer(PlayersArray);

function displayPlayers(player) {
   const mainSection = document.getElementById('player-details');
   const createCol = document.createElement('col');
   createCol.innerHTML = `
      <div class="card h-100 bg-dark">
      <img src=${player.imgUrl} class="card-img-top"
         alt="player image">
      <div class="card-body text-center">
         <h5 class="card-title text-white">${player.name}</h5>
         <p class="card-text "><span>${player.goals} Goals</span> . <span>${player.assist} Assist</span></p>
         <button class="btn btn-info w-75">SELECT</button>
      </div>
   </div>
   `;
   mainSection.appendChild(createCol);
};

// displayPlayers(naymar);
// displayPlayers(naymar);
// displayPlayers(naymar);

// displayPlayers(naymar);
// displayPlayers(naymar);
// displayPlayers(naymar);
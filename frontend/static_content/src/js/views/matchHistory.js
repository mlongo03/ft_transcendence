// import { fetchMatchHistory } from "../service/apiService";

export default function matchHistory() {
    const html = `
    <section>

		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>

		<div class="signin">
			<div class="card-container">
				<!-- CARD GENERATE DALLO SCRIPT -->
			</div>
		</div>

	</section>
    `;
	setTimeout(() => {

		// prepareHistory();
		// // Dati delle partite
		// async function prepareHistory() {
		// 	const history = await fetchMatchHistory();
		// 	console.log(history);
		// }
		
		const partiteGiocate = [
			{ data: '22 Ottobre 2024', teamA: 'Giocatore 1', teamB: 'Giocatore 2', punteggio: '2 - 1', risultato: 'Vittoria'},
			{ data: '22 Ottobre 2024', teamA: 'Giocatore 1', teamB: 'Giocatore 2', punteggio: '2 - 1', risultato: 'Vittoria'},
			{ data: '22 Ottobre 2024', teamA: 'Giocatore 1', teamB: 'Giocatore 2', punteggio: '2 - 1', risultato: 'Vittoria'},
			{ data: '23 Ottobre 2024', teamA: 'Giocatore 1', teamB: 'Giocatore 4', punteggio: '1 - 3', risultato: 'Sconfitta' },
			{ data: '24 Ottobre 2024', teamA: 'Giocatore 1', teamB: 'Giocatore 6', punteggio: '4 - 2', risultato: 'Vittoria' },
			{ data: '25 Ottobre 2024', teamA: 'Giocatore 1', teamB: 'Giocatore 8', punteggio: '0 - 1', risultato: 'Sconfitta' },
			{ data: '25 Ottobre 2024', teamA: 'Giocatore 1', teamB: 'Giocatore 8', punteggio: '0 - 1', risultato: 'Sconfitta' }
		];
		
		// Seleziona il contenitore per le card
		const container = document.querySelector('.card-container');
		console.log(container);
		
		// Genera le card
		partiteGiocate.forEach((partita, index) => {
			let risultatoClass = partita.risultato.toLowerCase(); // "vittoria" o "sconfitta"
			let punteggio = partita.punteggio.split(' - '); // Divide il punteggio in due parti
			let teamA = partita.teamA;
			let teamB = partita.teamB;
		
			const cardHTML = `
				<div class="cardMatch">
					<div data-status="inprogress" class="teams">
						<div class="team-info team-home">
							<div class="team-info-container">
								<div class="team-name-info">${teamA}</div>
							</div>
						</div>
						<div class="event-scoreboard">
							<div class="event-score-container">
								<div class="current-time-container">
									<div class="event-current-time"></div>
									<div class="progress-dots" data-progress="1S">
										<div class="load"></div>
									</div>
								</div>
								<div class="score-container">
									<div class="score-home">${punteggio[0]}</div>
									<div class="custom-sep">-</div>
									<div class="score-away">${punteggio[1]}</div>
								</div>
							</div>
						</div>
						<div class="team-info team-away">
							<div class="team-info-container">
								<div class="team-icon-container"></div>
								<div class="team-name-info">${teamB}</div>
							</div>
						</div>
					</div>
				</div>
			`;
		
			// Aggiungi la card al contenitore
			container.innerHTML += cardHTML;
		
			// abilita lo scroll se ci sono più di 4 card
			if (index >= 3) { // Dalla 4ª card in poi
				container.style.overflowY = 'auto';
			}
		});
	
	}, 0);
	return html;
}
    
	

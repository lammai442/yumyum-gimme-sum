import { registerUser } from '../components/register.js';
import { fetchUsers } from '../api/api.js';

function runRegisterPage() {
	document.addEventListener('DOMContentLoaded', async () => {
		const form = document.querySelector('form');

		// Hämta användardata från API innan registreringen
		let apiUsers = await fetchUsers();

		// Säkerställ att apiUsers är en array, annars ge ett tomt arrayvärde
		if (apiUsers && apiUsers.users && Array.isArray(apiUsers.users)) {
			apiUsers = apiUsers.users; // Om vi har en användararray under 'users', extrahera den
		} else {
			apiUsers = []; // Om apiUsers inte innehåller en 'users' array, sätt den till tom
		}

		// Anslut registreringsfunktionen till formuläret
		form.addEventListener('submit', (event) => {
			registerUser(event, apiUsers); // Skicka med apiUsers till registerUser
		});
	});
}

export { runRegisterPage };

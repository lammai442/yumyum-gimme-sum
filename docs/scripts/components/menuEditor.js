import { fetchProducts } from '../api/api.js';
import {
	getDataFromLocalStorage,
	saveDataToLocalStorage,
} from '../data/localStorage.js';
import { showMessage } from '../utils/utils.js';
import { renderEditableMenu } from './renderEditMenu.js';
import { menuProductsArray } from '../pages/products.js';

function runMenuEditor() {
	const container = document.querySelector('#editMenuContainer');
	if (!container) {
		showMessage('Fel: Kunde inte ladda editorn.', 'error');
		return;
	}

	// const localProducts = menuProducts;
	const localProducts = getDataFromLocalStorage('menuProducts');
	if (!localProducts || localProducts.length === 0) {
		const itemsWithActive = menuProductsArray;
		saveDataToLocalStorage('menuProducts', itemsWithActive);
		console.log(itemsWithActive);

		renderEditableMenu(itemsWithActive);

		// fetchProducts()
		// 	.then((apiData) => {
		// 		const itemsWithActive = apiData.items.map((item) => ({
		// 			...item,
		// 			active: true,
		// 		}));
		// 		saveDataToLocalStorage('menuProducts', itemsWithActive);
		// 		console.log(itemsWithActive);

		// 		renderEditableMenu(itemsWithActive);
		// 	})
		// 	.catch(() => {
		// 		showMessage('Kunde inte hämta produkter från API.', 'error');
		// 	});
	} else {
		renderEditableMenu(localProducts);
	}
}

export { runMenuEditor };

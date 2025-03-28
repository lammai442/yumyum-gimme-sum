import { renderHamburgerMenu } from './components/navMenu.js';
import { runIndexPage } from 'pages/indexPage.js';
import { runAboutPage } from './pages/aboutPage.js';
import { runEtaPage } from './pages/etaPage.js';
import { runHistoryPage } from './pages/historyPage.js';
import { runMapPage } from './pages/mapPage.js';
import { runMenuPage } from './pages/menuPage.js';
import { runOrderOverviewPage } from './pages/order-overviewPage.js';
import { runOrdersPage } from './pages/ordersPage.js';
import { runProfilePage } from './pages/profilePage.js';
import { runReceiptPage } from './pages/receiptPage.js';
import { runRegisterPage } from './pages/registerPage.js';
import { openDropDownBasket } from './components/dropDownBasket.js';
import { runEditMenuPage } from './pages/editMenuPage.js';
import { checkUserStatus } from './components/validateUser.js';

console.log('Script.js loaded');

const path = window.location.pathname;
// runIndexPage();
if (
	path === '/' ||
	path === '/index.html' ||
	path === '/yumyum-gimme-sum/' ||
	window.location.pathname === '/yumyum-gimme-sum/index.html'
) {
	console.log('index.html');
	runIndexPage();
} else if (
	path === '/about.html' ||
	window.location.pathname === '/yum-yum-gimme-sum/about.html'
) {
	checkUserStatus();
	runAboutPage();
	renderHamburgerMenu();
	openDropDownBasket();
	console.log('about.html');
} else if (
	path === '/eta.html' ||
	window.location.pathname === '/yum-yum-gimme-sum/eta.html'
) {
	checkUserStatus();
	runEtaPage();
	renderHamburgerMenu();
	openDropDownBasket();
	console.log('eta.html');
} else if (
	path === '/history.html' ||
	window.location.pathname === '/yum-yum-gimme-sum/history.html'
) {
	checkUserStatus();
	runHistoryPage();
	renderHamburgerMenu();
	openDropDownBasket();
	console.log('history.html');
} else if (
	path === '/map.html' ||
	window.location.pathname === '/yum-yum-gimme-sum/map.html'
) {
	checkUserStatus();
	runMapPage();
	renderHamburgerMenu();
	openDropDownBasket();
	console.log('map.html');
} else if (
	path === '/menu.html' ||
	window.location.pathname === '/yum-yum-gimme-sum/menu.html'
) {
	checkUserStatus();
	runMenuPage();
	renderHamburgerMenu();
	openDropDownBasket();
	console.log('menu.html');
} else if (
	path === '/order-overview.html' ||
	window.location.pathname === '/yum-yum-gimme-sum/order-overview.html'
) {
	checkUserStatus();
	runOrderOverviewPage();
	renderHamburgerMenu();
	console.log('order-overview.html');
} else if (
	path === '/orders.html' ||
	window.location.pathname === '/yum-yum-gimme-sum/orders.html'
) {
	checkUserStatus();
	runOrdersPage();
	renderHamburgerMenu();
	openDropDownBasket();
	console.log('orders.html');
} else if (
	path === '/profile.html' ||
	window.location.pathname === '/yum-yum-gimme-sum/profile.html'
) {
	checkUserStatus();
	runProfilePage();
	renderHamburgerMenu();
	openDropDownBasket();
	console.log('profile.html');
} else if (
	path === '/receipt.html' ||
	window.location.pathname === '/yum-yum-gimme-sum/receipt.html'
) {
	checkUserStatus();
	runReceiptPage();
	renderHamburgerMenu();
	openDropDownBasket();
	console.log('receipt.html');
} else if (
	path === '/register.html' ||
	window.location.pathname === '/yum-yum-gimme-sum/register.html'
) {
	console.log('register.html');

	runRegisterPage();
} else if (
	path === '/editMenu.html' ||
	window.location.pathname === '/yum-yum-gimme-sum/editMenu.html'
) {
	checkUserStatus();
	runEditMenuPage();
	renderHamburgerMenu();
	console.log('editMenu.html');
}

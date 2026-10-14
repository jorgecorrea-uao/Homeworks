import { Nodo } from './tree/Nodo';
import { pagina } from './pages/pagina';

export const raiz = new Nodo({ title: 'Inicio', link: '/', component: pagina('Inicio') });

const settings = new Nodo({ title: 'Settings', link: '/settings', component: pagina('Settings') });
settings.agregarHijo(new Nodo({ title: 'Account', link: '/settings/account', component: pagina('Account') }));
settings.agregarHijo(new Nodo({ title: 'Profile', link: '/settings/profile', component: pagina('Profile Settings') }));
settings.agregarHijo(new Nodo({ title: 'Security & Privacy', link: '/settings/security', component: pagina('Security & Privacy') }));
settings.agregarHijo(new Nodo({ title: 'Password', link: '/settings/password', component: pagina('Password') }));
settings.agregarHijo(new Nodo({ title: 'Notification', link: '/settings/notification', component: pagina('Notification') }));

const help = new Nodo({ title: 'Help', link: '/help', component: pagina('Help') });
help.agregarHijo(new Nodo({ title: "FAQ's", link: '/help/faqs', component: pagina("FAQ's") }));
help.agregarHijo(new Nodo({ title: 'Submit a Ticket', link: '/help/ticket', component: pagina('Submit a Ticket') }));
help.agregarHijo(new Nodo({ title: 'Network Status', link: '/help/status', component: pagina('Network Status') }));

raiz.agregarHijo(new Nodo({ title: 'Profile', link: '/profile', component: pagina('Profile') }));
raiz.agregarHijo(new Nodo({ title: 'Messages', link: '/messages', component: pagina('Messages') }));
raiz.agregarHijo(settings);
raiz.agregarHijo(help);
raiz.agregarHijo(new Nodo({ title: 'Logout', link: '/logout', component: pagina('Logout') }));
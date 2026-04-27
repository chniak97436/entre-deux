export async function GET() {
    const menuNavigation = [
        {
            name: 'La Mairie',
            href: '/mairie',
            submenu: [
                { name: 'Le Maire et les Elus', href: '/mairie/elus' },
                { name: 'Les conseils municipaux', href: '/mairie/histoire' },
                { name: 'Urbanisme', href: '/mairie/demarches' },
                { name: 'Démarches administratives', href: '/mairie/demarches' }
            ]
        },
        {
            name: 'Enfance', href: '/enfance',
            submenu: [
                { name: 'Portail petite enfance', href: '/enfance/portail' },
                { name: 'Les écoles', href: '/enfance/ecoles' },
                { name: 'La caisse des écoles', href: '/enfance/caisse' },
                { name: 'Restauration scolaire', href: '/enfance/restauration' },
                { name: 'Pendant les vaccances', href: '/enfance/vaccances' }
            ]
        },
        { name: 'Agenda et Actualités', href: '/evenements',
            submenu: [
                { name: 'Agenda', href: '/evenements/agenda' },
                { name: 'Actualités', href: '/evenements/actualites' },
                { name: 'L Argamasse', href: '/evenements/argamasse' }
            ]
         },
        { name: "Sortie à l'Entre-Deux", href: '/services' },
        { name: 'Divertissement', href: '/divertissement' },
        { name: 'Innovations', href: '/innovations' }
    ];

    return Response.json(menuNavigation);
}


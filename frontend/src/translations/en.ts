import {TranslationMessages} from 'react-admin';
import englishMessages from 'ra-language-english';

const customEnglishMessages: TranslationMessages = {
    ...englishMessages,
    pos: {
        menu: {
            cadastros: 'Registers',
            eventos: 'Events',
            artistas: 'Artists',
            users: 'Users',
            contratos: 'Contracts',
        },
        backButton: 'Back',
    },
    resources: {
        evento: {
            name: 'Event',
            namePlural: 'Events',
            fields: {
                nome: 'Name',
                dataHora: 'Date and Time',
                local: 'Location',
                descricao: 'Description',
            },
            form: {
                detalhes: 'Details',
                descricao: 'Description',
                artistas: 'Artists',
            }
        },
        artista: {
            name: 'Artist',
            namePlural: 'Artists',
            fields: {
                nome: 'Name',
                nacionalidade: 'Nationality',
                dataNascimento: 'Date of Birth',
                biografia: 'Biography',
                fotoUrl: 'Photo Link',
                instagramUrl: 'Instagram',
                facebookUrl: 'Facebook',
                twitterUrl: 'Twitter',
                dataCriacao: 'Creation Date',
            },
            form: {
                detalhes: 'Details',
                biografia: 'Biography',
                RedesSociais: 'Social Media',
            }
        },
        users: {
            name: 'User',
            namePlural: 'Users',
            fields: {
                username: 'Username',
                password: 'Password',
                email: 'E-mail',
                dataCriacao: 'Creation Date',
            },
            form: {
                detalhes: 'Details',
                password: 'Password',
                passwordConfirm: 'Confirm Password',
            }
        },
    }
};

export default customEnglishMessages;

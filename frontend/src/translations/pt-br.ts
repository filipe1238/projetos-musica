import {TranslationMessages} from 'react-admin';
import ptBrMessages from 'ra-language-pt-br';

// @ts-ignore
const customPortugueseMessages: TranslationMessages = {
    ...ptBrMessages,
    pos: {
        menu: {
            cadastros: 'Cadastros',
            eventos: 'Eventos',
            artistas: 'Artistas',
            users: 'Usuários',
            contratos: 'Contratos',
        },
        backButton: 'Voltar',
    },
    resources: {
        evento: {
            name: 'Evento',
            namePlural: 'Eventos',
            fields: {
                nome: 'Nome',
                dataHora: 'Data e Hora',
                local: 'Local',
                descricao: 'Descrição',
            },
            form: {
                detalhes: 'Detalhes',
                descricao: 'Descrição',
                artistas: 'Artistas',
            }
        },
        artista: {
            name: 'Artista',
            namePlural: 'Artistas',
            fields: {
                nome: 'Nome',
                nacionalidade: 'Nacionalidade',
                dataNascimento: 'Data de Nascimento',
                biografia: 'Biografia',
                fotoUrl: 'Link da Foto',
                instagramUrl: 'Instagram',
                facebookUrl: 'Facebook',
                twitterUrl: 'Twitter',
                dataCriacao: 'Data de Criação',
            },
            form: {
                detalhes: 'Detalhes',
                biografia: 'Biografia',
                RedesSociais: 'Redes Sociais',
            }
        },
        users: {
            name: 'Usuário',
            namePlural: 'Usuários',
            fields: {
                username: 'Nome de Usuário',
                password: 'Senha',
                email: 'E-mail',
                dataCriacao: 'Data de Criação',
            },
            form: {
                detalhes: 'Detalhes',
                password: 'Senha',
                passwordConfirm: 'Confirmação de Senha',
            }
        }
    }
};

export default customPortugueseMessages;

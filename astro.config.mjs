// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

import tailwind from '@astrojs/tailwind';

import db from '@astrojs/db';
import markdoc from '@astrojs/markdoc';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
 site: 'https://gddocs.omgrod.me',
 base: 'gddocs2',
    integrations: [starlight({
        title: 'GD Docs',
        social: {
            github: 'https://github.com/withastro/starlight',
        },
        sidebar: [
            {
                label: 'Introduction',
                translations: {
                    pt: 'Introdução'
                },
                link: '/'
            },
            {
                label: 'Reference',
                translations: {
                    pt: 'Referência'
                },
                items: [
                    { 
                        label: 'Official Songs', 
                        translations: { pt: 'Músicas Oficiais' },
                        slug: 'reference/songs' 
                    },
                    { 
                        label: 'Secrets', 
                        translations: { pt: 'Segredos' },
                        slug: 'reference/secrets' 
                    },
                    { 
                        label: 'Keys', 
                        translations: { pt: 'Chaves' },
                        slug: 'reference/keys' 
                    },
                    { 
                        label: 'Salts', 
                        translations: { pt: 'Salts' },
                        slug: 'reference/salts' 
                    }
                ],
            },
            {
                label: 'Request',
                translations: {
                    pt: 'Pedido'
                },
                link: 'endpoints/generic'
            },
            {
                label: 'Credits',
                translations: {
                    pt: 'Créditos'
                },
                link: 'credits'
            },
            {
                label: 'Server',
                translations: {
                    pt: 'Servidor'
                },
                items: [
                    { 
                        label: 'Comment', 
                        translations: { pt: 'Comentário' },
                        slug: 'resources/server/comment' 
                    },
                    { 
                        label: 'Friend Request', 
                        translations: { pt: 'Pedido de Amizade' },
                        slug: 'resources/server/friendrequest' 
                    },
                    { 
                        label: 'Gauntlet', 
                        translations: { pt: 'Desafio' },
                        slug: 'resources/server/gauntlet' 
                    },
                    { 
                        label: 'Hashes', 
                        translations: { pt: 'Hashes' },
                        slug: 'resources/server/hashes' 
                    },
                    { 
                        label: 'Leaderboard Score', 
                        translations: { pt: 'Pontuação da Tabela de Classificação' },
                        slug: 'resources/server/leaderboardscore' 
                    },
                    { 
                        label: 'Level', 
                        translations: { pt: 'Nível' },
                        slug: 'resources/server/level' 
                    },
                    { 
                        label: 'List', 
                        translations: { pt: 'Lista' },
                        slug: 'resources/server/list' 
                    },
                    { 
                        label: 'Map Pack', 
                        translations: { pt: 'Pacote de Mapas' },
                        slug: 'resources/server/mappack' 
                    },
                    { 
                        label: 'Message', 
                        translations: { pt: 'Mensagem' },
                        slug: 'resources/server/message' 
                    },
                    { 
                        label: 'Song', 
                        translations: { pt: 'Música' },
                        slug: 'resources/server/song' 
                    },
                    { 
                        label: 'User', 
                        translations: { pt: 'Utilizador' },
                        slug: 'resources/server/user' 
                    },
                    { 
                        label: 'Restore', 
                        translations: { pt: 'Restaurar' },
                        slug: 'resources/server/restore' 
                    }
                ]
            },
            {
                label: 'Client',
                translations: {
                    pt: 'Cliente'
                },
                items: [
                    { 
                        label: 'Gamesave',
                        translations: { pt: 'Guardar Jogo' },
                        items: [
                            { 
                                label: 'Gamesave', 
                                translations: { pt: 'Guardar Jogo' },
                                slug: 'resources/client/gamesave' 
                            },
                            { 
                                label: 'Encoder Keys', 
                                translations: { pt: 'Chaves de Codificação' },
                                slug: 'resources/client/gamesave/kcek' 
                            },
                            { 
                                label: 'GS Values', 
                                translations: { pt: 'Valores GS' },
                                slug: 'resources/client/gamesave/gs_value' 
                            },
                            { 
                                label: 'GLM', 
                                translations: { pt: 'GLM' },
                                slug: 'resources/client/gamesave/glm' 
                            },
                            { 
                                label: 'Value Keeper', 
                                translations: { pt: 'Guardião de Valores' },
                                slug: 'resources/client/gamesave/valuekeeper' 
                            },
                            { 
                                label: 'Game Variables', 
                                translations: { pt: 'Variáveis do Jogo' },
                                slug: 'resources/client/gamesave/gv' 
                            },
                            { 
                                label: 'Achievements', 
                                translations: { pt: 'Conquistas' },
                                slug: 'resources/client/gamesave/achievement' 
                            },
                            { 
                                label: 'Quests', 
                                translations: { pt: 'Missões' },
                                slug: 'resources/client/gamesave/quests' 
                            },
                            { 
                                label: 'Platformer UI', 
                                translations: { pt: 'Interface de Plataforma' },
                                slug: 'resources/client/gamesave/dpad' 
                            },
                            { 
                                label: 'Smart Templates', 
                                translations: { pt: 'Modelos Inteligentes' },
                                slug: 'resources/client/gamesave/template' 
                            },
                            { 
                                label: 'Lists', 
                                translations: { pt: 'Listas' },
                                slug: 'resources/client/gamesave/list' 
                            },
                            { 
                                label: 'Enumerations', 
                                translations: { pt: 'Enumerações' },
                                slug: 'resources/client/gamesave/enums' 
                            },
                        ] 
                    }
                ]
            }
        ],			
        defaultLocale: 'root',
        locales: {
            root: {
              label: 'English',
              lang: 'en',
            },
            pt: {
              label: 'Português',
              lang: 'pt',
            },
        },
        }), mdx(), tailwind(), db(), markdoc(), partytown(), sitemap()],
    vite: {
        resolve: {
            alias: {
                '@': '/src',
            },
        },
    },
});
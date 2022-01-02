# Project - X

Данный проект несет за собой сугубо образовательный характер и не подразумевает получения финансовой выгоды.

Все наработки в рамках данного проекта являются достоянием общественности и разрешены для использования на сторонних ресурсах с обязательным указанием ссылки на оригинальный источник.

Для опубликования данной работы как полноценного игрового сервера необходимо предварительно связаться с **_[mo3g666](https://discordapp.com/users/297425280912588811/)_** или **_[Lev Angel](https://discordapp.com/users/821395962051559426/)_**.

---

## Инструкция по началу работы в проекте

1. Загрузите и установите на ваш компьютер [СУБД PostgreSQL](https://www.postgresql.org/download/)
2. Задайте пароль `Master Password` для установленного **СУБД**
3. Создайте новый **Fork** / **Clone** `master` ветки проекта
4. Создайте новую ветку в вашем **Fork**
5. Запустите установку необходимых модулей с помощью команды `npm install` или `yarn install` если вы используете **Yarn** (рекомендуется для использования в проекте)
6. В файле `.env` измените данные для подключения к созданной вами БД PostgreSQL, запустите команду `npx prisma migrate dev` и подтвердить сброс, если выявленно несоответсвтие схемы с вашей БД.
7. После установки всех модулей запустите команду `npm run watch`
8. В создавшуюся папку `dist` скопируйте оригинальные файлы `server-files` из каталога `ragemp` и так же запустите `npm install` или `yarn install`
9. Внесите и протестируйте ваши изменения (При изменении схемы Prisma, создания миграции или файла `.env` **необходимо перезапустить команду** `npm run watch`)
10. Загрузите изменения в ваш **Fork**
11. Создайте **Pull Request** в оригинальный репозиторий проекта

---

## Инструменты разработчика

> #### F5 - Noclip

---

## Команда проекта

> mo3g666 - [GitHub](https://github.com/mo3g666) | [Discord](https://discordapp.com/users/297425280912588811/)
>
> Lev Angel - [GitHub](https://github.com/mike-hammer) | [Discord](https://discordapp.com/users/821395962051559426/)

## Участники проекта

> SashaGoncharov19 - [GitHub](https://github.com/SashaGoncharov19) | [Discord](https://discordapp.com/users/314095628798001153/)
>
> 0x1b - [GitHub](https://github.com/exodie) | [Discord](https://discordapp.com/users/770344408222400524/)

## Источники

- [RageMP TypeScript by LeonardSSH](https://github.com/LeonardSSH/ragemp-typescript)
- [TypeScript](https://www.typescriptlang.org/)
- [Rage RPC by LeonardSSH](https://github.com/LeonardSSH/rage-rpc)
- [Prisma ORM](https://www.prisma.io/)

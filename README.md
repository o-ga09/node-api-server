# API Server with NodeJs

<img src="./doc/image.png">

<div align="center">TDDとクリーンアーキテクチャでつくるTodo アプリAPI</div>

---

## 🎉 使用イメージ

## ⚒️ 使用技術

<p>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/>
<img src="./doc/express.png" width="40" height="40">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/>
<img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/>
</p>

| スタック     | ツール名   |
| ------------ | ---------- |
| 言語         | typescript |
| ライブラリ   | exoress    |
| テストツール | Jest       |

## Set up

```bash
cd backend
make migrate
make up
```

## How to Run

```bash
cd backend
bun run dev
```

## How to test

```bash
cd backend
bu run test
```

## Post Condition

in Docker containainer terminal, stopped running db in ctrl + c .

```bash
make down
```

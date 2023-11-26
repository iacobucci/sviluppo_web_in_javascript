---
marp: true
---

<script src="../node_modules/mermaid/dist/mermaid.min.js"></script>

<script>mermaid.initialize({startOnLoad:true, theme:"forest", mirrorActors:false});</script>

<link rel="stylesheet" href="res/styles.css">

# Linux

È il sistema operativo di riferimento del corso per comandi shell, come sistema per **sviluppare** e per **distribuire** le applicazioni.

> Se usate Windows, occorre il Subsystem for Linux. Aprite Powershell come amministratore e digitate:
> ```powershell
> wsl --install # da eseguire da powershell, selezioniamo **debian**
> wsl # lancia la shell linux
> ```
> ```shell
> apt update
> apt install nodejs
> ```

> Mac os è un parente più stretto a Linux, potete usare le funzionalità Unix dal terminale ed installare node con Homebrew:
> ```shell
> /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
> brew install node
> ```

---

# Visual studio Code

Visual studio Code è un editor di testo (basato anche lui su Javascript!) con evidenziamento della sintassi, completamento automatico, debugger, integrazione con git e molto altro.

La palette dei comandi è accessibile per tutti con `ctrl+shift+p` o `cmd+shift+p`.

> Da windows installate l'estensione WSL e connettetevi al vostro sottosistema linux con `WSL: Connect to WSL` dalla palette dei comandi.

Installiamo le estensioni

- [Html CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

---

# Node.js

È un ambiente di esecuzione di Javascript. Può essere invocato da riga di comando con `node`. Usate il terminale di vscode (controllate nella palette comandi).

```shell
Welcome to Node.js v20.8.1.
Type ".help" for more information.
> console.log("Hello, world!")
```

Oppure può essere usato per eseguire script Javascript. Create un nuovo file in vscode con contenuto `console.log("Hello, World")` e salvatelo come `test1.js`:

```shell
node test1.js
```

Un programma Javascript è una sequenza di **istruzioni**, che sono eseguite in un ordine, e che possono modificare lo **stato** del programma.

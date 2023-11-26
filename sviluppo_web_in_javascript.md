---
marp: true
---

# Sviluppo web con Javascript
### Valerio Iacobucci ([@iacobucci](https//github.com/iacobucci))

<script src="node_modules/mermaid/dist/mermaid.min.js"></script>

<script>mermaid.initialize({startOnLoad:true, theme:"forest", mirrorActors:false});</script>

<style>
	.mermaid {
		display: flex;
		justify-content: center;
	}

	.container {
		display: flex;
		flex-direction: row; 
		align-items: center;
	}

	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 20px
	}
</style>

---

L'obiettivo del corso è imparare a sviluppare applicazioni web con gli strumenti più essenziali, moderni e facili da usare. Useremo Javascript per tutto il corso.

<div class="container">
<div class="content">

### C, basso livello

```c
#include <stdio.h>
#include <string.h>

int main(){
	char *s = "Hello, world!";
	printf("%s\n", s);
	int len = strlen(s);
	printf("%d\n");
}
```

Compilato, tipi statici + puntatori, gestione della memoria, imperativo, applicazioni di sistema.
</div>

<div class="content">

### Javascript, alto livello

```javascript
let s = "Hello, world!"
console.log(s)
let len = s.length
console.log(len)
```

Interpretato, tipi dinamici, garbage collection, imperativo + orientato agli oggetti + funzionale, applicazioni web (+ di sistema).

</div>
</div>

---

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

---

# Variabili

```javascript
let x; // dichiarazione di una variabile, inizialmente è **undefined**
let greeting = "Hello, world!"; // dichiarazione e inizializzazione, tipo stringa
let name = 'John' // tipo stringa, anche con singoli apici

let rad = 2; let pi = 3.1415 // tipo number, più istruzioni in linea
let isJsAwesome = true // tipo boolean (true o false), camelCase
let nullVariable = null // null

let greet_name = name + ", " + greeting; // concatenazione di stringhe, letterali
let degrees = 360 / (2 * pi) * rad /* operazioni aritmetiche, precedenza, 
commento multi linea */
let nan = 1/0 - 1/0 // Infinity - Infinity = NaN (Not a Number)
let isJsDull = !isJsAwesome; // negazione booleana, and: &&, or: ||

const PI = 3.1415; // costante, case sensitivity
x = 1; x = "1" // assegnamento, tipo dinamico, x è stata gia dichiarata e può essere riassegnata
PI = 4 // TypeError
x = PI % 1 // modulo, parte frazionaria, perdita di precisione, 0.14150000000000018 
```
Usare `console.log(<nome variabile>)` per stampare il valore di una variabile.

---

# Controllo del flusso

```javascript
if (age < 16)   { console.log("You can't drive"); }
else if (age < 21)   { console.log("You can drive but you can't Drink"); }
else   { console.log("You can drink and drive (don't)"); }
let canDrive = (age >= 16); let canDrink = (age >= 21); let canDriveCantDrink = canDrive && !canDrink;

let i = 2; let prime = true; let number = 11
while (true) { // condizione di ciclo sempre soddisfatta
	if ( i >= number) {
		break; // esci fuori dal ciclo
	}
	if ( number % i == 0 ) { // se i resto della divisione è zero
		prime = false; break; 
	}
	i = i + 1;
} // ternary operator, 
console.log( (prime) ? (number + " is prime") : (number + " is not prime"))

let line;
for (let x = 0; x < 10; x++) { // assegnamento, condizione di ciclo, istruzione a fine ciclo
	line = ""
	for (let y = 0; y < 10; y++) {
		linea += (x * y) + " ";
	}
	console.log(line); 
} 
```

---

Funzioni
Array ed oggetti
Classi
Asincronia
Alcune funzioni accessorie

---

# Internet e WWW

Internet è una rete di computer che comunicano tra loro.
World Wide Web è una applicazione di Internet che permette di scambiare documenti ipertestuali, che contengono link ad altri documenti.
WWW si basa su protocolli **client-server**. L'asinconia è fondamentale in quanto i server devono essere sempre in ascolto e devono gestire richieste contemporaneamente.

<div class="mermaid">
%%{init: {'theme': 'forest', 'mirrorActors': false} }%%
sequenceDiagram
    Client->>Server: richiesta
	activate Server
    Server->>Client: risposta
	deactivate Server
</div>

---

# Il browser web

Il browser è un programma che permette di fare richieste e visualizzare risposte.
Useremo il browser con gli **strumenti sviluppatore**, accessibili con il tasto F12, abbiamo a disposizione:

- la tab **network** per vedere le richieste e le risposte
- l'**inspector** per vedere e modificare il codice HTML
- lo **style editor** per vedere e modificare il codice CSS
- la **console** per eseguire codice javascript

---

# Http

HyperText Transfer Protocol è il protocollo per WWW.

```
GET / HTTP 1.1
Host: www.google.com
q=come+funziona+javascript
```

```html
<html>
	<style>
		/* codice css */
	</style>
		<!-- codice html-->
	...
	<div>Risultato di ricerca 1</div>
	<div>Risultato di ricerca 2</div>
	...
	<script>
		// codice javascript
	</script>
</html>
```

---

# Cosa fa il browser

Quando viene scaricata la risposta HTTP, il browser interpreta il codice che è arrivato.
1) carica il codice HTML nel **DOM** (Document Object Model)
2) mostra a schermo il **rendering** con lo stile CSS
3) **interpreta** il e il codice Javascript viene eseguito.

In più il browser gestisce gli **eventi** dell'utente, come il click del mouse o la pressione di un tasto. Alcuni eventi sono già definiti da elementi HTML ma se ne possono definire di nuovi con Javascript.

---

# Dom

Ha una struttura ad albero, ogni nodo è un elemento HTML.

<div class="container">
<div class="content">

```html
<body>
<button id="b1">Ottieni risultati</button>
<div class="container">
	<div class="content">
		<h1 style="color:red">Risultato 1</h1>
		<p>il risultato 1 è
		<a href="/risultati/1">questo</a></p>
	</div>
	<div class="content">
		<h1>Risultato 2</h1>
		<p>il risultato 2 è
		<a href="/risultati/2">questo</a></p>
	</div>
</div>
</body>
```
</div>

<div class="content">

<div class="mermaid">
%%{init: {'theme': 'forest', 'mirrorActors': false} }%%
flowchart TD
	K[body] --> A
	K --> J
	J[button]
	A[div] --> B[div]
	A --> C[div]
	B --> D[h1]
	B --> E[p]
	E --> F[a]
	C --> G[h1]
	C --> H[p]
	H --> I[p]
</div>
</div>

</div>

Gli elementi di tipo anchor hanno un **attributo** href con l'indirizzo del link.

---

# Css

Cascading Style Sheets è un linguaggio per descrivere lo stile di un documento HTML.

```css
h1 { color: blue; }

.container{ display: flex; align-items: center; flex-direction: row; }

.content{ display: flex; width: 100%; align-items: center; flex-direction: column; }

#b1{ width: 100%; height: 50px; }
```
- **classe** `.container` e `.content` sono le classi per contenitore e contenuto (provare ad innestare e a modificare regole tramite strumenti di sviluppo)
- **id** `#b1` identifica un elemento
- **elemento** `h1` mette a default il colore di tutti gli h1
- **stile inline** `style="color:red"` ha la precedenza su tutte le regole.


---

# Javascript nel browser

L'oggetto `document` rappresenta il DOM.

```javascript
document.getElementById("b1").onclick = function(){
	document.getElementById("b1").innerHTML = "Ottenimento dei risultati...";
} // cambia il testo del bottone al suo evento onclick


// utilizziamo fetch per fare richieste, al posto di form http o Ajax


// il popolamento della pagina sarebbe scomodo con javascript puro per questo useremo un framework


```

---

Json
I pacchetti Npm
Lo stack tecnologico
Svelte
Express
Sequelize
Il controllo di versione
La repository
La piattaforma di hosting

---

# Come andare oltre

- **Documentazione ufficiale** per capire come funziona un modulo o un linguaggio.
- **Stackoverflow** per risposte autorevoli.
- **ChatGPT** (o altri llm) per generare codice, test, documentazione e spiegazioni.
- **GitHub** per cercare esempi di codice gia funzionante, cercare problemi simili negli issues
- **Esperimenti**, il costo di un esperimento nell'informatica è davvero minimo.
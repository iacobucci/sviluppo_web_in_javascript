---
marp: true
---

<script src="../node_modules/mermaid/dist/mermaid.min.js"></script>

<script>mermaid.initialize({startOnLoad:true, theme:"forest", mirrorActors:false});</script>

<link rel="stylesheet" href="res/styles.css">

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
Host: www.google.com/search?q=come+funziona+javascript
```

ci connettiamo a `www.google.com`, chiediamo la pagina `/search` e passiamo il parametro `q` con valore `come funziona javascript`.


```html
<html>
	<style> /* codice css */ </style>
	<!-- elementi html -->
	<body>
		<div>Risultato di ricerca 1</div>
		<div>Risultato di ricerca 2</div>
		...
	</body>
	<script> // codice javascript </script>
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
	...
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
- **classe** `.container` e `.content` sono le classi per contenitore e contenuto
- **id** `#b1` identifica un elemento
- **elemento** `h1` mette a default il colore di tutti gli h1
- **stile inline** `style="color:red"` ha la precedenza su tutte le regole.

Provate ad innestare elementi container e content, e a modificare le regole css.

---

# Javascript nel browser

L'oggetto `document` rappresenta il DOM.

```javascript
document.getElementById("b1").onclick = function(){
	document.getElementById("b1").innerHTML = "Ottenimento dei risultati...";
} // cambia il testo del bottone al suo evento onclick

// ottieni i children di un elemento


// utilizziamo fetch per fare richieste, al posto di form http o Ajax


// il popolamento della pagina sarebbe scomodo con javascript puro per questo useremo un framework


```

---

# Resa grafica

<html>

<div style="border: 3px solid #224466; padding: 20px; margin-bottom: 20px;">
	<button id="b1_mock">Ottieni risultati</button>
	<div class="container_mock">
		<div class="content_mock">
			<h1 style="color: red">Risultato 1</h1>
			<p>il risultato 1 è
			<a href="/risultati/1">questo</a></p>
		</div>
		<div class="content_mock">
			<h1 class="h1.mock">Risultato 2</h1>
			<p>il risultato 2 è
			<a href="/risultati/2">questo</a></p>
		</div>
		<div class="content_mock">
			<h1 class="h1.mock">Risultato 3</h1>
			<p>il risultato 3 è
			<a href="/risultati/3">questo</a></p>
		</div>
		<div class="content_mock">
			...
		</div>
	</div>
</div>

<style>
	.h1_mock {
		color: blue;
	}
	
	.container_mock{
		display: flex;
		align-items: center;
		flex-direction: row;
	}
	.content_mock{
		display: flex;
		width: 100%;
		align-items: center;
		flex-direction: column;
	}

	#b1_mock{
		width: 100%;
		height: 50px;
	}
</style>
</html>

Il risultato è gia una *single page application*, ma non è dinamica

---
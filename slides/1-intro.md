---
marp: true
---

<script src="../node_modules/mermaid/dist/mermaid.min.js"></script>

<script>mermaid.initialize({startOnLoad:true, theme:"forest", mirrorActors:false});</script>

<link rel="stylesheet" href="res/styles.css">

# Sviluppo web con Javascript
### Valerio Iacobucci ([@iacobucci](https://github.com/iacobucci))


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
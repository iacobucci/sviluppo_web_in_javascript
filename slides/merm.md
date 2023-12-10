```mermaid
%%{init: {'theme': 'neutral', 'mirrorActors': false} }%%
flowchart LR
	Utente

	subgraph "Modello"
		Model
		Controller

		subgraph "Frontend"
			View
		end

		subgraph "Backend"
			Model --> Controller
			Controller --> Model
		end

		Controller -->|risposta| View
	end

	Utente -->|richiesta| Controller
	Utente -->|vede| View
```
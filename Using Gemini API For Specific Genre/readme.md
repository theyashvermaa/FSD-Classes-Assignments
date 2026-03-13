# Problem Statement:
How can we build an AI assistant that explains WWE storylines purely within the fictional world (kayfabe), without revealing real-life identities, backstage details, or production realities?

# Approach:
The solution follows a domain-restricted AI assistant approach.

Step 1 — Define the AI’s Role
We first define a system instruction that tells the AI to behave like a WWE storyline historian. This ensures the AI responds from the perspective of the fictional narrative.

Step 2 — Restrict the Domain
The prompt explicitly tells the AI to avoid: real names, backstage decisions, production details, contract information.
This keeps the conversation inside the storyline universe.

Step 3 — Structure the Responses
We guide the AI to respond using a fixed structure such as: storyline context, key moments, current impact.
This makes answers clearer and easier to understand.

Step 4 — Handle Out-of-Scope Questions
If a user asks about real-life details, the AI politely refuses and reminds them that it focuses only on WWE storyline narratives.

# Solution
The solution is to build a domain-restricted AI assistant that only talks about WWE storylines and treats them as part of a fictional universe.
We achieve this using prompt engineering and API integration with Gemini API.

Step 1 — Define a System Prompt
We provide the AI with a system instruction that clearly defines its role.
For example, the AI is instructed to behave like a WWE storyline historian and to explain rivalries, championships, and character arcs as part of the fictional universe of WWE.
This prompt also includes strict rules such as: do not reveal real names, do not discuss backstage or production details, treat all events as real within the storyline universe.

Step 2 — Combine Instructions with the User Query
When a user asks a question, the system sends two things to the AI model:The system prompt (instructions that control behavior), The user’s question, This ensures the AI always answers within the correct context.

Step 3 — Generate Structured Responses
The AI is instructed to respond in a clear format such as: Storyline context, Key moments in the rivalry, Current or lasting impact in the WWE universe, This makes answers easy to understand and consistent.

Step 4 — Handle Out-of-Scope Questions
If a user asks something like: “What is the real name of this wrestler?”
The AI politely responds that it only discusses storyline events within the WWE universe.

This keeps the experience immersive for fans.

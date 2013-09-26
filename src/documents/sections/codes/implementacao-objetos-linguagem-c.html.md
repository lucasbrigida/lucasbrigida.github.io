```
title: Implementação de objetos em linguagem C
layout: post
sections: ['codes']
tags: ["C language", "linguagem C", "objects"]
description: "Os desenvolvedores hoje contam com inúmeras linguagens orientadas à objeto, como Java, Python, Ruby, Javascript. Mas como isso funciona, acho que boa parte dos desenvolvedores já fizeram esta pergunta e não souberam responder. Realizando algumas buscas descobri como métodos são adicionados em uma estrutura em C"
banner: c_language.jpg
```

Os desenvolvedores hoje contam com inúmeras linguagens orientadas à objeto, como Java, Python, Ruby, Javascript. Mas como isso funciona, acho que boa parte dos desenvolvedores já fizeram esta pergunta e não souberam responder.
Realizando algumas buscas descobri como métodos são adicionados em uma estrutura em C, linguagem base para desenvolvimento de interpretadores e compiladores de linguagens orientadas a objeto.

<pre><code class="lang-cpp">#include <stdio.h>

void name(){
	printf("Rex");
}

typedef struct{
	char *_name;
	void (*name)(void);
}Animal;


int main()
{

	Animal dog;
	dog.name = &name;
	dog.name();

    return 0;
}</code></pre>
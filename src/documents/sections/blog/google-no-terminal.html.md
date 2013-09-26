```
title: Google no terminal
layout: post
sections: ['blog']
tags: ["google", "terminal"]
description: "É comum principalmente quando não conhecemos um programa e várias saídas de erro desconhecidas aparecem no terminal buscarmos  no Google."
banner: google.gif
```

<center><img src="/blog/images/banner/google.gif" height="200px"></center>

É comum principalmente quando não conhecemos um programa e várias saídas de erro desconhecidas aparecem no terminal buscarmos  no Google.

Vamos à um simples tutorial de como fazer esta mágica (Google no terminal).

Abra o editor de texto de sua preferência o arquivo “~/.bashrc”
<pre><code class="lang-bash">gedit ~/.bashrc</code></pre>

Ao final do arquivo adicione as seguintes linhas e salve:
<pre><code class="lang-bash">google() {
search=”"
echo “$1″
for term in $*; do
search=”$search%20$term”
done
xdg-open “http://www.google.com/search?q=$search&#8221;
}
</code></pre>

Agora execute no terminal:
<pre><code class="lang-bash">source ~/.bashrc</code></pre>

Vamos testar! Abra o terminal.
<pre><code class="lang-bash">google google no terminal</code></pre>

Se ocorreu algum problema e nenhum navegador apareceu no site do google com a frase à ser pesquisada. Então troque no código que adicionamos no ~/.bashrc os seguintes termos:

“xdg-open” por mozilla ou google chrome

Execute novamente o comando:
<pre><code class="lang-bash">source ~/.bashrc</code></pre>

E teste novamente:
<pre><code class="lang-bash">google codebroken google no terminal</code></pre>

Para pesquisar a saída de erro direto sem precisar copiar a saída de erro e digitar google no terminal, não fazendo sentido fazer este processo.

Então, execute o comando abaixo junto com as crases, substituindo a palavra command pelo nome do programa que está apresentando erros.
<pre><code class="lang-bash">google `command`</code></pre>

Caso apareça várias saídas e você deseja pesquisar uma delas, é interessante utilzar o grep com expressão regular ou alguma palavra que diferencie das outras saídas de erro:
<pre><code class="lang-bash">google `command | grep erro 01`</code></pre>
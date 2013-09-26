```
title: Instalando driver para placas wireless no linux
layout: post
sections: ['blog']
tags: ["driver", "linux", "wireless"]
description: "Placas wireless sempre são problemas, quando não há suporte padrão em distribuições linux. Um tutorial rápido de como resolver este problema."
```

Placas wireless sempre são problemas, quando não há suporte padrão em distribuições linux.

Um tutorial rápido de como resolver este problema.

#### 1º Passo

Abra o terminal, obtenha acesso de root com o comando “su” e execute:
<pre><code class="lang-bash">lshw -C network</code></pre>

Caso o programa não esteja instalado. Execute:
<pre><code class="lang-bash">apt-get install lshw</code></pre>

Após instalar, execute:,
<pre><code class="lang-bash">lswh -C network</code></pre>

Deverá aparecer as placas reconhecidas pelo sistema
Na descrição de sua placa wireless, guarde o nome do módulo e do fabricante, vem logo após as palavras “product” e “vendor“. Acesse o site do fabricante do módulo e baixe o driver correspondente ao módulo.

#### 2º Passo

Abra o terminal novamente e execute:
<pre><code class="lang-bash">su
apt-get install ndiswrapper-utils-1.9
apt-get install ndisgtk
</code></pre>

#### 3º Passo
Após instalados, execute:
<pre><code class="lang-bash">ndisgtk</code></pre>
Clique no botão instalar driver e escolha o arquivo correspondente ao driver (as extensões dos arquivos de driver geralmente são .inf .sys).

Seu driver após este passo estará instalado com sucesso.

Agora abra seu gerenciador de redes e espere até achar uma rede Wifi, caso o gerenciador não detecte a presença da placa reinice o sistema.
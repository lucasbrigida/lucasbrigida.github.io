```
title: Usando Glade e python
layout: post
sections: ['blog']
tags: ["glade", "gtk", "python"]
description: "Glade é um construtor de interfaces em GTK, no momento ele está em sua 3º versão, sua função é muito “simples” gerar interfaces de forma intuitiva e salvando as especificações de cada objeto em um xml que é nomeado com a extensão “.glade”."
banner: glade.png
```

<center><img src="/blog/images/banner/glade.png" height="315px"></center><br>

[Glade](http://en.wikipedia.org/wiki/Glade_Interface_Designer) é um construtor de interfaces em GTK, no momento ele está em sua 3º versão, sua função é muito “simples” gerar interfaces de forma intuitiva e salvando as especificações de cada objeto em um xml que é nomeado com a extensão “.glade”.
Apoós gerar o arquivo “.glade” é que vem a mágica, com a libglade biblioteca que está disponível em diversas linguagens, é possível gerar toda a interface com todos os objetos devidamente configurados em tempo de execução, não gerando códigos enormes e “sujos” que obrigatoriamente ficariam em um arquivo de código,  deixando o código do seu programa grande e confuso e de difícil manutenção.
A algumas horas atrás antes de escrever este post estava aprendendo a utilizar a libglade de fato, depois de anos sabendo de sua existência. Cheguei a fazer um programa em C com a libglade mas o perdi pois já faz um tempo que o escrevi, hoje irei deixar as fontes que achei e mostrar  o meu processo de busca e escrita do código, que não passa de uma janelinha de login, bem simples.

Bom sabendo um pouco do caminho ficou fácil, então vamos começar por este tutorial do [wiki](http://www.cin.ufpe.br/~cinlug/wiki/index.php/Mantendo_A_Sanidade_Com_O_Glade) do pessoal da UFPE, nele há uma ótima explicação de como é funcionamento das interfaces gráficas e como é o funcionamento do Glade e da libgade, contando com vários códigos em diversas linguagens utilizando o mesmo arquivo glade para gerar as interfaces gráficas,  isso tudo para provar a portabilidade do código e de como esta ferramenta de programação é incrível. Bom após ler todo o artigo copiei o exemplo do arquivo glade e o código em python, instalei as bibliotecas e o glade (os nomes dos pacotes estão no final deste post) e rodei o programa, funcionou muito bem.

Dando mais uma pesquisada achei mais um [exemplo](http://blog.ogmaciel.com/?p=413) com um vídeo tutorial, a moleza é que o autor já empacotou o código e o glade, então foi só rodar. E por fim uma [apostila](http://gtk-br.welrbraga.eti.br/tutorial/tutorialglade-20040727.pdf) que apesar de antiga serve muito bem para quem está aprendendo a utilizar a libglade e o glade.

Bom depois desta chuva de material vou deixar mais um exemplo pra vocês analisarem o código e o arquivo glade.

A única observação que irei fazer é com relação a estas linhas abaixo:
<pre><code class="lang-python">def login(self,widget,data):
diag=gtk.MessageDialog(self.mainWindow, gtk.DIALOG_MODAL,gtk.MESSAGE_INFO,gtk.BUTTONS_OK)
diag.set_markup("Login realizado com sucesso!")
diag.run()
diag.destroy()
</code></pre>

Diferente dos outros objetos que foram gerados pela libglade, a caixa de diálogo que criei estanciando uma caixa de mensagem disponível pela biblioteca pygtk por mera praticidade, já que era mais fácil do que esboçar uma com o glade. Para criar esta caixa eu utilizei das seguintes fontes abaixo, contém um exemplo e a especificação da função.

Exemplo 01 – Caixa de diálogo (http://www.python.org.br/[wiki](http://www.cin.ufpe.br/~cinlug/wiki/index.php/Mantendo_A_Sanidade_Com_O_Glade)/PyGtkMensagens)
Especificação da função (http://www.pygtk.org/docs/pygtk/class-gtkmessagedialog.html)

Os pacotes no linux(Ubuntu) necessários para desenvolver com python e libglade são:

1. python-glade2
2. python-gtk2
3. glade

O meu exemplo encontra-se [aqui](https://docs.google.com/open?id=0B4PYBc6PpRQCY2ZiZjljOWMtMmM3OS00MjRmLTk2M2EtYjA3ZTIwYzEyM2Mw).

Projeto [Glade](http://glade.gnome.org/)
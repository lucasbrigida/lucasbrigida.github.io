```
title: Puppet - Tutorial
layout: post
sections: ['blog']
tags: ["puppet"]
description: "Para um administrador de rede é sempre muito complicado atualizar suas máquinas, sempre é preciso criar scripts para automatizar simples tarefas de instalação e configuração de programas e serviços dos sistemas. Quando a rede utiliza máquinas com sistemas operacionais distintos a situação complica, eis uma solução!"
banner: puppet.png
```

Para um administrador de rede é sempre muito complicado atualizar suas máquinas, sempre é preciso criar scripts para automatizar simples tarefas de instalação e configuração de programas e serviços dos sistemas. Quando a rede utiliza máquinas com sistemas operacionais distintos a situação complica, eis uma solução!

Puppet, esta ferramenta  foi desenvolvida para facilitar a  manutenção de máquinas com S.O diversos, seu funcionamento é bastante simples.
As máquinas que precisam de manutenção, é instalado o cliente puppet, e uma ou mais máquinas é designada à ser o servidor puppet.
Bom quando tudo instalado, o cliente fica requerendo ao servidor “comandos de ação”,  estes comandos o cliente lê e executa independente da plataforma operacional, assim não é preciso criar uma aplicativo para realizar a manutenção em diversos S.O.
A seguir demonstrarei como instalar e configurar o puppet na máquina cliente e no servidor em sistemas baseados no Debian, algumas modificações nestas etapas você deverá considerar ao utilizar um sistema que não seja o Debian 6 – Squeeze.

### No Cliente  Puppet, execute na linha de comando:

#### 1º Passo

<pre><code class="lang-bash">su
deb http://ftp.de.debian.org/debian squeeze main >> /etc/apt/sources.list
apt-get install -y puppet  facter
</code></pre>

<div class="alert alert-warning">A opção “-y”, confirma automaticamente todos os pedidos de confirmação de instalação</div>

#### 2º Passo
É aconselhável que configure as chamadas de serviço DNS, em /etc/hosts, edite como root, acrescentando e/ou modificando  as seguintes linhas:

<pre><code class="lang-bash">127.0.1.1 nomedocliente.nomedarede.dominio nomedocliente
ip.do.servidor nomedoservidor.nomedarede.dominio puppet
Onde “nomedarede”, se não configurado adote qualquer nome.
Onde “dominio”, se não configurado adote qualquer um entre (“.net”,”.com”, entre outros).
</code></pre>

<div class="alert alert-warning">Importante: O “nomedarede” e o “dominio” deve ser igual ao adotado na configuração do servidor que será mostrada na configuração do servidor puppet.</div>

#### 3º Passo
Após a instalação dos pacotes edite o arquivo <strong>/etc/default/puppet</strong> como <strong>root</strong>, na linha onde estiver <strong>START=no</strong>, modifique para <strong>START=yes</strong> , salve o arquivo.

#### 4º Passo
Agora abra este arquivo <strong>puppetd.conf</strong> como <strong>root</strong>, no seguinte diretório /etc/puppet , e adicione as seguintes linhas:

<pre><code class="lang-bash">[puppetd]
server= endereço do server
</code></pre>

### No servidor Puppet, execute na linha de comando:

#### 1º Passo
<pre><code class="lang-bash">su
deb http://ftp.de.debian.org/debian squeeze main >> /etc/apt/sources.list
apt-get install -y puppet  facter
</code></pre>

<div class="alert alert-warning">A opção “-y”, confirma automaticamente todos os pedidos de confirmação de instalação</div>

#### 2º Passo
É aconselhável que configure as chamadas de serviço DNS, em <strong>/etc/hosts</strong>, edite como <strong>root</strong>, acrescentando e/ou modificando  as seguintes linhas:

<pre><code class="lang-bash">127.0.1.1 nomedoservidor.nomedarede.dominio puppet
ip.do.servidor nomedoservidor.nomedarede.dominio puppet
</code></pre>

<div class="alert alert-warning">Onde “nomedarede”, se não configurado adote qualquer nome.
Onde “dominio”, se não configurado adote qualquer um entre (“.net”,”.com”, entre outros).</div>

#### 3º Passo
No arquivo <strong>/etc/puppet/manifests/site.pp</strong> (provavelente site.pp não estará criado, crie-o)
E escreva o texto a seguir:

<pre><code class="lang-ruby"># Create “/tmp/testfile” if it doesn’t exist.
class test_class {
	file { “/tmp/testfile”:
	ensure => present,
	mode   => 644,
	owner  => root,
	group  => root
	}
}
# tell puppet on which client to run the class
node pclient {
	include test_class
}
</code></pre>

#### 4º Passo
…na linha de comando execute como <strong>root</strong>
<pre><code class="lang-bash">service puppetmaster restart>> Iniciando o sistema Puppet</code></pre>

+	No cliente execute:
		<pre><code class="lang-bash">puppetd –server nomedorservidor.nomedarede.dominio –waitforcert 60 –test</code></pre>

		Algumas mensagens como estas, podem aparecer, não se preocupe pois é assim mesmo quando é efetuado o primeiro contato entre um cliente/servidor Puppet.
		<div class="alert alert-info">err: No certificate; running with reduced functionality.
		info: Creating a new certificate request for pclient.example.con
		info: Requesting certificate
		warning: peer certificate won’t be verified in this SSL session
		notice: Did not receive certificate</div>

+	No servidor execute:
		<pre><code class="lang-bash">puppetca –list</code></pre>

		…deverá aparecer a linha a seguir:
		<div class="alert alert-info">nomedocliente.nomedarede.dominio</div>

		Ainda no servidor, execute:
		<pre><code class="lang-bash">puppetca –sign nomedocliente.nomedarede.dominio</code></pre>

		Algumas mensagens podem ser exibidas, não se preocupe são absolutamente normais,
		<div class="alert alert-info">info: Requesting certificate
		warning: peer certificate won’t be verified in this SSL session
		notice: Ignoring –listen on onetime run
		info: Caching configuration at /etc/puppet/localconfig.yaml
		notice: Starting configuration run
		notice: //pclient/test_class/File[/tmp/testfile]/ensure: created
		info: Creating state file /var/lib/puppet/state/state.yaml
		notice: Finished configuration run in 0.11 seconds</div>

#### 5º Passo
Testando se funcionou, procure pelo arquivo /tmp/testfile, na linha de comando é:
<pre><code class="lang-bash">ls -l /tmp/testfile</code></pre>
Se este arquivo estiver, na máquina cliente o puppet está configurado, mas é recomendado ler e configurar com mais detalhes o arquivo <strong>/etc/puppetd.conf</strong>, com os parâmetros sugeridos pelo comando <strong>puppet agent –genconfig</strong> para a máquina cliente e <strong>puppet master –genconfig</strong> para o servidor.

### Conclusão
O Puppet sincroniza os dados a cada  30 minutos e quando a máquina cliente é ligada, por padrão caso está configuração não o atende leia a documentação em http://docs.puppetlabs.com/.
Para  alguns esclarescimentos é possível acessar este vídeo, que ensina como configurar o puppet em http://www.youtube.com/watch?v=US8ZpjgEhUg.
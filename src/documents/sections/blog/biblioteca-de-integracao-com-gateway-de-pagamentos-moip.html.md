```
title: Biblioteca de integração com gateway de pagamentos Moip
layout: post
sections: ['blog']
tags: ['nodejs','moip',"library"]
description: "Desenvolvendo uma aplicação que necessitava receber uma determinada quantia utilizando Node JS, escolhi o Paypal para realizar a integração mas depois de ler uma documentação ruim e perceber que não atendia as minhas exigências e aliado a minha restrição de investimento financeiro e temporal, resolvi buscar um outro serviço, e encontrei o MOIP, também não […]"
banner: logo-moip.png
```

Desenvolvendo uma aplicação que necessitava receber uma determinada quantia utilizando [Node JS](http://nodejs.org/), escolhi o Paypal para realizar a integração mas depois de ler uma documentação ruim e perceber que não atendia as minhas exigências e aliado a minha restrição de investimento financeiro e temporal, resolvi buscar um outro serviço, e encontrei o [MOIP](http://moip.com.br/), também não havia um SDK padrão para Node JS, mas há um repositório que possuía um [exemplo](https://github.com/moiplabs/moipjs) de como realizar a integração enviando XML(WTF?), mas é funcional e simples, melhorando aquele exemplo fiz uma interface para o serviço para quem desenvolve utilizando Node JS, está longe de ser um SDK padrão mas facilita e muito as minhas integrações com o serviço.

Para saber como realizar a integração, acesse no repositório do ([node-moip](https://github.com/lucasbrigida/node-moip)) há todas as informações e exemplos.

- [MOIP API](http://labs.moip.com.br/playground/basica)
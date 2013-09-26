```
title: Callback em linguagem C
layout: post
sections: ['codes']
tags: ["C language", "linguagem C", "callback"]
description: "Ultimamente tenho trabalhado com Node JS, e os conceitos de processamento assíncrono  do javascript em  uma event machine como a V8  são espetaculares no navegador e nativo com Node JS. Abordando apenas o conceito de callback"
banner: c_language.jpg
```

Ultimamente tenho trabalhado com Node JS, e os conceitos de processamento assíncrono  do javascript em  uma event machine como a V8  são espetaculares   no navegador e nativo com Node JS.
Abordando apenas o conceito de callback, onde uma função A recebe como parâmetro uma outra função B que será invocada após ou durante a execução de A. Abaixo está um código que fiz.

<pre><code class="lang-cpp">#include <stdio.h>

void foo(int);
void testCallback(int, void (*)(int));

int main(int argc, char **argv){

  testCallback(1000000, &foo);
  printf("[Main function]: I'm main function!\n");
	testCallback(100000, &foo);
	
  return(0);
}

void foo(int num){
  printf("[foo function]: I'm callback!, Parameters[ num=%d ]\n",num);
}

void testCallback(int num, void (*callback)(int)){
   int i;
   
   for(i=0; i < num; i++);
 
  return(callback(num));
}</code></pre>
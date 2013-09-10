---
title: Playing with Canvas - Gears
layout: post
sections: ['experiences']
tags: ['canvas', 'gears']
---

<h4>Exemplo</h4>
<iframe src="/experiences/canvas/canvas01.html" class="col-lg-12" height="260" seamless></iframe>
<h4><i class="icon-code"></i> Código</h4>
<textarea class="col-lg-12 source-code" data-src="/experiences/canvas/canvas01.html" style="height:600px;"></textarea>

<p>Developed by <a href="http://www.html5canvastutorials.com/labs/html5-canvas-gears/">html5canvastutorials</a></p>

<h4>Modificando...</h4>
<ol>
  <li>Colocar as 4 engrenagens alinhadas e sincronizadas
    <div class="row">
      <div class="col-lg-6"><iframe src="/experiences/canvas/canvas01_m1.html" class="col-lg-12" height="270" seamless></iframe></div>
      <div class="col-lg-6"><textarea class="source-code" rows="13" style="width:100%;" data-src="/experiences/canvas/canvas01_m1.html"></textarea></div>
    </div>
  </li>
  <li>Alterar a ordem das engrenagens
    <div class="row">
      <div class="col-lg-6"><iframe src="/experiences/canvas/canvas01_m2.html" class="col-lg-12" height="270" seamless></iframe></div>
      <div class="col-lg-6"><textarea class="source-code" rows="13" style="width:100%;" data-src="/experiences/canvas/canvas01_m2.html"></textarea></div>
    </div>
  </li>
  <li>Inserir outras engrenagens não alinhadas
    <div class="row">
      <div class="col-lg-6"><iframe src="/experiences/canvas/canvas01_m3.html" class="col-lg-12" height="270" seamless></iframe></div>
      <div class="col-lg-6"><textarea class="source-code" rows="13" style="width:100%;" data-src="/experiences/canvas/canvas01_m3.html"></textarea></div>
    </div>
  </li>
  <li>Alterar a cor das engrenagens
    <div class="row">
      <div class="col-lg-6"><iframe src="/experiences/canvas/canvas01_m4.html" class="col-lg-12" height="270" seamless></iframe></div>
      <div class="col-lg-6"><textarea class="source-code" rows="13" style="width:100%;" data-src="/experiences/canvas/canvas01_m4.html"></textarea></div>
    </div>
  </li>
  <li>Alterar o tamanho de, pelo menos, uma engrenagem
    <div class="row">
      <div class="col-lg-6"><iframe src="/experiences/canvas/canvas01_m5.html" class="col-lg-12" height="270" seamless></iframe></div>
      <div class="col-lg-6"><textarea class="source-code" rows="13" style="width:100%;" data-src="/experiences/canvas/canvas01_m5.html"></textarea></div>
    </div>

  </li>
</ol>

<!-- Fill souce code for textarea[class="source-code"] -->
<script>window.document.addEventListener("DOMContentLoaded", function(){
  window.jQuery('textarea[class~="source-code"]').each(function(){
    var e = $(this)
      , src = $(this).attr("data-src");
      $.get(src, function(res){
        e.text(res);
      });
  });
}, false);</script>
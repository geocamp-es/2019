---
layout: page
title: Dónde comer
short-title: Comer
permalink: /donde-comer/
map:
  title: Restaurantes
  center: [ -0.464481, 39.436695] 
  zoom: 16.25
  style: https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json
  features:
    - title: Geocamp
      description: Museu Comarcal de L'Horta Sud
      lnglat: [-0.4623537, 39.4353180]
      osm_id: 1761630527
      icon: geocamp
      size: 30
      nolabel: true

    - title: Cafetería
      description: Centre Social, 606 922 025, Menú 7€ aprox.
      lnglat: [-0.4618341, 39.4352965]
      osm_id: 6472224603
      icon: restaurant
      size: 15

    - title: La plaza
      description: 961 562 401, Menú 10€ aprox.
      lnglat: [-0.4635978, 39.4368193]
      icon: restaurant
      osm_id: 6472214052
      size: 15

    - title: Açó no és el que pareix
      description: 617 435 299
      lnglat: [-0.4635736, 39.4375840]
      icon: restaurant
      osm_id: 6472214053
      size: 15    
     
    - title: Casa El Chesus
      description: 961 571 452, Menú 9€ aprox., para grupos es recomendable reservar
      lnglat: [-0.4620483, 39.4420153]
      icon: restaurant
      osm_id: 6472214058
      size: 15
     
    - title: Farigola & Menta
      description: 961 177 258, Menú 13€ aprox., tienen opción vegetariana
      lnglat: [-0.4660537, 39.4353369]
      icon: restaurant
      osm_id: 6472214056
      size: 15
      
    - title: Casa Agustín
      description: "961 555 526, 3 Menus: 13€ 20€ y 28€"
      lnglat: [-0.4646362, 39.4379054]
      icon: restaurant
      osm_id: 6472214055
      size: 15
      
    - title: Casa Lluïset
      description: 960 888 665, Menú 18€ aprox.
      lnglat: [-0.4637530, 39.4373383]
      icon: restaurant
      osm_id: 6472214054
      size: 15      
---

<ul>{%- for restaurant in page.map.features -%}{%- if restaurant.icon == "restaurant" -%}
<li>
  <strong>{{restaurant.title}}</strong>: 
  {{restaurant.description}} |
  <a href="#19/{{restaurant.lnglat[1]}}/{{restaurant.lnglat[0]}}">
    <i class="far fa-map" alt="Centrar en el mapa"></i>
  </a> |
  <a href="https://www.openstreetmap.org/node/{{restaurant.osm_id}}">
    <img style="width:15px;" src="{% link assets/imgs/logos/osm-simple.svg %}" alt="Más info en OSM">
  </a>
</li>
{%- endif -%}{%- endfor -%}
</ul>


## Mapa

<div id="map"></div>

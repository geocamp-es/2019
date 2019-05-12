---
layout: page
title: Equipo
permalink: /equipo/
team:
    - name: Carles Boils
      github: sliob
      linkedin: https://www.linkedin.com/in/cboils/
      twitter: CarlesNinot
    - name: Jorge Sanz
      github: jsanz
      linkedin: https://www.linkedin.com/in/jsanz/
      twitter: xurxosanz
    - name: Laia Linares
      github: laialo
      linkedin: https://www.linkedin.com/in/laialinaresortells/
      twitter: lalinort
    - name: Manel Alemany
      github: Manalemart
      linkedin: https://www.linkedin.com/in/manel-alemany-mart%C3%ADnez-67b3256b/
      twitter: Cranemania
    - name: Pedro-Juan Ferrer
      github: vehrka
      linkedin: https://www.linkedin.com/in/pedrojuanferrer/
      twitter: vehrka
    - name: Rafael Oliete
      github: raolbaletco
      linkedin: https://www.linkedin.com/in/raolbal/
      twitter: raolbaletco
    - name: Rafael Sierra
      github: rafasierra
      linkedin: https://www.linkedin.com/in/rafael-sierra-requena-73a10236/
---


Geocamp 2019 está coordinado por un equipo formado por miembros de [Geoinquietos Valencia](http://geoinquietos.org/grupos/valencia/) con la colaboración inestimable del resto de la comunidad de Geoinquietos y organizadores de pasadas ediciones de Geocamp España.

<div class="gallery">
  {% for member in page.team %}
  <div class="card">
      <div>
        {%- if member.github -%}
          {%- avatar user=member.github size=150 -%}
        {%- else -%}
          <img src="https://placekitten.com/g/150/150" alt="no github">
        {%- endif -%}
      </div>
      <div>
          <p>{{member.name}}<br>
          {%- if member.twitter -%}
          <a href="https://twitter.com/{{member.twitter}}">
              <svg class="svg-icon">
                <use xlink:href="{{ '/assets/minima-social-icons.svg#twitter' | relative_url }}">
                </use>
              </svg>
          </a>
          {%- endif -%}
          {%- if member.github -%}
          <a href="https://github.com/{{member.github}}">
              <svg class="svg-icon">
                <use xlink:href="{{ '/assets/minima-social-icons.svg#github' | relative_url }}">
                </use>
              </svg>
          </a>
          {%- endif -%}
          {%- if member.linkedin -%}
          <a href="{{member.linkedin}}">
              <svg class="svg-icon">
                <use xlink:href="{{ '/assets/minima-social-icons.svg#linkedin' | relative_url }}">
                </use>
              </svg>
          </a>
          {%- endif -%}
          </p>
      </div>
  </div>
  {% endfor %}
</div> 

<div style="text-align:center;margin:25px auto 0 auto; width:100%;">
<p>
<img src="https://avatars1.githubusercontent.com/u/1526233?v=4" alt="geoinquietos valencia" width="100"/>
</p>
</div>

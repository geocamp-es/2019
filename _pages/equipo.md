---
layout: page
title: Equipo
permalink: /equipo/
team:
    - name: Carles Boils
      github: sliob
      linkedin: https://www.linkedin.com/in/cboils/
    - name: Jorge Sanz
      github: jsanz
      linkedin: https://www.linkedin.com/in/jsanz/
    - name: Laia Linares
      github: laialo
      linkedin: https://www.linkedin.com/in/laialinaresortells/
    - name: Manel Alemany
      github: Manalemart
      linkedin: https://www.linkedin.com/in/manel-alemany-mart%C3%ADnez-67b3256b/
    - name: Pedro-Juan Ferrer
      github: vehrka
      linkedin: https://www.linkedin.com/in/pedrojuanferrer/
    - name: Rafael Oliete
      github: raolbaletco
      linkedin: https://www.linkedin.com/in/raolbal/
    - name: Rafael Sierra
      github: rafasierra
      linkedin: https://www.linkedin.com/in/rafael-sierra-requena-73a10236/
---


Geocamp 2019 está coordinado por un equipo formado por miembros de [Geoinquietos Valencia](http://geoinquietos.org/grupos/valencia/) con la colaboración inestimable del resto de la comunidad de Geoinquietos y organizadores de pasadas ediciones de Geocamp España.

<div style="display:flex;flex-direction:row;flex-wrap: wrap; justify-conten: center; align-items: center; align-content: center;">
{% for member in page.team %}
<div  style="flex-grow:1;text-align:center;">
    <div>{%- avatar user=member.github size=150 -%}</div>
    <div>
        <p>{{member.name}}<br>
        <a href="https://github.com/{{member.github}}">
            <svg class="svg-icon grey"><use xlink:href="{{ '/assets/minima-social-icons.svg#github' | relative_url }}"></use></svg>
        </a>
        <a href="{{member.linkedin}}">
            <svg class="svg-icon grey"><use xlink:href="{{ '/assets/minima-social-icons.svg#linkedin' | relative_url }}"></use></svg>
        </a>
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

# sprint4-javascript-ES6-itacademy

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo_name, twitter_handle, email, project_title, project_description
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Y2KWebs/sprint2-animacion-itacademy">
    <img src="data:image/png;base64,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" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">ES6</h3>

  <p align="center">
    Ejercicios de prática de Ecma 6.
    <br />


  </p>
</p>

<!-- ABOUT THE PROJECf -->

## Proyecto de ES6 para itacademy

[contributors-shield]: https://img.shields.io/github/contributors/Y2KWebs/sprint4-javascript-ES6-itacademy.svg?style=for-the-badge
[contributors-url]: https://github.com/Y2KWebs/sprint4-javascript-ES6-itacademy/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/sprint4-javascript-ES6-itacademy.svg?style=for-the-badge
[forks-url]: https://github.com/Y2KWebs/sprint4-javascript-ES6-itacademy/network/members
[stars-shield]: https://img.shields.io/github/stars/Y2KWebs/sprint4-javascript-ES6-itacademy.svg?style=for-the-badge
[stars-url]: https://github.com/Y2KWebs/sprint4-javascript-ES6-itacademy/stargazers
[issues-shield]: https://img.shields.io/github/issues/Y2KWebs/sprint4-javascript-ES6-itacademy.svg?style=for-the-badge
[issues-url]: https://github.com/Y2KWebs/sprint4-javascript-ES6-itacademy/issues
[license-shield]: https://img.shields.io/github/license/Y2KWebs/sprint4-javascript-ES6-itacademy.svg?style=for-the-badge
[license-url]: https://github.com/Y2KWebs/sprint4-javascript-ES6-itacademy/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/y2kwebs
[product-screenshot]: ./images/screenshot.png

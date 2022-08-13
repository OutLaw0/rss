const headerInner = `
<h1>Async Race</h1>
<nav class="nav">
<ul class="nav__list">
<li>
  <button class="btn" data-btn="garage"> Garage </button>
</li>
<li>
  <button class="btn" data-btn="winners"> Winners </button>
</li>
</ul>
</nav>
`;

const settingsInner = `
<input type="text" name="create" id="input-create" maxlength ="30" placeholder="At least one letter">
<input type="color" name="create" id="input-color-create">
<button class="btn" type="submit" data-submit="create">Create</button>
<input type="text" name="update" id="input-update" maxlength ="30" placeholder="At least one letter" disabled >
<input type="color" name="update" id="input-color-update" disabled>
<button class="btn" type="submit" data-submit="update" disabled>Update</button>
<div class="settings__race">
  <button class="btn" data-btn="race">Race</button>
  <button class="btn inactive" data-btn="reset" disabled>Reset</button>
  <button class="btn btn-big" data-btn="generate">Generate cars</button>
</div>`;

const renderMainTemplate = (garageInner: string, winnersInner: string) => `
<div class="wrapper">
<div class="garage__settings">
  ${settingsInner}
</div>
<div class="garage">
  ${garageInner}
</div>
<div class="modal"> Porshe win! (2.56s)
</div>
</div>
<div class="winners hidden">
  ${winnersInner}
</div>
<div class="pagination">
<button class="btn prev">Prev</button>
<button class="btn next">Next</button> 
</div>
`;

const footerInner = `<div class="footer__container footer-copyright">
<div class="footer-copyright__element">
    <p class="copyright">©</p>
    <p class="year">2022</p>
    <a class="github-username" href="https://github.com/OutLaw0" target="_blank" rel="noopener noreferrer">github</a>
</div>
<a href="https://rs.school/js/" class="rss" target="_blank"> Rolling Scopes School </a>
</div>`;

export { headerInner, footerInner, settingsInner, renderMainTemplate };

import './alphabet.css';

class Alphabet {
  private navItem = document.querySelector('#nav') as HTMLElement;

  public createNavList(alphabetBase: Set<string>): void {
    let navigationEntries = '';
    alphabetBase.forEach((value) => {
      navigationEntries = this.createDivForCharElement(navigationEntries, value);
    });

    this.navItem.innerHTML = navigationEntries;
    (this.navItem.querySelector('.letterElem') as HTMLElement).classList.add('active');
  }

  private createDivForCharElement(block: string, charToAdd: string): string {
    return `${block}<div class='letterElem' data-filter='${charToAdd}'>${charToAdd}</div>`;
  }

  public navHandler(e: Event, callback: (letter: string) => void): void {
    const target = e.target as HTMLElement;
    const navContainer = e.currentTarget as HTMLElement;

    if (target !== navContainer) {
      if (target.classList.contains('letterElem')) {
        navContainer.querySelectorAll('.letterElem').forEach((elem) => elem.classList.remove('active'));
        target.classList.add('active');
        const letter = target.getAttribute('data-filter') as string;
        callback(letter);
      }
    }
  }
}

export default Alphabet;

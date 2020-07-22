function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Greeting from Humble Coon!';

  return element;
}

document.body.appendChild(component());
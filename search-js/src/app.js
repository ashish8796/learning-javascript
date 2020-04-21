import data from './mock_data.json';

document.addEventListener("DOMContentLoaded", () => {
  let people = data;
  const search = document.querySelector('input');
  const tableBody = document.querySelector('.table-body');
  let iD;
  let hitInput;
  let doNotWorkOnInput = true;

  class Person {
    constructor(first_name, last_name, gender, index) {
      this.first_name = first_name;
      this.last_name = last_name;
      this.gender = gender;
      this.index = index;
    }

    fullName() {
      return `${this.first_name} ${this.last_name}`;
    }

    makeRow() {
      return `
      <td>${this.index}.</td>
      <td>${this.fullName()}</td>
      <td>${this.gender}</td>
    `
    }
  }

  class RenderMarkup {
    constructor(people) {
      this.people = people;
      this.tableBody = document.querySelector('.table-body');
      this.lastPerson = this.people.length - 1;
      this.generateList();
    }

    generateList() {
      let rowFragment = new DocumentFragment();

      this.people.forEach((person, i) => {
        let firstName = person.first_name;
        let lastName = person.last_name;
        let gen = person.gender;
        iD = person.id
        let srNo = hitInput ? i + 1 : iD;
        let myPerson = new Person(firstName, lastName, gen, srNo);
        let trElem = document.createElement('tr');
        trElem.setAttribute('id', `person-${iD}`);
        let row = myPerson.makeRow();

        if (doNotWorkOnInput) {
          if (i === this.lastPerson) {
            // last elment
            let observer = new IntersectionObserver(handleIntersection, {
              threshold: 1,
            })
            observer.observe(trElem);
          }
        }

        trElem.innerHTML = row;
        rowFragment.append(trElem);
      })
      this.tableBody.appendChild(rowFragment)
    }
  }

  let startIndex = 0;
  let endIndex = 100;

  // const markup = new RenderMarkup(people)
  new RenderMarkup(people.slice(startIndex, endIndex))

  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startIndex += 100;
        endIndex += 100;
        new RenderMarkup(people.slice(startIndex, endIndex));
        observer.unobserve(document.getElementById(`person-${iD - 100}`));
      }
    });
  }

  search.addEventListener('input', (event) => {
    let peopleToBeDisplayed;
    let value = event.target.value;

    if (event.target === search) {
      hitInput = true;
    }

    if (value) {
      doNotWorkOnInput = false;
      let srhPerson = RegExp(value, 'ig');
      peopleToBeDisplayed = people.filter(person => srhPerson.test(person.first_name) || srhPerson.test(person.last_name))
      tableBody.innerHTML = '';
      new RenderMarkup(peopleToBeDisplayed);
    }
    else {
      startIndex = 0;
      endIndex = 100;
      doNotWorkOnInput = true;
      hitInput = false;
      tableBody.innerHTML = '';
      new RenderMarkup(people.slice(startIndex, endIndex))
    }
  })
})


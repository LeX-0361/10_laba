fetch('db/skills.json')
  .then(data => data.json())
  .then(skills => { add_skills(); })

  .catch(() => console.error("Упс, что-то пошло не так"));


  function add_skills() { 
    const dl = document.createElement('dl');
    dl.classList.add('skills-list');
    skills.forEach(item => {

        const dt = document.createElement('dt');
        dt.textContent = item.name;
        dt.classList.add(item.css_class);

        const dd = document.createElement('dd');
        dd.classList.add('level');

        const div = document.createElement('div');
        div.style.width = item.level + '%';
        div.textContent = item.level;

        dd.appendChild(div);
        dl.append(dt);
        dl.append(dd);
    });

    document.getElementById('skills').append(dl)
}

add_skills();
fetch('db/skills.json')
    .then(data => data.json())
    .then(skills => {

        const dl = document.createElement('dl');
        dl.classList.add('skills-list');

        skills.forEach(item => {

            const dt = document.createElement('dt');
            dt.textContent = skill.name;
            dt.classList.add(skill.css);

            const dd = document.createElement('dd');
            dd.classList.add('level');

            const div = document.createElement('div');
            div.style.width = skill.level + '%';
            div.textContent = skill.level;

            dd.appendChild(div);
            dl.append(dt);
            dl.append(dd);
        });

        document.getElementById('skills').append(dl);
    })
    .catch(() => console.error("Упс, что-то пошло не так!"));
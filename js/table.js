console.log('App was loaded...');

const id = document.getElementById('id');
const handleIdClick = () => {
    id.classList.toggle('up');
    const sortStuff = stuff.reverse();
    id.removeEventListener('click', handleIdClick);
    render(columns, sortStuff);

    document.getElementById('id').addEventListener('click', handleIdClick)
}
id.addEventListener('click', handleIdClick);

const salary = document.getElementById('salary');
const handleSalaryClick = () => {
    const arrowUp = salary.classList.toggle('up');
    const sortStuff = stuff.sort((a, b) => arrowUp ? a.salary - b.salary : b.salary - a.salary);
    salary.removeEventListener('click', handleSalaryClick);
    render(columns, sortStuff);

    document.getElementById('salary').addEventListener('click', handleSalaryClick)
}
salary.addEventListener('click', handleSalaryClick);

const fullName = document.getElementById('full-name');
const handleFullNameClick = () => {
    const arrowUp = fullName.classList.toggle('up');
    const sortStuff = stuff.sort((a, b) => arrowUp ? (a.fullName < b.fullName ? -1 : (a.fullName > b.fullName ? 1 : 0)) : (a.fullName > b.fullName ? -1 : (a.fullName < b.fullName ? 1 : 0)));

    fullName.removeEventListener('click', handleFullNameClick);
    render(columns, sortStuff);

    document.getElementById('full-name').addEventListener('click', handleFullNameClick)
}
fullName.addEventListener('click', handleFullNameClick);

const position = document.getElementById('position');
const handlePositionClick = () => {
    const arrowUp = position.classList.toggle('up');
    const sortStuff = stuff.sort((a, b) => arrowUp ? (a.position < b.position ? -1 : (a.position > b.position ? 1 : 0)) : (a.position > b.position ? -1 : (a.position < b.position ? 1 : 0)));

    position.removeEventListener('click', handlePositionClick);
    render(columns, sortStuff);

    document.getElementById('position').addEventListener('click', handlePositionClick)
}
position.addEventListener('click', handlePositionClick);

const tech = document.getElementById('tech');
const handleTechClick = () => {
    const arrowUp = tech.classList.toggle('up');
    const sortStuff = stuff.sort((a, b) => arrowUp ? (a.skill < b.skill ? -1 : (a.skill > b.skill ? 1 : 0)) : (a.skill > b.skill ? -1 : (a.skill < b.skill ? 1 : 0)));

    tech.removeEventListener('click', handleTechClick);
    render(columns, sortStuff);

    document.getElementById('tech').addEventListener('click', handleTechClick)
}
tech.addEventListener('click', handleTechClick);

const exp = document.getElementById('exp');
const handleExpClick = () => {
    const arrowUp = exp.classList.toggle('up');
    const sortStuff = stuff.sort((a, b) => arrowUp ? (a.exp - b.exp) : (b.exp - a.exp));

    exp.removeEventListener('click', handleExpClick);
    render(columns, sortStuff);

    document.getElementById('exp').addEventListener('click', handleExpClick)
}
exp.addEventListener('click', handleExpClick);

const sex = document.getElementById('sex');
const handleSexClick = () => {
    const arrowUp = sex.classList.toggle('up');
    const sortStuff = stuff.sort((a, b) => arrowUp ? (a.sex < b.sex ? -1 : (a.sex > b.sex ? 1 : 0)) : (a.sex > b.sex ? -1 : (a.sex < b.sex ? 1 : 0)));

    sex.removeEventListener('click', handleSexClick);
    render(columns, sortStuff);

    document.getElementById('sex').addEventListener('click', handleSexClick)
}
sex.addEventListener('click', handleSexClick);


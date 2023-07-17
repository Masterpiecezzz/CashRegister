let answer = document.querySelector('p:empty')
let tab = new Array()
const marks = new Array('0','1','2','3','4','5','6','7','8','9','+','-','*','/','cc','.','=','dp')
document.addEventListener('click', (e) =>
{if(marks.includes(e.target.children[0].textContent)) {addToDisplay(e.target.children[0].textContent)}
else if((e.target.children[0].textContent).includes('zł'))
{
    if(tab.length > 0) {tab.push('+')}
    addToDisplay((e.target.children[0].textContent).replace('zł', ''))
}
else {e.preventDefault()}
})
function print()
{
    document.querySelector('.containerone').style.display = 'none'
    document.querySelector('.containertwo').style.display = 'none'
    document.querySelector('.containerthree').style.display = 'block'
    document.querySelector('.containerthree').children[1].querySelector('p:empty').textContent = tab.join('')
}
function addToDisplay(value)
{
    switch (value)
    {
        case 'dp': {print()}
        break
        case 'cc': {tab = []}
        break
        case '=': {tab = [eval(tab.join(''))]}
        break
        default: {tab.push(value)}
        break
    }
    answer.textContent = tab.join('')
}
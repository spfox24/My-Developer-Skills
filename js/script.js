// IPO - Input Process Output

// Constants and Variables (State)

let skills;


// Cached Element References

const $button = $('button');
const $ul = $('ul');
const $input = $('input');
const $document = $('document');

// Event Listeners

$button.on('click', handleAddSkill);
$ul.on('click', handleDelete);
window.addEventListener('load', reload);

// Functions

init();

function init() {
    skills = [];
    render();
}

function handleAddSkill() {
    // Store the value from the input tag inside a local variable
    const skill = $input.val();
    // check to make sure we have skill data
    if(skill) {
    // create the UI for a skill
        const $skill = $(`<li>${skill}</li>`)
    // Local Storage
        localStorage.setItem(skill, 'item')
    // push the skill UI into the skills list
        skills.push($skill);
    // clear the input tag's value
        $input.val('');
    // call render()
        render()
    } else return;
};

function reload() {
    let array = Object.keys(localStorage);
        array.forEach(items => {
            $ul.append(`<li>${items}</li>`);
        });
 };

function handleDelete() {
// Delete added skills
    $($ul).on('click', 'li', function() {
        localStorage.removeItem(this.innerHTML);
        $(this).closest('li').fadeOut(1000, function() {
            $(this).remove();
        });
    });
}

function render() {
// Take the list of skills in the skills array and add them to the UL tag
    if(!skills.length) $ul.css('margin-bottom', '30px');
    else $ul.css('margin-bottom', '0px');

    $ul.html(skills);
}

const btn = document.getElementById("calculate");

btn.addEventListener("click",()=>
{
    calculateGrade();
});

function calculateGrade()
{
    const midMarks = parseFloat(document.getElementById('marks').value);
    const gradeOption = parseInt(document.getElementById('grade-option').value);
    const result = document.getElementById('result');

    if (isNaN(midMarks) || midMarks < 0 || midMarks > 100) 
    {
        result.textContent = 'Please enter a valid mid term mark between 0 to 100.';
        return;
    }

    let desiredGrade;

    switch (gradeOption) 
    {
        case 1: desiredGrade = 90; break;
        case 2: desiredGrade = 85; break;
        case 3: desiredGrade = 80; break;
        case 4: desiredGrade = 75; break;
        case 5: desiredGrade = 70; break;
        case 6: desiredGrade = 65; break;
        case 7: desiredGrade = 60; break;
        case 8: desiredGrade = 50; break;
        case 9: desiredGrade = 50; break;
        default:
            result.textContent = 'Please select a valid grade option.';
        return;
    }

    const requiredMarks = (desiredGrade - (midMarks * 0.4)) / 0.6;
    const marksNeeded = Math.ceil(requiredMarks);

    if (marksNeeded <= 100) 
    {
        result.textContent = `To achieve your desired grade, you need to score ${marksNeeded} marks in your final exam. Best of luck!`;
    } 

    else 
    {
        result.textContent = `It seems it's not possible to achieve the desired grade with your current mid-term marks.`;
    }
}
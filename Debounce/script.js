
const input = document.querySelector("input")
const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const throttleText = document.getElementById("throttle")

const updatedebounce = debounce(text =>{
    debounceText.textContent = text;
})

input.addEventListener("input", (e)=>{
   defaultText.textContent =  e.target.value;
   updatedebounce(e.target.value);
});

function debounce(cb)
{
    return(args) =>
    {
        let timeout;
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            cb(args);
        }, 1000);
    }
}
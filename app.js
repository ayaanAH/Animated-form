function animatedForm()
{
    const arrows = document.querySelectorAll(".fa-arrow-down");
    arrows.forEach(arrow=>
        {
            arrow.addEventListener('click',()=>
            {
                const input = arrow.previousElementSibling;
                const parent = arrow.parentElement;
                const nextForm = parent.nextElementSibling;

                if(input.type === "text" && validateUser(input))
                {
                    nextSlide(parent, nextForm);
                }
                else if (input.type === "email" && validateEmail(input))
                {
                    nextSlide(parent, nextForm);
                }
                else if (input.type === "password" && validatePass(input))
                {
                    nextSlide(parent, nextForm);
                }
                else{
                    parent.style.animation = "shake 0.5s ease"
                }

                parent.addEventListener("animationend",()=>
                {
                    parent.style.animation =  "";
                })

            });
        });
}

function validateUser(user)
{
    if (user.value.length <6)
    {
        error('#990000');
    }
    else
    {
        error('#65b965');
        return true;
    }

}

function validateEmail(email)
{
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validation.test(email.value))
    {
        error('#65b965');
        return true;
    }
    else
    {
        error('#990000');
    }

    
}

function validatePass(pass)
{
    var validation = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(validation.test(pass.value))
    {
        error('#65b965');
        return true;
    }
    else
    {
        error('#990000');
    }
}

function nextSlide(parent, nextForm)
{
    parent.classList.add("inactive");
    parent.classList.remove("active");
    nextForm.classList.add("active");
}

function error(color)
{
    document.body.style.backgroundColor = color;
}

animatedForm();
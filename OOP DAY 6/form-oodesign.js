class Form
{
    #frm = undefined;

    constructor(id)
    {
        this.#frm = document.getElementById(id);
        this.#frm.addEventListener("submit", this.submit.bind(this));
               
    }
    show()
    {
        this.#frm.style.visibility='visible';     
    }

    hide()
    {
       this.#frm.style.visibility='hidden';     
    }

    submit()
    {
        this.hide();
    }

    get User()
    {
        return this.#frm.elements[0].value;
    }

    get Password()
    {
        return this.#frm.elements[1].value;
    }
}